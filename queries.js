import { db, User, Movie, Rating } from './src/model.js'

console.log(await Movie.findOne())