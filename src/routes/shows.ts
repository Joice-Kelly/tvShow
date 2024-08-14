import { Router } from "express";
import ShowController from "../controllers/ShowController";

// Criação do roteador
export const showsRouter = Router();

// Instancia o controlador
const showCtrl = new ShowController();

// Rota para criar um novo show
showsRouter.post("/", async (req, res) => {
  try {
    await showCtrl.save(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
