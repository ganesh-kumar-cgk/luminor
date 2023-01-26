import React,{useState,useEffect} from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import Tree from 'react-d3-tree'
import { useCenteredTree } from "./helpers/Helpers"
import './style.css';
import {fitWrappedText} from 'canvas-text-wrapper';
import { Tooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";
//import treedata from './tree.json';
import CardSO from './CardSO'
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
import axios from 'axios'
import treedata from './tree.json'


const CLIENT_ID = '725433826181-bu47ql2jf48j5lhvvi8fco09fjtvn8lq.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDiKJWZQhAUgxehXw-7WahdjAyDlDq9Tgo';
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly';

const Dashboard = () => {
  let [pieData, setPieData] = useState([]);  
  let [lineData, setLineData] = useState([]);  
  let [horizontalBarData, setHorizontalBarData] = useState([]);  
  let [whatsToday, setWhatsToday] = useState([]);  
  let [radarData, setRadarData] = useState([]);  
  const [tooltipVisible, setTooltipVisible] = useState(false);  
  const [tokenClient, setTokenClient] = useState(null);
  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);
  const [authorizeButtonVisible, setAuthorizeButtonVisible] = useState(false);
  const [signoutButtonVisible, setSignoutButtonVisible] = useState(false);  
  let id = 0;
  const [dimensions, translate, containerRef] = useCenteredTree();    
  let datas = [
    {
      id : "1",
      title : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      "ome" : "processed",
      "status" : "processed",
      "status_code" : "bg-success"
    },
    {
      id : "2",
      title : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      "ome" : "Progress",
      "status" : "Progress",
      "status_code" : "bg-success"
    },
    {
      id : "2",
      title : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      "ome" : "Rejected",
      "status" : "Rejected",
      "status_code" : "bg-danger"
    }        
  ]
  const [filteredData, setFilteredData] = useState(datas);  

  const handleSearch = (e) => {
    setFilteredData(datas.filter(item => item.ome.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  const data = treedata;

    const svgSquare = {
      shape: 'rect',
      shapeProps: {
        width: 0,
        height: 0,
      }
    }
  const orgChart = data;
  const containerStyles = {
    width: "100vw",
    height: "100vh"
  };
  const styles = {
    nodes: {
      node: {
        shape: 'rect',
        shapeProps: {
          width: 200,
          height: 50,
          x: -100,
          y: -25
        },
        textBlock: {
          dy: -20
        }
      }
    }
  }  
  const handleMouseOver = (input,id) => {
    console.log(input);
    console.log(id);
    var myicon = document.getElementById(id);
    var mypopup = document.getElementById("mypopup");    
    var iconPos = myicon.getBoundingClientRect();
    mypopup.style.left = (iconPos.right + 20) + "px";
    mypopup.style.top = (window.scrollY + iconPos.top - 60) + "px";
    mypopup.style.display = "block";    
    document.getElementById("svg_content").innerText = input;
    setTooltipVisible(true);
  };

  const handleMouseOut = (id) => {
    setTooltipVisible(false);
    var myicon = document.getElementById(id);
    var mypopup = document.getElementById("mypopup");    
    mypopup.style.display = "none";    
  };

  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => {
    let shortText = nodeDatum['name'].substring(0, 30);
    shortText = shortText + '...'
    let type = nodeDatum.type;
    let svg_id = "svg_id"+id;
    return (
        type === "step1" ? (
          <>
          <g id={svg_id} transform="translate(-536 -571)" >
           <g id="Group_5599" data-name="Group 5599" transform="translate(-5 7)">
             <g width="230" id="Rectangle_3512" data-name="Rectangle 3512" transform="translate(541 520)" fill="#141517" stroke="#1993e6" stroke-width="2" onClick={toggleNode}>
               <rect width="200" height="94" rx="13" stroke="none"/>
               <rect x="1" y="1" width="200" height="92" rx="12" fill="none"/>
             </g>
             <line id="Line_329" data-name="Line 329" x2="200" transform="translate(542.5 554.5)" fill="none" stroke="#1993e6" stroke-width="2"/>
           </g>
           <text id="Dasboard" strokeWidth="0" transform="translate(704 608)" fill="#1993e6" font-size="15" font-family="'Rubik', sans-serif"><tspan x="-50" y="0" stroke='white' onMouseOver={() => handleMouseOver(nodeDatum.name,svg_id)} onMouseOut={() => handleMouseOut(svg_id)} >Read more</tspan></text>
           <text id="Dasboard-2" strokeWidth="0" data-name="Dasboard" transform="translate(622 553)" fill="#fff" font-size="21" font-family="'Rubik', sans-serif"><tspan x="-30" y="0" stroke='white'>ID : R001</tspan></text>
           <text id="" strokeWidth="0" transform="translate(546 571)" fill="#fff" font-size="15" font-family="'Rubik', sans-serif"><tspan x="0" y="14" stroke='white'>{shortText}</tspan></text>
          </g>          
          {id++}
         </>       
        ) : (
          type === "step2" ? (
            <>
            <g id={svg_id} transform="translate(-536 -571)" >
            <g id="Group_5599" data-name="Group 5599" transform="translate(-5 7)">
              <g width="230" id="Rectangle_3512" data-name="Rectangle 3512" transform="translate(541 520)" fill="#141517" stroke="#1993e6" stroke-width="2" onClick={toggleNode}>
                <rect width="230" height="94" rx="13" stroke="none"/>
                <rect x="1" y="1" width="230" height="92" rx="12" fill="none"/>
              </g>
              <line id="Line_329" data-name="Line 329" x2="230" transform="translate(542.5 554.5)" fill="none" stroke="#1993e6" stroke-width="2"/>
            </g>
            <text id="Dasboard" strokeWidth="0" transform="translate(704 608)" fill="#1993e6" font-size="15" font-family="'Rubik', sans-serif"><tspan x="-20" y="0" stroke='white' onMouseOver={() => handleMouseOver(nodeDatum.name,svg_id)} onMouseOut={() => handleMouseOut(svg_id)} >Read more</tspan></text>
            <text id="Dasboard-2" strokeWidth="0" data-name="Dasboard" transform="translate(622 553)" fill="#fff" font-size="21" font-family="'Rubik', sans-serif"><tspan x="-10" y="0" stroke='white'>ID : R001</tspan></text>
            <text id="" strokeWidth="0" transform="translate(546 571)" fill="#fff" font-size="15" font-family="'Rubik', sans-serif"><tspan x="0" y="14" stroke='white'>{shortText}</tspan></text>
            </g>          
            {id++}              
            </>
          ) : (
          type === "step3" ? (
            <>
              <g id={svg_id} transform="translate(-1266.028 -450.689)" onClick={toggleNode}>
                <g id="Rectangle_3715" data-name="Rectangle 3715" transform="translate(1266.028 420.689)" fill="#141517" stroke="#1993e6" stroke-width="2">
                  <rect width="210" height="73" rx="16" stroke="none"/>
                  <rect x="1" y="1" width="210" height="71" rx="15" fill="none"/>
                </g>
                <text id="" strokeWidth="0" transform="translate(1279.461 442.189)" fill="#fff" font-size="15" font-family="'Rubik', sans-serif"><tspan x="0" y="14" stroke='white'>{shortText}</tspan></text>
                <text id="Dasboard" strokeWidth="0" transform="translate(1435.714 478.811)" fill="#1993e6" font-size="15" font-family="'Rubik', sans-serif"><tspan x="-50" y="0" stroke='white' onMouseOver={() => handleMouseOver(nodeDatum.name,svg_id)} onMouseOut={() => handleMouseOut(svg_id)}>Read more</tspan></text>
              </g>              
              {id++}
            </>
            ) : (
              type === "step4" ? (
                <>
                  <g id="result" transform="translate(-1644 -445)">
                    <g id="Rectangle_3716" data-name="Rectangle 3716" transform="translate(1644 420)" fill="#141517" stroke="#e50019" stroke-width="2" onClick={toggleNode}>
                      <rect width="136" height="56" rx="9" stroke="none"/>
                      <rect x="1" y="1" width="134" height="54" rx="8" fill="none"/>
                    </g>
                    <text id="Dasboard" strokeWidth="0" transform="translate(1683 461)" fill="red" font-size="21" font-family="'Rubik', sans-serif"><tspan x="0" y="-8">{shortText}</tspan></text>
                  </g>                  
                </>
              ) : (
                <></>
              )
            )
            )    
        )
    );
  }

  const fetchData = () => {
    axios.get('https://us-central1-robotalks-1fdc8.cloudfunctions.net/addEstimates', {
      auth: {
        username: 'your-username',
        password: 'your-password'
      }
    })
    .then(response => {
      let data = response.data;
      if(data.find(chart => chart.type === 'pie')){
        setPieData(data.find(chart => chart.type === 'pie'));
      }    
      if(data.find(chart => chart.type === 'line')){
        setLineData(data.find(chart => chart.type === 'line'));
      }      
      if(data.find(chart => chart.type === 'HorizontalBar')){
        setHorizontalBarData(data.find(chart => chart.type === 'HorizontalBar'));
      }      
      if(data.find(chart => chart.type === 'whatstoday')){
        setWhatsToday(data.find(chart => chart.type === 'whatstoday'));
      }      
      if(data.find(chart => chart.type === 'radar')){
        setRadarData(data.find(chart => chart.type === 'radar'));
      }      
    })
    .catch(error => {
    });    
  }
  const gapiLoaded = () => {
    gapi.load('client', initializeGapiClient);
  };

  const initializeGapiClient = async () => {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    setGapiInited(true);
    maybeEnableButtons();
  };

  const gisLoaded = () => {
    const newTokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    });
    console.log(newTokenClient);
    setTokenClient(newTokenClient);
    setGisInited(true);
    maybeEnableButtons();
  };

  const maybeEnableButtons = () => {
    if (gapiInited && gisInited) {
      setAuthorizeButtonVisible(true);
    }
  };

  const handleAuthClick = async () => {
    console.log(tokenClient);
    tokenClient.callback = (resp) => {
      if (resp.error !== undefined) {
        throw (resp);
      }
      setSignoutButtonVisible(true);
      document.getElementById('authorize_button').innerText = 'Refresh';
      listFiles();
    };
    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({prompt: 'consent'});
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({prompt: ''});
    }
  };  
  function listFiles() {
    let response;
    try {
gapi.client.drive.files.list({
q: "mimeType='application/vnd.google-apps.folder' and name='luminor'"
}).then(function(response) {
var folders = response.result.files;
if (folders && folders.length > 0) {
    var folder = folders[0];
    var folderId = folder.id;
    gapi.client.drive.files.list({
        q: "mimeType != 'application/vnd.google-apps.folder' and trashed = false and name='line.json' and parents in '" + folderId + "'"
    }).then(function(response) {
        console.log(response);
        var files = response.result.files;
        if (files && files.length > 0) {
            console.log(files[0]['id']);
            gapi.client.drive.files.get({
                fileId: files[0]['id'],
                alt: 'media'
            }).then(function(response) {
                console.log(response);
                var jsonString = response.body;
                console.log(jsonString)
                var jsonData = JSON.parse(jsonString);
                setLineData(jsonData);
                console.log(jsonData);
                console.log(lineData);
              }, function(error) {
                console.log(error);
              });                

        } else {
            console.log(`No files found`);
        }
    }, function(error) {
        console.log(error);
    });
} else {
    console.log(`No folders found`);
}
}, function(error) {
console.log(error);
});
gapi.client.drive.files.list({
  q: "mimeType='application/vnd.google-apps.folder' and name='luminor'"
  }).then(function(response) {
  var folders = response.result.files;
  if (folders && folders.length > 0) {
      var folder = folders[0];
      var folderId = folder.id;
      gapi.client.drive.files.list({
          q: "mimeType != 'application/vnd.google-apps.folder' and trashed = false and name='bar.json' and parents in '" + folderId + "'"
      }).then(function(response) {
          console.log(response);
          var files = response.result.files;
          if (files && files.length > 0) {
              console.log(files[0]['id']);
              gapi.client.drive.files.get({
                  fileId: files[0]['id'],
                  alt: 'media'
              }).then(function(response) {
                  console.log(response);
                  var jsonString = response.body;
                  console.log(jsonString)
                  var jsonData = JSON.parse(jsonString);
                  setHorizontalBarData(jsonData);
                  console.log(jsonData);
                  console.log(lineData);
                }, function(error) {
                  console.log(error);
                });                
  
          } else {
              console.log(`No files found`);
          }
      }, function(error) {
          console.log(error);
      });
  } else {
      console.log(`No folders found`);
  }
  }, function(error) {
  console.log(error);
  });
  gapi.client.drive.files.list({
    q: "mimeType='application/vnd.google-apps.folder' and name='luminor'"
    }).then(function(response) {
    var folders = response.result.files;
    if (folders && folders.length > 0) {
        var folder = folders[0];
        var folderId = folder.id;
        gapi.client.drive.files.list({
            q: "mimeType != 'application/vnd.google-apps.folder' and trashed = false and name='whatstoday.json' and parents in '" + folderId + "'"
        }).then(function(response) {
            console.log(response);
            var files = response.result.files;
            if (files && files.length > 0) {
                console.log(files[0]['id']);
                gapi.client.drive.files.get({
                    fileId: files[0]['id'],
                    alt: 'media'
                }).then(function(response) {
                    console.log(response);
                    var jsonString = response.body;
                    console.log(jsonString)
                    var jsonData = JSON.parse(jsonString);
                    setWhatsToday(jsonData);
                    console.log(jsonData);
                    console.log(lineData);
                  }, function(error) {
                    console.log(error);
                  });                
    
            } else {
                console.log(`No files found`);
            }
        }, function(error) {
            console.log(error);
        });
    } else {
        console.log(`No folders found`);
    }
    }, function(error) {
    console.log(error);
    });  
    } catch (err) {
        console.log(err);
      document.getElementById('content').innerText = err.message;
      return;
    }
    const files = response.result.files;
    if (!files || files.length == 0) {
      document.getElementById('content').innerText = 'No files found.';
      return;
    }
    // Flatten to string to display
    const output = files.reduce(
        (str, file) => `${str}${file.name} (${file.id}\n`,
        'Files:\n');
    document.getElementById('content').innerText = output;
  }  
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  useEffect(() => {
//    fetchData();
    const script1 = document.createElement("script");
    script1.src = "https://apis.google.com/js/api.js";
    script1.async = true;
    script1.defer = true;
    script1.onload = gapiLoaded;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://accounts.google.com/gsi/client";
    script2.async = true;
    script2.defer = true;
    script2.onload = gisLoaded;
    document.body.appendChild(script2);    
   }, []);    
  return (
    <>
      <WidgetsDropdown data={whatsToday} />
      <CRow>
        <CCol xs={12} lg={4} className="">
          <CCard className="mb-4 bg-body">
            <CCardHeader>Requirements Stumpline Status
            <div>
      <button id="authorize_button" onClick={handleAuthClick}>Authorize</button>
      {signoutButtonVisible && <button id="signout_button">Sign Out</button>}
    </div>            
            </CCardHeader>
            <CCardBody>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} lg={4} className="">
          <CCard className="mb-4 bg-body">
            <CCardHeader>Requirements Complaints Trend</CCardHeader>
            <CCardBody>
              <CChartLine 
                height={100}
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
            <CCardHeader>Requirements Traceability Trend</CCardHeader>
            <CCardBody>
              <CChartBar
                height={100}
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
          <CCardHeader>Requirements Stumpline Status</CCardHeader>
          <CCardBody>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} lg={4} className="">
        <CCard className="mb-4 bg-body">
          <CCardHeader>Requirements Stumpline Status</CCardHeader>
          <CCardBody>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} lg={4} className="">
        <CCard className="mb-4 bg-body">
          <CCardHeader>Requirements Stumpline Status</CCardHeader>
          <CCardBody>
            <CChartRadar height="60px" width="100px"
              data={{
                labels:radarData['labels'],
                datasets: radarData['datasets'],
              }}
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
              <div className="float-end">
                <input type="text" onChange={handleSearch} className="form-control"></input>
              </div>
            </CCardHeader>
            <CCardBody>
              <CTable caption="top">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Id</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Requirements Description</CTableHeaderCell>
                    <CTableHeaderCell scope="col">OEM Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                {filteredData.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{item.id}</CTableHeaderCell>
                    <CTableDataCell>{item.title}</CTableDataCell>
                    <CTableDataCell>{item.ome}</CTableDataCell>
                    <CTableDataCell><span className={item.status_code}>{item.status}</span></CTableDataCell>
                  </CTableRow>
                ))}                
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} style={{"height":"500px"}}>
          <Tree 
          data={orgChart} 
          dimensions={dimensions}
          renderCustomNodeElement={renderRectSvgNode}
          orientation="horizontal"        
          styles={styles}         
          nodeSvgShape={svgSquare}
          pathFunc="step"
          translate={translate}
          initialDepth={1}
          
          nodeSize={{
            x: 240,
            y: 200
          }}
          separation={{
            siblings: 1,
            nonSiblings: 1
          }}                          
        />        
          <div id="mypopup">
            <p id="svg_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>        
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
