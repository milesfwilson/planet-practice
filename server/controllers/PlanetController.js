import express from "express";
import { moonService } from "../services/MoonService";
import { planetService } from "../services/PlanetService";
import { speciesService } from "../services/SpeciesService";
import BaseController from "../utils/BaseController";


export class PlanetController extends BaseController {
  constructor() {
    super("api/planets");
    this.router
      .get("", this.getAll)
      .get("/:planetId/moons", this.getMoonByPlanetId)
      .get("/:planetId/species", this.getSpeciesByPlanetId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getSpeciesByPlanetId(req, res, next) {
    try {
      res.send(await speciesService.getSpeciesByPlanetId(req.params.planetId))
    } catch (error) {
      next(error)
    }
  }
  async getMoonByPlanetId(req, res, next) {
    try {
      res.send(await moonService.getMoonByPlanetId(req.params.planetId))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await planetService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      res.send(await planetService.find())
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await planetService.create(req.body))
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await planetService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
}
