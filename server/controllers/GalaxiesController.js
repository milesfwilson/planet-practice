import express from "express";
import { galaxiesService } from "../services/GalaxiesService";
import { starService } from "../services/StarService";
import BaseController from "../utils/BaseController";


export class GalaxiesController extends BaseController {
  constructor() {
    super("api/galaxies");
    this.router
      .get("", this.getAll)
      .get("/:galaxyId/stars", this.getStarsByGalaxyId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)

  }
  async getStarsByGalaxyId(req, res, next) {
    try {
      res.send(await starService.getStarsByGalaxyId(req.params.galaxyId))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await galaxiesService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      res.send(await galaxiesService.find())
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await galaxiesService.create(req.body))
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await galaxiesService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
}
