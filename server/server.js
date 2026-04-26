const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Test route — browser mein check karne ke liye
app.get('/', (req, res) => {
  res.json({ message: 'MoodBeats server chal raha hai! 🎵' });
});

// Songs route
const songsRouter = require('./routes/songs');
app.use('/api/songs', songsRouter);

app.listen(PORT, () => {
  console.log(`Server port ${PORT} pe chal raha hai!`);
});