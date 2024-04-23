export enum PlantStatus {
  NORMAL = "NORMAL",
  DANGEROUS = "DANGEROUS",
  MAINTAIN = "MAINTAIN"
}

export interface Plant {
  plantId: number;
  plantName: string;
  plantStatus: PlantStatus;
};