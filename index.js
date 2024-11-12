require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./models/sequelize');
const Lead = require('./models/lead');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(bodyParser.json());

sequelize.authenticate()
  .then(() => {
    console.log('Conectado MySQL');
    return sequelize.sync();
  })
  .catch(err => {
    console.error('Error conexion:', err);
  });

app.post('/api/leads', async (req, res) => {
  try {
    await Lead.create(req.body);

    res.status(200).json({
      CAMPANA: req.body.campana,
      RESULTADO: "OK",
      TELEFONO: req.body.telefono
    });
  } catch (error) {
    console.error('Error al insertar lead:', error);

    let errorMessage;

    if (error.name === 'SequelizeUniqueConstraintError' && error.fields.telefono) {
      errorMessage = "OK: telefono duplicado";
      res.status(200).json({
        CAMPANA: req.body.campana,
        RESULTADO: errorMessage,
        TELEFONO: req.body.telefono
      });
    } else {
      errorMessage = `KO: ${error.message}`;
      res.status(500).json({
        CAMPANA: req.body.campana,
        RESULTADO: errorMessage,
        TELEFONO: req.body.telefono
      });
    }
  }
});


app.delete('/api/leads/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Lead.destroy({ where: { id } });
    if (result === 0) {
      res.status(500).json({ message: 'Lead no encontrado' });
    } else {
      res.status(200).json({ message: 'Lead eliminado con éxito' });
    }
  } catch (error) {
    console.error('Error al eliminar el lead:', error);
    res.status(500).json({ message: 'Error al eliminar lead' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
