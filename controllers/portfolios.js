import { Profile } from "../models/profile.js"


export {
    index
}

function index(req, res){
    console.log("portfolios page")
    res.render("portfolios/index")
}

