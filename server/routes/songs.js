const express = require('express');
const router = express.Router();
const axios = require('axios');
const localSongs = require('../data/songs.json');

const JAMENDO_KEY = '70dd8258';

// Local songs
router.get('/', (req, res) => {
  res.json(localSongs);
});

// Jamendo se live songs
router.get('/jamendo', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.jamendo.com/v3.0/tracks/?client_id=${JAMENDO_KEY}&format=json&limit=20&audioformat=mp31`
    );
    
    const songs = response.data.results.map((track, i) => ({
      id: 100 + i,
      title: track.name,
      artist: track.artist_name,
      duration: formatDuration(track.duration),
      image: track.album_image,
      audioUrl: track.audio,
      category: 'trending'
    }));
    
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: 'Jamendo se data nahi aaya' });
  }
});

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

module.exports = router;