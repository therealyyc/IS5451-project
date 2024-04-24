import { PieData } from "../pages/dashboard/plant-status"
import { Plant, PlantAction, PlantLineChart, PlantStatus, PlantType } from "../types/plant"
import fetch from '../utils/api'

const plant_mock_data = [
  { plantId: 1, plantName: "Fern", plantStatus: PlantStatus.NORMAL },
  { plantId: 2, plantName: "Bamboo", plantStatus: PlantStatus.MAINTAIN },
  { plantId: 3, plantName: "Cactus", plantStatus: PlantStatus.DANGEROUS },
]

export const getPLants = async (): Promise<Plant[]> => {
  return fetch({
    url: `/api/plants`,
    method: 'GET'
  })
}

export const getPlantCondition = async (plantId: number): Promise<PlantStatus> => {
  return fetch({
    url: `/api/plants/${plantId}/conditions`,
    method: 'GET'
  })
}

export const takeActionOnPlant = async (plantId: number, action: PlantAction) => {
  return fetch({
    url: `/api/plants/${plantId}/action/${action}`,
    method: 'GET'
  })
}

export const getLineChart = async (plantId: number, type: PlantType): Promise<PlantLineChart> => {
  return fetch({
    url: `/api/plants/${plantId}/environmental-data/line-chart/${type}`,
    method: 'GET'
  })
}

export const getPieChart = async (plantId: number): Promise<PieData[]> => {
  return fetch({
    url: `/api/plants/${plantId}/environmental-data/pie-chart`,
    method: 'GET'
  })
}