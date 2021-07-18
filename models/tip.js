import mongoose from "mongoose"
const Schema = mongoose.Schema

// export{
//     Tip
// }

const tipSchema = new Schema({
    detail: {
        type: String,
        required: true,
    },
    helpful:{
        type: Boolean,
        
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: "Profile"
    },
    category: {
        type: String,
        required: true,
    }
})

const Tip = mongoose.model("Tip", tipSchema)