import { Router } from 'express'
import { isLoggedIn } from "../middleware/middleware.js"
import * as portfoliosCtrl from "../controllers/portfolios.js"



export {
  router
}

const router = Router()

router.get("/", isLoggedIn, portfoliosCtrl.index)
// router.post("/", isLoggedIn, portfoliosCtrl.createAbout)