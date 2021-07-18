import mongoose from 'mongoose'

export {
  Profile
}

const aboutSchema = new mongoose.Schema({
  name: String,
  summary: String,
  job: String,

})

const educationSchema = new mongoose.Schema({
  year: Number,
  title: String,
  description: String
})

const portfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
})

const contactSchema = new mongoose.Schema({
  email: String,

})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  about: [aboutSchema],
  education: [educationSchema],
  portfolio: [portfolioSchema],
  contact: [contactSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)