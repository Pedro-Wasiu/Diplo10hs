const express = require('express');
const router = express.Router();

// Middleware `secured` importado desde app.js
const { secured } = require('../../app'); // Asegúrate de que esta ruta sea correcta

// Ruta protegida para `novedades`
router.get('/', secured, function (req, res, next) {
    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre, // Accediendo al nombre del usuario desde la sesión
    });
});

module.exports = router;
