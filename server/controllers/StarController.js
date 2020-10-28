import express from "express";
import { planetService } from "../services/PlanetService";
import { starService } from "../services/StarService";
import BaseController from "../utils/BaseController";


export class StarController extends BaseController {
  constructor() {
    super("api/stars");
    this.router
      .get("", this.getAll)
      .get("/:starId/planets", this.getPlanetsByStarId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getPlanetsByStarId(req, res, next) {
    try {
      res.send(await planetService.getPlanetsByStarId(req.params.starId))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await starService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      res.send(await starService.find())
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await starService.create(req.body))
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await starService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
}
