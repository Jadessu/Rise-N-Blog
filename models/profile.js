import mongoose from 'mongoose'

export {
  Profile
}


const aboutSchema = new mongoose.Schema({
  name: String,
  summary: String,
  job: String,
  skills: String,

})



const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  about: [aboutSchema],
  
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)