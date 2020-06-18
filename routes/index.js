const express = require("express");
const router = express.Router();
const db = require("../models");
const ContactForm = require('../models/contactForm');

router.post("/api/contactForm", (req, res) => {
    // if we want to add a value we can add the code "req.body.<property name we want> = <value that we want for that property>"
     db.ContactForm.create(req.body,
       function (response) {
         // res.send(response); WHY is this SEND?
         res.json(response)
       }
     );
   });

   module.exports = router;