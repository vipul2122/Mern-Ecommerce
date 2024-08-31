const {Product} =require("../model/Product")

exports.createProduct=async(req,res)=>{
  const product= new Product(req.body)
  try{
    const response=await product.save()
    res.status(201).json(response)
    console.log(response)
  }catch(err){
    res.status(400).json(err)
  }
}
exports.fetchAllProducts = async (req, res) => {
  try {
    // Create a base query
    let query = Product.find({});
    
    // Apply category filter if provided
    if (req.query.category) {
      query = query.where({ category: req.query.category });
    }

    // Apply brand filter if provided
    if (req.query.brand) {
      query = query.where({ brand: req.query.brand });
    }

    // Create a separate query for counting documents
    const countQuery = query.clone();

    // Apply sorting if provided
    if (req.query._sort && req.query._order) {
      const sortOrder = req.query._order === 'desc' ? -1 : 1;
      query = query.sort({ [req.query._sort]: sortOrder });
    }

    // Apply pagination if provided
    if (req.query._page && req.query._limit) {
      const pageSize = parseInt(req.query._limit, 10) || 10;
      const page = parseInt(req.query._page, 10) || 1;
      query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }

    // Execute the queries
    const products = await query.exec();
    const totalDocs = await countQuery.countDocuments().exec();
    
    console.log(totalDocs);
    res.status(200).json({ products, totalDocs });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'An error occurred while fetching products.' });
  }
};

exports.fetchProductById=async(req,res)=>{
  const {id}=req.params
  try{
    const product=await Product.findById(id)
    res.status(201).json(product)
  }catch(err){
    res.status(400).json(err)
  }
 
}

exports.updateProduct=async(req,res)=>{
  const {id}=req.params
  try{
    const product=await Product.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(product)
  }catch(err){
    res.status(400).json(err)
  }
}


  

