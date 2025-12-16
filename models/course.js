// Mongoose
const mongoose = require("mongoose");
// Schema
const schema = mongoose.Schema({
    title: { type: String, required: true }
}, { timestamps: true });

// Model
const model = mongoose.model("Course", schema);

// Export
module.exports = model;