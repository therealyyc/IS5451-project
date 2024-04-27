import React from 'react';
import styled from 'styled-components';
import Chart from "react-apexcharts";
import { ToolFilled, SyncOutlined } from '@ant-design/icons';
import { message } from 'antd';
import _ from 'lodash'

import { Plant, PlantAction, PlantType } from '../../types/plant';
import { getTagByStatus } from './plant-monitor';
import { Tooltip } from 'antd';
import FlowerPlaceholderPng from '../../assets/images/flower1.jpeg';
import plantBPng from '../../assets/images/plantB.webp';
import plantCPng from '../../assets/images/plantC.jpeg'
import { takeActionOnPlant } from '../../apis/plant';

interface CircularProgressProps {
  value: number[],
  label: string,
  color: string,
  activePlant: Plant | null,
}

const CircularProgress = ({ value, label, color, activePlant }: CircularProgressProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const options = {
    // series: ,
  chart: {
    type: "radialBar" as any,
  },
  grid: {
    padding: {
      top: -10,
      right: -20,
      bottom: -20,
      left: -40
    },
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  colors: [color, 'pink'],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%',
      },
      dataLabels: {
        total: {
          show: true,
          label: label,
          formatter: function (w: any) {
            return ''
          }
        },
        show: true,
        style: {
          fontSize: '8'
        },
        name: {
          show: true,
          fontSize: '12px',
        },
        value: {
          show: true,
          fontSize: '12px',
        },
      }
    },
  },
  labels: ['Current', 'Standard'],
  
}

const triggerAction = async (label: string) => {
  if(!activePlant) return
  const type = _.lowerCase(label)

  await takeActionOnPlant(activePlant.plantId, type as PlantAction)

  // messageApi.open({
  //   type: 'success',
  //   content: 'Trigger action successfully',
  // });
  message.success('Trigger action successfully') 
}

  return (
    <>
    {contextHolder}
    <ProgessChartWrapper className='chart-component-wrapper'>
       <Chart
          options={options}
          series={[...value]}
          type="radialBar"
          height="120"
        />
        <Tooltip title="Take Care">
          <div className='fix-icon-wrapper'>
            <ToolFilled onClick={() => triggerAction(label)} style={{fontSize: 18, color: '#ff0000b7'}}/>
          </div>
        </Tooltip>
    </ProgessChartWrapper>
    </>
  );
};

interface PlantStatus {
  activePlant: Plant | null,
  pieChartData: PieData[],
  imageData: any,
  onRefreshCurrentPlantStatus: () => void,
}

export interface PieData {
  type: PlantType,
  standardData: number,
  currentData: number,
}

function PlantStatus({ activePlant, pieChartData, imageData, onRefreshCurrentPlantStatus }: PlantStatus) {

  const colorSet = ['#3498db', '#f1c40f', '#2ecc71']

  const getImageUrl = (id: number | undefined) => {
    if(id === 1){
      return FlowerPlaceholderPng
    }

    if(id === 2){
      return plantCPng
    }

    if(id === 3){
      return plantBPng
    }
  }

  return (
    <Container>
      <PlantInfo>
        <div className='plant-name'>{activePlant?.plantName}</div>
        <div><Tooltip title="Refresh Data"><SyncOutlined className='refresh-icon' spin onClick={onRefreshCurrentPlantStatus}/></Tooltip>
        {getTagByStatus(activePlant?.plantStatus)}</div>
      </PlantInfo>
      <StyledImage src={imageData}></StyledImage>
      <CircularProgressSection className='circular-progress-section'>
        {
          pieChartData.map(data => <CircularProgress key={data.type} activePlant={activePlant} value={[data.currentData, data.standardData]} label={`${_.capitalize(data.type)}`} color={colorSet[0]}/>)
        }
        
        {/* <CircularProgress value={[70, 75]} label="Humidity" color={colorSet[1]}/>
        <CircularProgress value={[60, 65]} label="Light" color={colorSet[2]}/> */}
      </CircularProgressSection>
    </Container>
  );
}

export default PlantStatus;

// Styled container components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ImageSection = styled.div`
  height: calc(100% - 300px);
  background-image: url(${FlowerPlaceholderPng}); // Replace with your image path
  background-size: cover;
  background-position: center;
`;

const StyledImage = styled.img`
  height: calc(100% - 300px);
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const PlantInfo = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: space-between;
  margin-bottom: 10px;

  .refresh-icon {
    margin-right: 20px;
  }

  .plant-name {
    font-size: 16px;
    font-weight: 500;
  }
`

const CircularProgressSection = styled.div`
  display: flex;
  align-items: center;
  height: 300px;
  flex-wrap: wrap;

  .chart-component-wrapper {
    flex: 0 0 50%;
    width: 50%;
    height: 50%;
  }
`;



const CircularProgressWrapper = styled.div`
  
`

const ProgessChartWrapper = styled.div`
  height: 100%;
  position: relative;

  .fix-icon-wrapper {
    position: absolute;
    cursor: pointer;
    right: 0;
    top: 10px;
  }
`

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
`




