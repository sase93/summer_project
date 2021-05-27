const express = require("express");
const router = express.Router();
const Instructor = require("../backend_models/instructorModel");

router.route("/add").post((req, res) => {
    console.log('attempt add');
    const name = req.body.name;
    const rank = req.body.rank;
    const title = req.body.title;
    const newInstructor = new Instructor({
        name,
        rank,
        title
    });
    console.log('newInstructor OK');
    newInstructor.save();
    console.log('newInstructor saved');
});

router.route("/instructors").get((req, res) => {
    Instructor.find()
    .then(foundInstructors => res.json(foundInstructors));
});

module.exports = router;