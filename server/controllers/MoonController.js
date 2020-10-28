import express from "express";
import { moonService } from "../services/MoonService";
import BaseController from "../utils/BaseController";


export class MoonController extends BaseController {
  constructor() {
    super("api/moons");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async delete(req, res, next) {
    try {
      res.send(await moonService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      res.send(await moonService.find())
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await moonService.create(req.body))
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await moonService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
}
