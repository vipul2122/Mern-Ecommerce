const express=require("express");
const {fetchAllBrands,createBrand}=require("../controllers/Brand")
const router=express.Router()
router
.get("/",fetchAllBrands)
.post("/",createBrand)

exports.router=router;