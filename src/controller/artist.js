/* eslint-disable no-param-reassign */
const Artist = require('../models/artist');

exports.create = (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    genre: req.body.genre,
  });

  artist.save().then(() => {
    res.status(201).json(artist);
  });
};
exports.list = (req, res) => {
  Artist.find({}, (error, artists) => {
    res.status(200).send(artists);
  });
};
exports.find = (req, res) => {
  Artist.findById(req.params.artistId, (error, artist) => {
    if (!artist) {
      res.status(404).json({ error: 'Artist not found' });
    } else {
      res.status(200).json(artist);
    }
  });
};
exports.update = (req, res) => {
  Artist.findById(req.params.artistId, (error, artist) => {
    if (!artist) {
      res.status(404).json({ error: 'This artist could not be found.' });
    } else {
      if (req.body.genre) {
        artist.genre = req.body.genre;
      }
      if (req.body.name) {
        artist.name = req.body.name;
      }
      artist.save().then(() => {
        res.status(200).send(artist);
      });
      // Artist.update({ _id: artistId }, { $set: { genre: req.body.genre } }, (updatedArtist) => {
      //   res.status(200).send(updatedArtist);
      // });
    }
  });
};
exports.delete = (req, res) => {
  Artist.findById(req.params.artistId, (error, artistdelete) => {
    if (!artistdelete) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      artistdelete.delete().then(() => res.status(204).send());
    }
  });
};
