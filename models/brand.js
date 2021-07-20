import mongoose from "mongoose"
const Schema = mongoose.Schema

export{
    Brand
}

const brandSchema = new mongoose.Schema({
    name: String,
    brandstatement: String,
    job: String,
    
  }, {
    timestamps: true
  })
  



const Brand = mongoose.model("Brand", brandSchema)