import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"

class PlanetService {
  async getPlanetsByStarId(starId) {
    return await dbContext.Planets.find({ star: starId }).populate("star")
  }
  async edit(id, body) {
    let exists = await this.findById(id)
    if (!exists) {
      throw new BadRequest("This id doesn't exist")
    }
    return await dbContext.Planets.findByIdAndUpdate(id, body, { new: true })
  }
  async create(body) {
    return await dbContext.Planets.create(body)
  }
  async find(query = {}) {
    return await dbContext.Planets.find(query)

  }
  async delete(id) {
    let exists = await this.findById(id)
    if (!exists) {
      throw new BadRequest("This id doesn't exist")
    }
    return await dbContext.Planets.findByIdAndDelete(id)
  }

  async findById(id) {
    return await dbContext.Planets.findById(id)
  }

}

export const planetService = new PlanetService()