// Express
const epxress = require("express");
// Router
const router = epxress.Router();
// Controller
const courseController = require("./../../controller/v1/course");

// Routers
router
    .route("/edit/:id")
    .post(courseController.edit)

router
    .route("/remove/:id")
    .get(courseController.remove)

router
    .route("/")
    .get(courseController.getAll)
    .post(courseController.create)

router
    .route("/search")
    .get(courseController.search)


// Export
module.exports = router;