import { Profile } from "../models/profile.js"

export{
    index,
    show
}

function show(req, res){
    console.log("this works")
}

function index(req, res) {
    Profile.find({})
    .then(profiles => {
      res.render("profiles/index", {
        profiles,
        title: "Profile"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profiles/${req.user.profile}`)
    })
  }