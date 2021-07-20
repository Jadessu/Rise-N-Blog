import mongoose from 'mongoose'

export {
  Profile
}


const skillSchema = new mongoose.Schema({
  skillname: String,
  
})



const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  skills: [skillSchema],
  
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)