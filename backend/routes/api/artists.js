const express = require("express");
const asyncHandler = require("express-async-handler");
const { Artist, Album, Song } = require("../../db/models");

const router = express.Router();

router.get("/:id", asyncHandler(async (req, res) => {
  const artistId = parseInt(req.params.id);
  const artist = await Artist.findByPk(artistId);

  const artistSongs = await Song.findAll({
    where: {
      artistId
    }
  })

  const artistAlbums = await Album.findAll({
    where: {
      artistId
    }
  })

  return res.json({
    artist,
    artistAlbums,
    artistSongs
  })
}));

router.get("/", asyncHandler(async (req, res) => {
  const artists = await Artist.findAll();

  return res.json({
    artists
  })
}))

module.exports = router;
