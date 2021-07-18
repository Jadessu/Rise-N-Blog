import { Tip } from "../models/tip.js"

export{
    index,
    create,
    show,
}

function show(req, res){
    Tip.findById(req.params.id)
    .populate("owner")
    .then(tip => {
        res.render("tips/show", {
            tip,
            title: "Tip Details"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/tips")
    })
   
}

function create(req, res){
    console.log("I am creating")
    console.log(req.body)

    req.body.owner = req.user.profile
    req.body.helpful = !!req.body.helpful
    Tip.create(req.body)
    .then(tip => {
        res.redirect("/tips")
    })
    .catch(err => {
        console.log(err)
        res.redirect("/tips")
    })


}



function index(req, res) {
    Tip.find({})
    .then(tips => {
      res.render("tips/index", {
        tips,
        title: "Tips"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/tips")
    })
  }