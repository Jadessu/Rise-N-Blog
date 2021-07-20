import { render } from "ejs"
import { Tip } from "../models/tip.js"

export{
    index,
    create,
    show,
    flipEducational,
    edit,
    update,
    deleteTip as delete,
    newTip as new,
}


function newTip(req, res){
  res.render("tips/new", {
    title: "Add Tip"
  })
}

function deleteTip(req, res) {
  console.log("this runs")
    Tip.findById(req.params.id)
    .then(tip => {
      if(tip.owner.equals(req.user.profile._id)) {
        console.log(tip)
        tip.delete()
        .then(() => {
          res.redirect("/tips")
        })
      } else {

        throw new Error("Level 8 only")
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect('/tips')
    })
  }
  

function update(req, res) {
    Tip.findById(req.params.id)
    .then(tip => {
      if (tip.owner.equals(req.user.profile._id)) {
        req.body.educational = !!req.body.educational
        tip.update(req.body, {new: true})
        .then(tip => {
          console.log(tip)
          res.redirect(`/tips/${tip._id}`)
        })
      } else {
        
        throw new Error("NOT AUTHORIZED")
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/tips`)
    })
  }
  

function edit(req, res){
    Tip.findById(req.params.id)
    .then(tip => {
        res.render("tips/edit", {
            tip,
            title: "edit"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/tips")
    })
}

function flipEducational(req, res) {
    Tip.findById(req.params.id)
    .then(tip => {
      tip.educational = !tip.educational
      tip.save()
      .then(()=> {
        res.redirect(`/tips/${tip._id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/tips')
    })
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
    req.body.educational = !!req.body.educational
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