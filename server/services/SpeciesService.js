import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"

class SpeciesService {
  async getSpeciesByPlanetId(planetId) {
    return await dbContext.Species.find({ planet: planetId }).populate("planet")
  }

  async edit(id, body) {
    let exists = await this.findById(id)
    if (!exists) {
      throw new BadRequest("This id doesn't exist")
    }
    return await dbContext.Species.findByIdAndUpdate(id, body, { new: true })
  }
  async create(body) {
    return await dbContext.Species.create(body)
  }
  async find(query = {}) {
    return await dbContext.Species.find(query)

  }
  async delete(id) {
    let exists = await this.findById(id)
    if (!exists) {
      throw new BadRequest("This id doesn't exist")
    }
    return await dbContext.Species.findByIdAndDelete(id)
  }

  async findById(id) {
    return await dbContext.Species.findById(id)
  }

}

export const speciesService = new SpeciesService()