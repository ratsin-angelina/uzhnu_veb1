const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reviewRoutes = require('./routes/reviews');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ratsuser:qwerty123@sc.sdfny2a.mongodb.net/?appName=SC')
  .then(() => console.log('MongoDB підключено'))
  .catch(err => console.error('Помилка MongoDB:', err));

app.use('/api/api', reviewRoutes);

app.listen(PORT, () => console.log(`Сервер запущено на http://localhost:${PORT}`));
