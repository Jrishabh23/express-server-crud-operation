import express from "express";
import {
    createUser,
    deleteUser,
    updateUser,
    userList,
} from "./controller/user.js";
const router = express.Router();

router.post("/create-user", createUser);

router.get("/user", userList);

router.delete("/delete-user/:id", deleteUser);

router.patch("/update-user/:id", updateUser);

export default router;
