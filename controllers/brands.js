import { Profile } from "../models/profile.js"
import { User } from "../models/user.js"

export{
    newBrand as new,
}



function newBrand(req, res){
  console.log("this better work, I am tired")
  res.render("brands/new",{
    Profile,
    User
  })
}