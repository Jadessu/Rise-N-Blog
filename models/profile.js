import mongoose from 'mongoose'

export {
  Profile
}


const skillSchema = new mongoose.Schema({
  skillname: String,
  
})

const brandSchema = new mongoose.Schema({
  name: String,
  brandstatement: String,
  job: String,
  
}, {
  timestamps: true
})



const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  skills: [skillSchema],
  brand: [brandSchema],
  
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)