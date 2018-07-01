const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Dossier model
const Dossier = require("../../models/Dossier");

//Load User model
const User = require("../../models/User");

// @route GET api/dossier/test
// @desc  Tests dossier route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Dossier works" }));

// @route GET api/dossier
// @desc  Get current user dossier
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Dossier.findOne({ user: req.user.id })
      .then(dossier => {
        if (!dossier) {
          errors.nodossier = "There is no info about this user";
          return res.status(404).json(errors);
        }
        res.json(dossier);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route POST api/dossier
// @desc  Create or edit user dossier
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //Get fields
    const dossierFields = {};
    dossierFields.user = req.user.id;
    if (req.body.handle) dossierFields = req.body.handle;

    //Social
    dossierFields.social = {};

    if (req.body.facebook) dossierFields.social.facebook = req.body.facebook;
    if (req.body.youtube) dossierFields.social.youtube = req.body.youtube;
    if (req.body.twitter) dossierFields.social.twitter = req.body.twitter;
    if (req.body.insta) dossierFields.social.insta = req.body.insta;

    //Skills should be splitted in array
    if (typeof req.body.skills !== "undefined") {
      dossierFields.skills = req.body.skills.split(",");
    }

    if (req.body.role) dossierFields = req.body.role;

    Dossier.findOne({ user: req.user.id }).then(dossier => {
      if (dossier) {
        //Update
        Dossier.findOneAndUpdate(
          { user: req.user.id },
          { $set: dossierFields },
          { new: true }
        ).then(dossier => res.json(dossier));
      } else {
        //Create
        //Check if handle exists
        Dossier.findOne({ handle: dossierFields.handle }).then(dossier => {
          if (dossier) {
            errors.handle = "This handle already exists";
            res.status(400).json(errors);
          }

          //Save Dossier
          new Dossier(dossierFields).save().then(dossier => res.json(dossier));
        });
      }
    });
  }
);

module.exports = router;
