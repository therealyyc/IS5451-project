export enum PlantStatus {
  NORMAL = "NORMAL",
  DANGEROUS = "DANGEROUS",
  MAINTAIN = "MAINTAIN"
}

export enum PlantAction {
  WATER = "water",
  LIGHT = "light",
  HEAT = "heat"
}

export enum PlantType {
  HUMIDITY = 'humidity',
  TEMPERATURE = 'temperature',
  LIGHT = 'light'
}

export interface Plant {
  plantId: number;
  plantName: string;
  plantStatus: PlantStatus;
};

export interface PlantCondition {
  plantId: number,
  humidity: 50,
  temperature: 22,
  lightLevel: 300,
}

export interface PlantLineChart {
  value:
  {
    name: PlantType,
    data: number[]
  }[],
  categories: string[]
}