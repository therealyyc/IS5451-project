import { Plant, PlantStatus } from "../types/plant"

const plant_mock_data = [
  { plantId: 1, plantName: "Fern", plantStatus: PlantStatus.NORMAL },
  { plantId: 2, plantName: "Bamboo", plantStatus: PlantStatus.MAINTAIN },
  { plantId: 3, plantName: "Cactus", plantStatus: PlantStatus.DANGEROUS },
]

export const getPLants = async (): Promise<Plant[]> => {
  return new Promise((resolve, reject) => {
    resolve(plant_mock_data)
  })
}