import { render } from "ejs"
import { Blog } from "../models/blog.js"

export{
    index,
    create,
    show,
    flipEducational,
    edit,
    update,
    deleteBlog as delete,
    newBlog as new,
}


function newBlog(req, res){
  res.render("blogs/new", {
    title: "Add Blog"
  })
}

function deleteBlog(req, res) {
  console.log("this runs")
    Blog.findById(req.params.id)
    .then(blog => {
      if(blog.owner.equals(req.user.profile._id)) {
        console.log(blog)
        blog.delete()
        .then(() => {
          res.redirect("/blogs")
        })
      } else {

        throw new Error("Level 8 only")
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect('/blogs')
    })
  }
  

function update(req, res) {
    Blog.findById(req.params.id)
    .then(blog => {
      if (blog.owner.equals(req.user.profile._id)) {
        req.body.educational = !!req.body.educational
        blog.update(req.body, {new: true})
        .then(blog => {
          console.log(blog)
          res.redirect(`/blogs/${blog._id}`)
        })
      } else {
        
        throw new Error("NOT AUTHORIZED")
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/blogs`)
    })
  }
  

function edit(req, res){
    Blog.findById(req.params.id)
    .then(blog => {
        res.render("blogs/edit", {
            blog,
            title: "edit"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/blogs")
    })
}

function flipEducational(req, res) {
    Blog.findById(req.params.id)
    .then(blog => {
      blog.educational = !blog.educational
      blog.save()
      .then(()=> {
        res.redirect(`/blogs/${blog._id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/blogs')
    })
  }

function show(req, res){
    Blog.findById(req.params.id)
    .populate("owner")
    .then(blog => {
        res.render("blogs/show", {
            blog,
            title: "Blog Details"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/blogs")
    })
   
}

function create(req, res){
    console.log("I am creating")
    console.log(req.body)

    req.body.owner = req.user.profile
    req.body.educational = !!req.body.educational
    Blog.create(req.body)
    .then(blog => {
        res.redirect("/blogs")
    })
    .catch(err => {
        console.log(err)
        res.redirect("/blogs")
    })


}


function index(req, res) {
    Blog.find({})
    .then(blogs => {
      res.render("blogs/index", {
        blogs,
        title: "Blogs"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/blogs")
    })
  }