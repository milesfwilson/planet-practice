import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"

class StarService {
  async getStarsByGalaxyId(galaxyId) {
    return await dbContext.Stars.find({ galaxy: galaxyId }).populate("galaxy")
  }
  async edit(id, body) {
    let exists = await this.findById(id)
    if (!exists) {
      throw new BadRequest("This id doesn't exist")
    }
    return await dbContext.Stars.findByIdAndUpdate(id, body, { new: true })
  }
  async create(body) {
    return await dbContext.Stars.create(body)
  }
  async find(query = {}) {
    return await dbContext.Stars.find(query)

  }
  async delete(id) {
    let exists = await this.findById(id)
    if (!exists) {
      throw new BadRequest("This id doesn't exist")
    }
    return await dbContext.Stars.findByIdAndDelete(id)
  }

  async findById(id) {
    return await dbContext.Stars.findById(id)
  }

}

export const starService = new StarService()