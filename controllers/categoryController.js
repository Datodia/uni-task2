const Category = require('../models/category');

const createCategory = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        const category = await newCategory.save();
        res.status(201).json({success: true, data: category});
    } catch (err) {
        res.status(400).json({success: false, data: null, error: err.message });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({success: true, data: categories});
    } catch (err) {
        res.status(400).json({success: false, data: null, error: err.message});
    }
};

module.exports = {createCategory, getAllCategories}