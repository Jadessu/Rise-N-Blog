import { Router } from "express"
import * as blogsCtrl from "../controllers/blogs.js"
import { isLoggedIn } from "../middleware/middleware.js"


export{
    router
}

const router = Router()


router.get("/", blogsCtrl.index)
router.get("/new",  blogsCtrl.new)

router.get("/:id", blogsCtrl.show)
router.get("/:id/edit", isLoggedIn, blogsCtrl.edit)
router.post("/", isLoggedIn, blogsCtrl.create)
router.put("/:id", isLoggedIn, blogsCtrl.update)
router.put("/:id/flip-educational", isLoggedIn, blogsCtrl.flipEducational)
router.delete("/:id", isLoggedIn, blogsCtrl.delete)