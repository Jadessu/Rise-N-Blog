import { Profile } from "../models/profile.js"

export{
    index,
    show,
    createSkill,
    deleteSkill

}

function deleteSkill(req, res){
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.skills.remove({_id: req.params.id})
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function createSkill(req, res){
  console.log("this works")
  console.log(req.body)
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.skills.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile}`)
  })
}

function show(req, res){
    console.log(req.params.id)
    Profile.findById(req.params.id)
    .populate("skills")
    .then(profile => {
      Profile.findById(req.user.profile._id)
      .then(self => {
        console.log(profile, "profile")
        const isSelf = self._id.equals(profile._id)
        res.render("profiles/show", {
          title: `${profile.name}'s profile`,
          profile,
          self,
          isSelf
        })
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
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