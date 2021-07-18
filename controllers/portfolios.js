import { Profile } from "../models/profile.js"


export {
    index
}
function index(req, res){
    console.log("this is working")
    res.render("portfolios/index")
}