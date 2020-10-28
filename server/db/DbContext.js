import ValueSchema from "../models/Value";
import GalaxySchema from '../models/Galaxy.js'
import MoonSchema from '../models/Moon.js'
import PlanetSchema from '../models/Planet.js'
import SpeciesSchema from '../models/Species.js'
import StarSchema from '../models/Star.js'


import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Galaxies = mongoose.model("Galaxy", GalaxySchema)
  Moons = mongoose.model("Moon", MoonSchema)
  Planets = mongoose.model("Planet", PlanetSchema)
  Stars = mongoose.model("Star", StarSchema)
  Species = mongoose.model("Species", SpeciesSchema)



}

export const dbContext = new DbContext();
