import styled from "styled-components"
import { useState, useEffect } from 'react'
import PlantStatus, { PieData } from "./plant-status"
import PlantMonitor from "./plant-monitor"
import { getPLants, getPlantCondition, getLineChart, getPieChart, getImagePicture } from "../../apis/plant"
import { Plant, PlantLineChart, PlantType } from "../../types/plant"


const Dashboard = () => {
  const [plants, setPlants] = useState<Plant[]>([])
  const [activePlant, setActivePlant] = useState<Plant | null>(null)
  const [pieChartData, setPieChartData] = useState<PieData[]>([])
  const [lineChartData, setLineChartData] = useState<PlantLineChart | null>({ "value": [{ "name": PlantType.LIGHT, "data": [20, 31, 15, 31, 69, 22, 39, 61, 28] }],
    "categories": ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
 })
  const [selectedLineCategory, setSelectedLineCategory] = useState<PlantType>(PlantType.LIGHT)
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    (async() => {
      const plantsData = await getPLants()
      setPlants(plantsData)
      setActivePlant(plantsData[0])
    })()
  }, [])

  // useEffect(() => {
  //   (async() => {
  //     if(activePlant){
  //       const piedata = await getPieChart(activePlant.plantId)
  //       const activeImage = await getImagePicture()
  //       const base64Image = `data:image/jpeg;base64,${activeImage.image}`;
  //       setPieChartData(piedata)
  //       setImageData(base64Image)
  //     }
  //   })()
  // }, [activePlant])

  // useEffect(() => {
  //   (async() => {
  //     if(activePlant){
  //       const linedata = await getLineChart(activePlant.plantId, selectedLineCategory)
  //       setLineChartData(linedata)
  //     }
  //   })()
  // }, [activePlant, selectedLineCategory])

  useEffect(() => {
    if(activePlant){
      let intervalId: any;
      if(!activePlant.plantId) return
      const refreshCurrentPlantStatus = async () => {
        const piedata = await getPieChart(activePlant.plantId)
        const linedata = await getLineChart(activePlant.plantId, selectedLineCategory)
        const activeImage = await getImagePicture()
        const base64Image = `data:image/jpeg;base64,${activeImage.image}`;
        setPieChartData(piedata)
        setImageData(base64Image)
        setLineChartData(linedata)
      }
      if (activePlant.plantId) {
        refreshCurrentPlantStatus(); // Fetch immediately when the component mounts or plantId changes
        intervalId = setInterval(refreshCurrentPlantStatus, 5000); // Poll every 5000 milliseconds (5 seconds)
      }

      return () => {
        if (intervalId) {
          clearInterval(intervalId); // Clear interval on component unmount or plantId change
        }
      };
    }
  }, [activePlant, selectedLineCategory]); 
  

  const selectPlant = (plant: Plant) => {
    setActivePlant(plant)
  }

  const selectPlantTypeForLineChart = (plantType: PlantType) => {
    setSelectedLineCategory(plantType)
  }

  const refreshCurrentPlantStatus = async () => {
    if (!activePlant) return
    const piedata = await getPieChart(activePlant.plantId)
    const linedata = await getLineChart(activePlant.plantId, selectedLineCategory)
    const activeImage = await getImagePicture()
    const base64Image = `data:image/jpeg;base64,${activeImage.image}`;
    setPieChartData(piedata)
    setImageData(base64Image)
    setLineChartData(linedata)
  }

  
  
  return ( <Container>
    <LeftColumn>
      <PlantStatus imageData={imageData} activePlant={activePlant} pieChartData={pieChartData} onRefreshCurrentPlantStatus={refreshCurrentPlantStatus}/>
    </LeftColumn>
    <RightColumn>
      <PlantMonitor linedata={lineChartData} plants={plants} selectedPlantType={selectedLineCategory} onSelectPlant={selectPlant} onSelectLineChart={selectPlantTypeForLineChart}/>
    </RightColumn>
  </Container>)
}

export default Dashboard

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const LeftColumn = styled.div`
  width: 35%;
  background-color: #f8f8f8;
  padding: 20px;
`;

const RightColumn = styled.div`
  width: 65%;
  background-color: #ffffff; 
`;