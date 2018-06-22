const express = require("express");
const router = express.Router();

// @route GET api/route/test
// @desc  Tests route page route
// @access  Public

router.get("/test", (req, res) =>
  res.json({
    msg: "Route works"
  })
);

module.exports = router;
