const express = require("express");
const asyncHandler = require("express-async-handler");
const { Artist } = require("../../db/models");

const router = express.Router();

router.get("/:id", asyncHandler(async (req, res) => {
  const artistId = parseInt(req.params.id);
  const artist = await Artist.findByPk(artistId);

  console.log("artist:", artist)

  return res.json({
    artist
  })
}));

module.exports = router;
