import { Router } from "express";
import { AuthenticateController } from "./controllers/AuthenticateController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateController().handle);
router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);
export { router };
