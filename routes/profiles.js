import { Router } from "express"
import { isLoggedIn } from "../middleware/middleware.js"
import * as profilesCtrl from "../controllers/profiles.js"

export{
    router
}

const router = Router()

router.get("/", isLoggedIn, profilesCtrl.index )
router.get("/:id", isLoggedIn, profilesCtrl.show)
// create brand
router.get("/brands", isLoggedIn, profilesCtrl.newBrand )

router.post("/:id/skills", isLoggedIn, profilesCtrl.createSkill)

//posting a brand
router.post("/", isLoggedIn, profilesCtrl.createBrand)
//delete skill
router.delete("/skills/:id", isLoggedIn, profilesCtrl.deleteSkill)
