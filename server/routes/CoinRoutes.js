import express from "express";
const router = express.Router();
import { list,show,create,update,remove } from "../Controllers/CoinsController";

router.get("/coins", list);
router.get("/coins/:id", show);
router.post("/coins", create);
router.put("/coins/:id", update);
router.delete("/coins/:id", remove);

export default router;