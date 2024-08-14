import { Request, Response } from "express";
import ShowDAO from "../daos/ShowDAO";
import { ShowModel, validateShowInputs } from "../domains/ShowModel";

export default class ShowController {
  private showDAO: ShowDAO;

  constructor() {
    this.showDAO = new ShowDAO();
  }

  async save(req: Request, res: Response) {
    const errorMessages = validateShowInputs(req.body);
    if (errorMessages) {
      return res.status(400).json({ error: errorMessages });
    }
    try {
      const { title, premiere, isRunning, language, mainGenre, posterUrl } =
        req.body;
      const newShow = new ShowModel({
        title,
        premiere: new Date(premiere),
        isRunning,
        language,
        mainGenre,
        posterUrl,
      });
      const savedShow = await this.showDAO.save(newShow);
      return res.status(201).json({ id: savedShow._id });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
