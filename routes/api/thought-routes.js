const router = require("express").Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require("../../controllers/thought-controller");

// get all thoughts 
router.route("/").get(getAllThoughts);

// post a thought
router.route("/:userId").post(createThought);

// get a single thought by id and also update and delete a thought by id
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

// post a reaction to a thought
router.route("/:thoughtId/reactions").post(addReaction)

// delete reaction from a thought
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;