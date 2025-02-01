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
            novedades
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



module.exports = router;