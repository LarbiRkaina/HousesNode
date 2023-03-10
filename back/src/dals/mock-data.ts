import { House } from "./house";
import { ObjectId } from "mongodb";

export interface DB {
  houses: House[];
}

export const db: DB = {
  houses: [
    {
      _id: "1",
      name: "Casa malagueta",
      description: "Buena y soleada",
      reviews: [
        {comments: "Agradable",
        reviewer_name : "Larbi"}
      ]

    },
    {
      _id: "2",
      name: "Casa Eugenio Gross",
      description: "Grande y luminosa",
      reviews: [
        {reviewer_name :"Amira",
        comments: "Bonita"}
      ]
    },

  ],
};
