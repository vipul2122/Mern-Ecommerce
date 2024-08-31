
const {Brand} =require("../model/Brand")
exports.fetchAllBrands= async(req, res) => {
    try {
      const brands= await Brand.find({}).exec()
      res.status(200).json(brands)
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'An error occurred while fetching products.' });
    }
  };
  exports.createBrand= async (req, res) => {
    const brands= new Brand(req.body)
    try {
       const doc= await brands.save()
       res.status(201).json(doc)
    } catch (err) {
      res.status(400).json(err);
    }
  }