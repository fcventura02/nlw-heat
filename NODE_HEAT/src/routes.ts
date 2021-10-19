import { Router } from "express";
import { AuthenticateController } from "./controllers/AuthenticateController";
import { AuthenticateUserService } from "./services/AuthenticateUserService";

const router = Router();

router.post("/authenticate", new AuthenticateController().handle);

export { router };
