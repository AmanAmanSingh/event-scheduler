const express = require("express");
const router = express.Router();
const eventInfo = require("../models/event-model");


router.get("/", (req, res) => {
    return res.send("testinggg")
})



//CREATE A NEW EVENT
router.post("/v1/events", async (req, res) => {
    try {
        const { title, description, location, startTime, endTime } = req.body
        if (req?.body?.title == "") {
            return res.status(400).json({
                "error": "Validation error:Title is required"
            })
        }
        let eventDetail = await eventInfo.create({
            title,
            description,
            location,
            startTime,
            endTime
        })
        return res.status(201).json({
            message: "success",
            eventDetail
        })
    } catch (e) {
        return res.status(500).json({
            message: e.message
        })
    }

})


//GET LIST ALL EVENTS
router.get("/v1/events", async (req, res) => {
    try {
        let list = await eventInfo.find();
        return res.status(200).json({
            message: "OK",
            list
        })
    } catch (e) {
        return res.status(500).json({
            message: e.message
        })
    }

});


//GET SPECIFIC EVENT
router.get("/v1/events/:id", async (req, res) => {
    const { id } = req.params;
    try {
        let specificUser = await eventInfo.findById(id);
        return res.status(200).json({
            message: "OK",
            specificUser
        })
    } catch (e) {
        return res.status(404).json({
            message: "there is no event with that id"
        })
    }

});



//DELETE SPECFIC USER
router.delete("/v1/events/:id", async (req, res) => {
    const { id } = req.params;
    try {
        let specificUser = await eventInfo.findByIdAndDelete(id);
        return res.status(204).send();

    } catch (e) {
        return res.status(404).json({
            message: "there is no event with that id"
        })
    }

});



//Update an event
router.put("/v1/events/:id", async (req, res) => {
    const { id } = req.params;
    try {
        if (req?.body?.title == "") {
            return res.status(400).json({
                "error": "Validation error:Title is required"
            })
        }
        let updatedDeatail = await eventInfo.findOneAndUpdate(
            id,
            {
                $set: {
                    data: req.body
                }
            }
        );
        return res.status(200).json({
            messaage: "success",
            updatedDeatail
        });
    } catch (e) {
        return res.status(404).json({
            message: "there is no event with that id"
        })
    }

});




module.exports = router;