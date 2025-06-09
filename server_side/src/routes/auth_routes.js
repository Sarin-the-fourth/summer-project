import { Router } from "express";
import { check_auth, sign_in, sign_out, sign_up } from "../controller/authcontroller.js";
import { is_admin } from "../middleware/authmiddle.js";
const router = Router();   

router.post("/admin/sign_in", sign_in);  
router.post("/admin/sign_up", sign_up);  
router.post("/admin/sign_out", sign_out);
router.get("/admin/checkauth", is_admin, check_auth);


export default router;  