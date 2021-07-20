
import { Router } from "express"
import { isLoggedIn } from "../middleware/middleware.js"
import * as profilesCtrl from "../controllers/profiles.js"
import * as brandsCtrl from "../controllers/brands.js"

export{
    router
}

const router = Router()

router.get("/", isLoggedIn, brandsCtrl.new )