
const {Category} =require("../model/Category")
exports.fetchAllCategory= async (req, res) => {
    try {
      const categories= await Category.find({}).exec()
      res.status(200).json(categories)
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'An error occurred while fetching products.' });
    }
  };
  exports.createCategory= async (req, res) => {
    const category= new Category(req.body)
    try {
       const doc= await category.save()
       res.status(201).json(doc)
      res.status(200).json(category)
    } catch (err) {
      res.status(400).json(err);
    }
  }