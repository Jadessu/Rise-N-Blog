import { Router } from "express"
import * as tipsCtrl from "../controllers/tips.js"
import { isLoggedIn } from "../middleware/middleware.js"


export{
    router
}

const router = Router()

router.get("/", isLoggedIn, portfoliosCtrl.index )