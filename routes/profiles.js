import { Router } from "express"
import { isLoggedIn } from "../middleware/middleware"

export{
    router
}

const router = Router()

router.get("/", isLoggedIn, )