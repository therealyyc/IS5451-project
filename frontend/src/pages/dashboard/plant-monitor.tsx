import { useMemo } from 'react'
import styled from 'styled-components';
import { Tag, Button, Row, Col, Select } from 'antd';
import { ExclamationCircleOutlined, CheckCircleOutlined, SyncOutlined } from '@ant-design/icons';
import * as _ from 'lodash'
import Chart from "react-apexcharts";

import FlowerPlaceholderPng from '../../assets/images/flower1.jpeg';
import plantBPng from '../../assets/images/plantB.webp';
import plantCPng from '../../assets/images/plantC.jpeg'
import { Plant, PlantStatus } from '../../types/plant';

const NormalTag = () => (
  <Tag icon={<CheckCircleOutlined />} color="#87d068">
    NORMAL
  </Tag>
);

// Dangerous Tag Component
const DangerousTag = () => (
  <Tag icon={<ExclamationCircleOutlined />} color="#f50">
    DANGEROUS
  </Tag>
);

// Maintain Tag Component
const MaintainTag = () => (
  <Tag icon={<SyncOutlined spin />} color="#2db7f5">
    MAINTAIN
  </Tag>
);

const tagComponents = [<NormalTag/>, <DangerousTag/>, <MaintainTag/>];

export const getTagByStatus = (status: PlantStatus | undefined) => {
  if(status === PlantStatus.DANGEROUS){
    return <DangerousTag/>
  }

  if(status === PlantStatus.MAINTAIN){
    return <MaintainTag/>
  }

  if(status === PlantStatus.NORMAL){
    return <NormalTag/>
  }

  return <NormalTag/>
};

interface MonitorItemProps {
  plant: Plant,
  onSelectPlant: ( plant: Plant) => void,
}


function MonitorItem ({ plant, onSelectPlant }: MonitorItemProps) {

  return(
    <MonitorItemWrapper>
      {
        plant.plantId % 3 === 1 && <ImageSection className='img-section-1'/>
      }
      {
        plant.plantId % 3 === 0 && <ImageSection2 className='img-section-1'/>
      }
      {
        plant.plantId % 3 === 2 && <ImageSection3 className='img-section-1'/>
      }
      <PlantInfo>
        <span className='plant-name'>{plant.plantName}</span>
        {
          getTagByStatus(plant.plantStatus)
        }
      </PlantInfo>
      <Button type="primary" className='manage-btn' onClick={() => onSelectPlant(plant)}>Manage</Button>
    </MonitorItemWrapper>
  )
}

interface PlantMonitorPros {
  plants: Plant[],
  onSelectPlant: ( plant: Plant) => void,
}

const LineChart = () => {
  const options = {
    chart: {
      height: '100%',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight' as any
    },
    title: {
      text: 'Trends',
      align: 'left' as any
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  }

  const mock_data = [
    {
      name: "A",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
    {
      name: "B",
      data: [20, 31, 15, 31, 69, 22, 39, 61, 28]
    }
]

  return (<LineChartWrapper>
    <Chart options={options} series={mock_data} type="line" height={'100%'} />
  </LineChartWrapper>)
}


function PlantMonitor({plants, onSelectPlant}: PlantMonitorPros) {

  const typeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'humid', label: 'Humid' },
    { value: 'temperature', label: 'Temperature' },
  ]

  return (
    <Container>
      <LineChartSection>
        <div className='type-selector'>
          <Select  className='trend-type-selector' value={typeOptions[0]} options={typeOptions}></Select>
        </div>
        <LineChart/>
      </LineChartSection>
      <div className='card-wrapper'>
        <Row gutter={[24, 0]}>
        {
          plants.map(plantData => <Col span={7}><MonitorItem key={plantData.plantId} plant={plantData} onSelectPlant={onSelectPlant}/></Col>)
        }
        </Row>
      </div>
    </Container>
  );
}

export default PlantMonitor;

const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; */

  height: 100%;
  padding: 0 10px;

  .card-wrapper {
    height: 50%;
    padding-top: 10px;
  }
`;

const MonitorItemWrapper = styled.div`
  // flex: 0 0 25%; /* grow, shrink, basis */
  // margin-right: 12px; /* Adjust margins as needed */
  margin-bottom: 12px;
  /* box-sizing: border-box; */
  /* Additional styling */
  background-color: #f4f4f4;
  padding: 16px;
  text-align: center;
  /* border: 1px solid #ccc; */
  display: flex;
  flex-direction: column;
  border-radius: 8px; /* Rounded corners for the card-like effect */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02); /* Slightly enlarges the item on hover */
    box-shadow: 0 8px 16px rgba(0,0,0,0.2); /* Intensifies the shadow below the item */
  }

  .ant-btn.manage-btn {
    margin-top: 12px;
  }
`

const ImageSection = styled.div`
  height: 180px;
  background-image: url(${FlowerPlaceholderPng}); // Replace with your image path
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
`;

const ImageSection2 = styled.div`
  height: 180px;
  background-image: url(${plantBPng}); // Replace with your image path
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
`;

const ImageSection3 = styled.div`
  height: 180px;
  background-image: url(${plantCPng}); // Replace with your image path
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
`;
const PlantInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: none !important;

  .plant-name {
    font-size: 14px;
    font-weight: 500;
    color: #9d9d9d;
  }

  .ant-tag {
    margin-right: 0;
  }
`

const LineChartSection = styled.div`
  height: 50%;

  position: relative;

  .type-selector {
    position: absolute;
    z-index: 99999;
    left: 60px;
    top: -5px;
    .trend-type-selector {
      width: 120px;
    }
  }
`;

const LineChartWrapper = styled.div`
  height: 100%;
`
