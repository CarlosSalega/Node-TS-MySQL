import { Router } from "express";
import {
    deleteUser,
    getAllUsers,
    getUser,
    postUser,
    putUser,
} from "../controllers/users.controller";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
