const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('servicio', {
    title: 'Pagina de servicio',
    message: 'Bievenido a la pagina de servicio.',
    user: { name: 'Sergio', role: 'Admin' },
    items: ['Restaurante', 'Piscina', 'Deporte'],
    date: new Date().toLocaleDateString(),
  });
});

module.exports = router;
