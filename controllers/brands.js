import { Profile } from "../models/profile.js"

export{
    newBrand as new,
}

function newBrand(req, res){
    // res.render("brands/new")
    // console.log("this is a new brand statement")
        console.log("this works")
        Profile.findById(req.params.id)
        .then(profile => {
          Profile.findById(req.user.profile._id)
          .then(self => {
            const isSelf = self._id.equals(profile._id)
            res.render("brands/new", {
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