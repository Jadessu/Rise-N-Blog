import mongoose from "mongoose"
const Schema = mongoose.Schema

export{
    Tip
}

const tipSchema = new Schema({
    article: {
        type: String,
        required: true,
    },
    educational:{
        type: Boolean,
        
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: "Profile"
    },
    category: {
        type: String,
        
    },
    name: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    }
})

const Tip = mongoose.model("Tip", tipSchema)