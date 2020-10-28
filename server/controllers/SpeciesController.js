import express from "express";
import { speciesService } from "../services/SpeciesService";
import BaseController from "../utils/BaseController";


export class SpeciesController extends BaseController {
  constructor() {
    super("api/species");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async delete(req, res, next) {
    try {
      res.send(await speciesService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      res.send(await speciesService.find())
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await speciesService.create(req.body))
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await speciesService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
}
