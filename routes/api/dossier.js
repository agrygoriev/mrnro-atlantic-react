const express = require("express");
const router = express.Router();

// @route GET api/dossier/test
// @desc  Tests dossier route
// @access  Public

router.get("/test", (req, res) =>
  res.json({
    msg: "Dossier works"
  })
);

module.exports = router;
