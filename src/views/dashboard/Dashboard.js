import React,{useState,useEffect} from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import './style.css';
import {
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
} from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import whatsTodaySection from './json/whatstoday.json'
import lineChart from './json/LineChart.json'
import HorizonatlChart from './json/HorizontalBarChart.json'
import VerticalChart from './json/VerticalChart.json';
import DataTable from './DataTable';
import TableData from './json/TableData.json'

const Dashboard = () => {
  let [lineData, setLineData] = useState(lineChart);  
  let [horizontalBarData, setHorizontalBarData] = useState(HorizonatlChart);  
  let [whatsToday, setWhatsToday] = useState(whatsTodaySection);  
  let [verticalBarData, setVerticalBarData] = useState(VerticalChart);  

  useEffect(() => {
   }, []);    
  return (
    <>
      <WidgetsDropdown data={whatsToday} />
      <CRow>
        <CCol xs={12} lg={4} className="">
          <CCard className="mb-4 bg-body">
            <CCardHeader>Requirements Complaints Trend</CCardHeader>
            <CCardBody>
            <CChartBar
                height={60}
                width={100}              
                data={{
                  labels: horizontalBarData['labels'],
                  datasets: horizontalBarData['datasets'],
                }}
                labels="months"
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} lg={4} className="">
          <CCard className="mb-4 bg-body">
            <CCardHeader>Requirements Traceability Trend</CCardHeader>
            <CCardBody>
            <CChartLine 
                height={60}
                width={100}              
                data={{
                  labels: lineData['labels'],
                  datasets: lineData['datasets'],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} lg={4} className="">
          <CCard className="mb-4 bg-body">
            <CCardHeader>Requirements Stumpline Status</CCardHeader>
            <CCardBody>
            <CChartBar
                height={60}
                width={100}              
                data={{
                  labels: verticalBarData['labels'],
                  datasets: verticalBarData['datasets'],
                }}
                labels="months"
              />
            </CCardBody>
          </CCard>
        </CCol>              
      </CRow>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4 bg-body">
          <CCardHeader>
              <strong>Requirements Complaints Matrix</strong>
            </CCardHeader>
            <CCardBody>
              <DataTable></DataTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
