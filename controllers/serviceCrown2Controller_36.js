const Category_36 = require('../models/Category_36');

exports.getCategories = async (req, res) => {
    try {
        return await Category_36.fetchAll();
    } catch (err) {
        console.log('getCategories', err);
    }
}