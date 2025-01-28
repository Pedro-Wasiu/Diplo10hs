const express = require('express'); // Importar express
const router = express.Router(); // Crear el router
const usuariosModel = require('../../models/usuariosModel'); // Ruta relativa al modelo

// Ruta para renderizar el formulario de login
router.get('/', (req, res) => {
  res.render('admin/login', { layout: 'admin/layout' });
});

// Ruta para procesar el formulario de login
router.post('/', async (req, res, next) => {
  try {
    const usuario = req.body.usuario;
    const password = req.body.password;

    const data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
        req.session.id_usuario = data.id;
        req.session.nombre = data.usuario;
        console.log("Sesión iniciada:", req.session); // <-- Verifica que los datos se están guardando
        res.redirect('/admin/novedades');
    } else {
        res.render('admin/login', {
            layout: 'admin/layout',
            error: true, // Error si el usuario o contraseña son incorrectos
        });
    }
    
  } catch (error) {
    console.error(error);
    res.render('admin/login', {
      layout: 'admin/layout',
      error: true, // Error en caso de fallo técnico
    });
  }
});

// Ruta para manejar el logout
router.get('/logout', (req, res) => {
  req.session.destroy(); // Destruir la sesión
  res.redirect('/admin/login'); // Redirigir al login
});

// Exportar el router
module.exports = router;
