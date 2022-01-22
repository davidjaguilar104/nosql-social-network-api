const router = require("express").Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require("../../controllers/thought-controller");

// get all thoughts and post a thought
router.route("/").get(getAllThoughts).post(createThought);

// get a single thought by id and also update and delete a thought by id
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);


module.exports = router;