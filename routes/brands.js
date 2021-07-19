import { Router } from "express"
import * as brandsCtrl from "../controllers/brands.js"
import { isLoggedIn } from "../middleware/middleware.js"


export {
    router,
}

const router = Router()

router.get("/new", isLoggedIn, brandsCtrl.new)
// router.post("/", brandsCtrl.create)