import { DataTypes, INTEGER, Model, STRING, TEXT } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

export const db = await connectToDB('postgresql:///ratings');

export class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    modelName: 'user',
    sequelize: db,
  },
);

export class Movie extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Movie.init(
  {
    movie_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    overview:{
      type: DataTypes.TEXT,
    },
    release_date:{
      type: DataTypes.DATE
    },
    poster_path:{
      type: DataTypes.STRING
    },
  },
  {
    modelName: 'movie',
    sequelize: db,
  },
)