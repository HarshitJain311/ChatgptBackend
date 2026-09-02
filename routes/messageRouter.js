import express from "express"
import authUserMiddleware from "../middleware/authUserMiddleware.js"
import { getMessage, sendMessage } from "../controllers/messageController.js";
import authenticatedRateLimiter from "../middleware/authenticatedRateLimiter.js"

const messageRouter = express.Router();

messageRouter.use(authUserMiddleware);
messageRouter.use(authenticatedRateLimiter);

// getMessage, sendMessage

messageRouter.post("/",sendMessage);
messageRouter.get("/:chatId",getMessage);
messageRouter.post("/:chatId",sendMessage);




export default messageRouter;