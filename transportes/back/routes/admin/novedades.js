const express = require('express');
const router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);

// Listar novedades
router.get('/', async function (req, res, next) {
    try {
        var novedades = await novedadesModel.getNovedades();

        novedades = novedades.map(novedad => {
            if (novedad.img_id) {
                const imagen = cloudinary.image(novedad.img_id, {
                    width: 100,
                    height: 100,
                    crop: 'fill'
                });

                return {
                    ...novedad,
                    imagen
                };
            } else {
                return {
                    ...novedad,
                    imagen: ''
                };
            }
        });

        res.render('admin/novedades', {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            novedades
        });
    } catch (error) {
        console.log('Error fetching novedades:', error);
        next(error);
    }
});
// Cierro get

// Render agregar form
router.get('/agregar', (req, res, next) => {
    console.log('Rendering agregar form');
    res.render('admin/agregar', {
        layout: 'admin/layout'
    }); // Cierro render
}); // Cierro get

// Agregar nueva novedad
router.post('/agregar', async (req, res, next) => {
    try {
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            const imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.titulo !== "" && req.body.subtitulo !== "" && req.body.cuerpo !== "") {
            await novedadesModel.insertNovedades({
                ...req.body,
                img_id
            });
            res.redirect('/admin/novedades')
        }


        else {

            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log('Error adding novedad:', error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargó la novedad'
        });
    }
}); // Cierro post

// Eliminar una novedad
// Para eliminar una novedad
router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    let novedad = await novedadesModel.getNovedadesById(id);
    if (novedad.img_id) {
        await destroy(novedad.img_id);
    }

    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades');
}); // cierra get de eliminar

// cierre get eliminar

// Obtener una novedad para modificar
router.get('/modificar/:id', async (req, res, next) => {
    try {
        var id = req.params.id;
        console.log(`Fetching novedad with ID: ${id}`);
        var novedad = await novedadesModel.getNovedadesById(id);
        console.log(`Fetched novedad: ${JSON.stringify(novedad)}`);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            novedad
        });
    } catch (error) {
        console.log(`Error fetching novedad with ID ${id}:`, error);
        next(error);
    }
});

// Modificar la novedad
const destroy = util.promisify(cloudinary.uploader.destroy); 

router.post('/modificar', async (req, res) => {
    try {
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        // 1. Procesar checkbox de eliminar imagen
        if (req.body.img_delete === "1") {
            await destroy(req.body.img_original); 
            img_id = null;
            borrar_img_vieja = true;
        } 
        // 2. Subir nueva imagen si existe
        else if (req.files?.imagen) {
            const imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
            borrar_img_vieja = true;
        }

        // 3. Eliminar imagen anterior si hubo cambios
        if (borrar_img_vieja && req.body.img_original) {
            await destroy(req.body.img_original);
        }

        // 4. Actualizar datos
        const obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            img_id
        };

        await novedadesModel.modificarNovedadesById(obj, req.body.id);
        res.redirect('/admin/novedades');

    } catch (error) {
        console.error("Error en modificación:", error);
        res.render('admin/modificar', { 
            layout: 'admin/layout',
            error: true,
            message: 'Error al modificar la novedad' 
        });
    }
});

module.exports = router;