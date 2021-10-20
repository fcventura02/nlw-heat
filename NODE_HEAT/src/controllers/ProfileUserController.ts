import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";
class ProfileUserController {
  async handle(req: Request, res: Response) {
    const service = new ProfileUserService();
    const { user_id } = req;
    try {
      const result = await service.execute(user_id);
      return res.json(result);
    } catch (error) {
      return res.json({ error: error.message });
    }
  }
}

export { ProfileUserController };
