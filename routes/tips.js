import { Router } from "express"
import * as tipsCtrl from "../controllers/tips.js"
import { isLoggedIn } from "../middleware/middleware.js"


export{
    router
}

const router = Router()

router.get("/", tipsCtrl.index)
router.get("/:id", tipsCtrl.show)
router.post("/", isLoggedIn, tipsCtrl.create)
router.put("/:id/flip-helpful", isLoggedIn, tipsCtrl.flipHelpful)