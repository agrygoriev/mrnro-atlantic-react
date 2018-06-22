const express = require("express");
const router = express.Router();

// @route GET api/logs/test
// @desc  Tests log route
// @access  Public

router.get("/test", (req, res) =>
  res.json({
    msg: "Logs works"
  })
);

module.exports = router;
