
var express = require("express");
var bodyParser = require("body-parser");
const skill = require("../models/skill");
const { send } = require("express/lib/response");
const res = require("express/lib/response");

var jsonparser = bodyParser.json();
const router = express.Router();




router.post("/save", async (req, res) => {
    let body = req.body;
    let objective = new skill();

    if (body.data.id != "") {
        objective = await skill.findById(body.data.id);
    }
    objective.title = body.data.title;
    objective.save().then(result => {
        res.end(JSON.stringify(result));
    }, err => {
        res.end(JSON.stringify(err));

    });
    let title = body.data.title;

});


router.post("/list", async (req, res) => {
    let body = req.body;
    let objectives = await skill.find();

    res.json({ data: objectives });
});





router.post("/get", async (req, res) => {
    let body = req.body;
    let objectives = await Skill.findById(body.data.id);
    res.json({ data: objectives });
});

router.post("/delete", async (req, res) => {
    let body = req.body;
     await Objective.findByIdAndDelete(body.data.id);
     let data = {
        "data":
        {
            "status":"success"
        }
    }

     res.end(JSON.stringify(data));
});



module.exports = router;