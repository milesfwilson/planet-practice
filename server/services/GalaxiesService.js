import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"

class GalaxiesService {

  async edit(id, body) {
    let exists = await this.findById(id)
    if (!exists) {
      throw new BadRequest("This id doesn't exist")
    }
    return await dbContext.Galaxies.findByIdAndUpdate(id, body, { new: true })
  }
  async create(body) {
    return await dbContext.Galaxies.create(body)
  }
  async find(query = {}) {
    return await dbContext.Galaxies.find(query)

  }
  async delete(id) {
    let exists = await this.findById(id)
    if (!exists) {
      throw new BadRequest("This id doesn't exist")
    }
    return await dbContext.Galaxies.findByIdAndDelete(id)
  }

  async findById(id) {
    return await dbContext.Galaxies.findById(id)
  }

}

export const galaxiesService = new GalaxiesService()