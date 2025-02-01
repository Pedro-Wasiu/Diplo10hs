const express = require('express');
const router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

// Listar novedades
router.get('/', async function (req, res, next) {
    try {
        console.log('Fetching all novedades');
        var novedades = await novedadesModel.getNovedades();
        console.log('Fetched novedades:', novedades);
        res.render('admin/novedades', {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            novedades: novedades
        });
    } catch (error) {
        console.log('Error fetching novedades:', error);
        next(error);
    }
}); // Cierro get

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
        console.log('Adding new novedad:', req.body);
        if (req.body.titulo !== "" && req.body.subtitulo !== "" && req.body.cuerpo !== "") {
            await novedadesModel.insertNovedades(req.body);
            console.log('Novedad added successfully');
            res.redirect('/admin/novedades');
        } else {
            console.log('All fields are required');
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
router.get('/eliminar/:id', async (req, res, next) => {
    try {
        var id = req.params.id;
        console.log(`Deleting novedad with ID: ${id}`);
        await novedadesModel.deleteNovedadesById(id);
        console.log(`Novedad with ID ${id} deleted successfully`);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(`Error deleting novedad with ID ${id}:`, error);
        next(error);
    }
});
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
router.post('/modificar', async (req, res, next) => {
    try {
        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        };
        console.log("Obj modif:", obj);
        console.log("modifica novedad con ID:", req.body.id);
        await novedadesModel.modificarNovedadById(obj, req.body.id);
        console.log('Novedad modificada');
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log("Error en la novedad", error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modificó la novedad'
        });
    }
});

module.exports = router;