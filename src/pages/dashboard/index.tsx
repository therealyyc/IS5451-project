import styled from "styled-components"
import { useState, useEffect } from 'react'
import PlantStatus from "./plant-status"
import PlantMonitor from "./plant-monitor"
import { getPLants } from "../../apis/plant"
import { Plant } from "../../types/plant"


const Dashboard = () => {
  const [first, setfirst] = useState([])
  const [plants, setPlants] = useState<Plant[]>([])
  const [activePlant, setActivePlant] = useState<Plant | null>(null)

  useEffect(() => {
    (async() => {
      const plantsData = await getPLants()
      setPlants(plantsData)
      setActivePlant(plantsData[0])
    })()
  }, [])

  const selectPlant = (plant: Plant) => {
    setActivePlant(plant)
  }
  
  return ( <Container>
    <LeftColumn>
      <PlantStatus activePlant={activePlant}/>
    </LeftColumn>
    <RightColumn>
      <PlantMonitor plants={plants} onSelectPlant={selectPlant}/>
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