// courseModel
const courseModel = require("./../../models/course");
// Mongo
const mongoose = require("mongoose");


// Controllers
exports.edit = async (req, res) => {
    try {
        const { title } = req.body;
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid course id" });
        }

        const course = await courseModel.findByIdAndUpdate(
            id,
            { title },
            { new: true }
        );

        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        return res.redirect("/courses");
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
};

exports.remove = async (req, res) => {
    try {
        const { id } = req.params;
        const isValidId = mongoose.Types.ObjectId.isValid(id)
        if (!isValidId) {
            return res.status(403).json({
                message: "Your Course ID is not valid !!"
            })
        };
        const course = await courseModel.findByIdAndDelete({ _id: id });

        if (!course) {
            return res.status(404).json({
                message: "Course Not Found !!"
            })
        }

        return res.redirect("/courses");

    } catch (err) {
        return res.status(500).json({
            message: "OoOps! Unknown Error"
        })
    }
}

exports.getAll = async (req, res) => {
    res.render("index", {
        courses: await courseModel.find({}).sort({ createdAt: -1 }),
        title: "Courses Page",
        error: ""
    })
}

exports.create = async (req, res) => {
    try {
        const { title } = req.body;
        if (title == "") {
            return res.status(403).json({
                message: "Pleaser Enter Your Title"
            })
        }
        const course = await courseModel.findOne({ title });

        if (course) {
            return res.render("index", {
                courses: await courseModel.find({}).sort({ createdAt: -1 }),
                title: "Courses Page",
                error: "نامی که برای دوره انتخاب کردید تکراری میباشد !!"
            })
        }

        await courseModel.create({ title });
        return res.status(201).redirect("/courses")
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "OoOps! Unknown Error"
        })
    }
}

exports.search = async (req, res) => {
    const { keyword } = req.query;
    const searchResult = await courseModel.find({
        title: { $regex: keyword, $options: "i" }
    });
    if (searchResult.length === 0) {
        return res.render("index", {
            courses: [],
            title: "Courses Page",
            error: "دوره ای با این عنوان پیدا نشد !!"
        })
    }

    return res.render("index", {
        courses: searchResult,
        title: "Courses Page",
        error: ""
    })
}