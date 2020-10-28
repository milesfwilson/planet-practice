import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"

class MoonService {
  async getMoonByPlanetId(planetId) {
    return await dbContext.Moons.find({ planet: planetId }).populate("planet")
  }
  async edit(id, body) {
    let exists = await this.findById(id)
    if (!exists) {
      throw new BadRequest("This id doesn't exist")
    }
    return await dbContext.Moons.findByIdAndUpdate(id, body, { new: true })
  }
  async create(body) {
    return await dbContext.Moons.create(body)
  }
  async find(query = {}) {
    return await dbContext.Moons.find(query)

  }
  async delete(id) {
    let exists = await this.findById(id)
    if (!exists) {
      throw new BadRequest("This id doesn't exist")
    }
    return await dbContext.Moons.findByIdAndDelete(id)
  }

  async findById(id) {
    return await dbContext.Moons.findById(id)
  }

}

export const moonService = new MoonService()