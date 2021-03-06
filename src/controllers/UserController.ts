import { Request, Response } from "express";
import User from "../models/User";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
}

export default new UserController();
