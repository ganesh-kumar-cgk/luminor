import React,{useState,useEffect,useRef} from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow,CSpinner,CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem } from '@coreui/react'
import Tree from 'react-d3-tree'
import { useCenteredTree } from "./helpers/Helpers"
import './style.css';
import treedata from './json/treearray.json'
import Pagination from "./Pagination/Pagination";

const DashboardTree = () => {
    const [data, setData] = useState({"name": treedata['name'],"gid": treedata['gid'],"type": treedata['itemtype'],"description":treedata['description'],"projectname":treedata['projectname'],"itemid":treedata['itemid'],"project": treedata['project'],"children": []});
    const [datas, setDatas] = useState(treedata);    
    const [start, setStart] = useState(0); 
    const [end, setEnd] = useState(40);
    const [tooltip, setTooltipVisible] = useState(false);
    const [dimensions, translate, containerRef] = useCenteredTree();    
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const [nodeColors, setNodeColors] = useState([{"value":1,"color":"#00973d"},{"value":2,"color":"#F56457"},{"value":3,"color":"#7E1470"},{"value":4,"color":"#3245BF"},{"value":5,"color":"#5D6E1E"},{"value":6,"color":"#BD3B1B"},{"value":7,"color":"#E83845"}])
    const [defaultColor, setDefaultColor] = useState('#012F63')
    let [ledger, setLedger] = useState([]);
    let [ledgerName, setLedgerName] = useState([]);
    const treeContainer = useRef(null);
    const ref = React.createRef();
    let uniqueNames = new Set();
    let uniqueType = new Set();    
    let id = 0;
    const onChangePage = (pageOfItems,startIndex,endIndex) => {
      setStart(endIndex);
      setEnd(startIndex + endIndex);
      setLoadingSpinner(true);    
      let orgChartString = JSON.stringify(pageOfItems);
      orgChartString = orgChartString.replace(/downstream/g, 'children');
      pageOfItems = JSON.parse(orgChartString);
      setData({"name": treedata['name'],"gid": treedata['gid'],"type": treedata['itemtype'],"description":treedata['description'],"projectname":treedata['projectname'],"itemid":treedata['itemid'],"project": treedata['project'],"children": pageOfItems})    
      getLeadgers(pageOfItems);
      setTimeout(() => {
        setLoadingSpinner(false);
      }, 500);                
    };    
    const renderRectSvgNode = ({ nodeDatum, toggleNode }) => {
      try{
        let desc = nodeDatum.name;
        desc = desc.replace(/&nbsp;/g, '');      
        let stripped = desc.replace(/(<([^>]+)>)/ig, " ");      
        let shortText = stripped.substring(0, 140);
        let firstLine = shortText.substring(0, 40);
        let secondLine = shortText.substring(40, 80);
        let thirdLine = shortText.substring(80, 120);        
        let fourthLine = shortText.substring(120, 140);        
        let secondData = '';
        let backgroundColor = '';
        if(fourthLine === ''){
          secondData = '';
        }
        else{
          secondData = fourthLine + '...';
        }
        if(nodeDatum.__rd3t.depth === 0){
          backgroundColor = defaultColor
        }
        else{
          const targetNodeColor = nodeColors.find(nodeColor => nodeColor.value === nodeDatum.itemtype);
          if (targetNodeColor) {
            backgroundColor = targetNodeColor.color
          } else {
            backgroundColor = defaultColor;
            console.log("No node color found with value " + nodeDatum.itemtype);
          }        
        }
        shortText = shortText + '...'
        let link = "https://google.com/item/" + nodeDatum.itemid + "/?projectid=" + nodeDatum.gid;
        let svg_id = "svg_id"+id;
        return (
          <>
            <g transform="translate(-1273 -950)" className='starting'>
              <rect id={svg_id} data-hidden-value={nodeDatum.gid} data-name="Rectangle 4299" width="296" height="162" rx="13" transform="translate(1273 870)" strokeWidth={0} fill={backgroundColor}  style={{
                stroke:  searchResult === nodeDatum.gid ? 'black' : '',
                strokeWidth:  searchResult === nodeDatum.gid ? 10 : '',
                strokeDasharray:  searchResult === nodeDatum.gid ? '5, 5' : '',
                strokeDashoffset:  searchResult === nodeDatum.gid ? 100 : '',
                animation: searchResult === nodeDatum.gid ? 'dash 5s linear infinite' : ''
              }}/>
              <path id="Path_6080" data-name="Path 6080" d="M0,0H296" transform="translate(1273 930.5)" fill="none" stroke="#fff" strokeWidth="2"/>
              <text id="" data-name="" transform="translate(1283 940)" fill="#fff" fontSize="15" fontFamily="Rubik-Regular, Rubik" strokeWidth={0}><tspan x="0" y="14">{firstLine}</tspan><tspan x="0" y="36">{secondLine} </tspan><tspan x="0" y="58">{thirdLine}</tspan><tspan x="0" y="80">{fourthLine}</tspan></text>
              {
              secondData === '' ? (
                <></>
              ) : (              
                <text id="Dasboard" transform="translate(1384 1020)" fill="#fff" fontSize="15" fontFamily="Rubik-Regular, Rubik" text-decoration="underline" strokeWidth={0} onMouseOver={(e) => handleMouseOver(nodeDatum.description,svg_id,event)} onMouseOut={() => handleMouseOut(svg_id)} ><tspan x="100" y="0">Read more</tspan></text>
                )
            }                   
              <text id="Dasboard-2" data-name="Dasboard" transform="translate(1283 891)" fill="#fff" fontSize="15" fontFamily="Rubik-Medium, Rubik" fontWeight="500" strokeWidth={0}><tspan x="0" y="0">{nodeDatum.projectname}</tspan></text>
              <text id="Dasboard-3" data-name="Dasboard" transform="translate(1283 921)" fill="#fff" fontSize="21" fontFamily="Rubik-Regular, Rubik" strokeWidth={0}><a href={link} target={"_blank"}><tspan x="0" y="0">{nodeDatum['gid']}</tspan></a></text>
              {
              nodeDatum.children ? (
                nodeDatum.__rd3t.collapsed ?(
                  <>
                    <text id="Dasboard-4" data-name="Dasboard" transform="translate(1485 906)" fill="#fff" fontSize="15" fontFamily="Rubik-Regular, Rubik" strokeWidth={0} onClick={toggleNode}><tspan x="0" y="10">{nodeDatum.__rd3t.collapsed ? 'Expand' : 'Collapse'}</tspan></text>
                    <g id="Icons" transform="translate(1554 919.582) rotate(180)">
                      <g id="Rounded" transform="translate(-6 -2.418)">
                        <g id="Navigation" transform="translate(0 0)">
                          <g id="_-Round-_-Navigation-_-arrow_back_ios" data-name="-Round-/-Navigation-/-arrow_back_ios" transform="translate(0 0)">
                            <g id="Group_277" data-name="Group 277" strokeWidth={0} >
                              <path id="Path" d="M0,0H22V22H0Z" fill="none" fillRule="evenodd" opacity="0.87" onClick={toggleNode}/>
                              <path id="_-Icon-Color" data-name="🔹-Icon-Color" d="M15.755,2.959a1.145,1.145,0,0,0-1.622,0L6.516,10.577a.913.913,0,0,0,0,1.292l7.617,7.617a1.147,1.147,0,0,0,1.622-1.622L9.119,11.218l6.646-6.646A1.142,1.142,0,0,0,15.755,2.959Z" transform="translate(-0.521 -0.219)" fill="#fff" fillRule="evenodd" onClick={toggleNode}/>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </>
                ) : (
                  <>
                    <text id="Dasboard-4" data-name="Dasboard" transform="translate(1497 906)" fill="#fff" fontSize="15" fontFamily="Rubik-Regular, Rubik" strokeWidth={0} onClick={toggleNode}><tspan x="0" y="10">{nodeDatum.__rd3t.collapsed ? 'Expand' : 'Collapse'}</tspan></text>                  
                    <g id="Icons" transform="translate(1475.001 900.001)" onClick={toggleNode}>
                      <g id="Rounded" transform="translate(0 0)">
                        <g id="Navigation" transform="translate(0)">
                          <g id="_-Round-_-Navigation-_-arrow_back_ios" data-name="-Round-/-Navigation-/-arrow_back_ios">
                            <g id="Group_277" data-name="Group 277" strokeWidth={0}>
                              <path id="Path" d="M0,22H22V0H0Z" fill="none" fillRule="evenodd" opacity="0.87" onClick={toggleNode}/>
                              <path id="_-Icon-Color" data-name="🔹-Icon-Color" d="M9.508,16.864a1.145,1.145,0,0,1-1.622,0L.268,9.247a.913.913,0,0,1,0-1.292L7.885.337A1.147,1.147,0,0,1,9.508,1.959L2.871,8.605l6.646,6.646A1.143,1.143,0,0,1,9.508,16.864Z" transform="translate(5.727 2.395)" fill="#fff" fillRule="evenodd" onClick={toggleNode}/>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>                  
                  </>
                )
                ) : (
                    <></>
                )
              }                                                  
            </g>
          {id++}
          </>       
        );  
      }
      catch(e){
        alert("Something wrong in json format")
        console.log(e);
      }
    }
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
    const handleMouseOver = (input,id,event) => {
      setTooltipVisible(true);
      var myicon = document.getElementById(id);
      var mypopup = document.getElementById("mypopup");    
      var iconPos = myicon.getBoundingClientRect();
      mypopup.style.left = event.clientX + 20 + "px";
      mypopup.style.top = event.clientY + 20 + "px";
      mypopup.style.display = "block";    
      document.getElementById("svg_content").innerHTML = input;
    };
    
    const handleMouseOut = (id) => {
      var myicon = document.getElementById(id);
      var mypopup = document.getElementById("mypopup");    
      mypopup.style.display = "none";    
      setTooltipVisible(false);
    };
    const svgSquare = {
      shape: 'rect',
      shapeProps: {
        width: 0,
        height: 0,
      }
    }
    function handleLoadMore() {
        
      let children = datas.downstream.slice(start,end);
      let orgChartString = JSON.stringify(children);
      orgChartString = orgChartString.replace(/downstream/g, 'children');
      children = JSON.parse(orgChartString);
      
      const child = children[start];
      setStart(end);
      setEnd(end + 40);
    
      setData({"name": treedata['name'],"gid": treedata['gid'],"type": treedata['itemtype'],"description":treedata['description'],"projectname":treedata['projectname'],"itemid":treedata['itemid'],"project": treedata['project'],"children": children})        
      getLeadgers(children);
      setLoadingSpinner(false);
    }
    const handleChange = e => {
      const fileReader = new FileReader();
      setLoadingSpinner(true);        
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = e => {
        if (fileReader.readyState === FileReader.DONE) {
          setLoadingSpinner(false);            
          let val = e.target.result;
          let json = JSON.parse(val);
          treedata = json;
          let children = json.slice(0,40);
          const convertedArr = children.map(convertDownstreamToArray);
          let orgChartString = JSON.stringify(convertedArr);
          orgChartString = orgChartString.replace(/downstream/g, 'children');
          children = JSON.parse(orgChartString);
          
          const child = children[start];
          setStart(end);
          setEnd(end + 40);
        
          setData({"name": "roots","gid": "R0001","itemtype": "step1","description":"Description","projectname":"project name","itemid":"itemid","project": "project","children": children})            
          getLeadgers(children);
        } else {
          setLoadingSpinner(false);            
          alert("File reading failed");
        }          
      };
    };
    const downlo = async (type) => {
      setLoadingSpinner(true);      
      setTimeout(() => {
        setData(data);
        setLoadingSpinner(false);
      }, 100);                      
      const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      delay(2000)
        .then(() => {
          const svgs = document.querySelector('.trees');
          const gs = svgs.querySelector('g').getBoundingClientRect().height;
          const wt = svgs.querySelector('g').getBoundingClientRect().width;
          console.log(gs);
          console.log(wt);  
          const svg = document.querySelector('.trees').cloneNode(true); 
          const style = document.createElement('style');
          style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;700&family=Rubik:wght@300;400&display=swap');
            svg {
              font-family: 'Rubik-Regular, Rubik';
            }
            .my-legend .legend-title {
              text-align: left;
              margin-bottom: 5px;
              font-weight: bold;
              font-size: 90%;
              }
            .my-legend .legend-scale ul {
              margin: 0;
              margin-bottom: 5px;
              padding: 0;
              float: left;
              list-style: none;
              }
            .my-legend .legend-scale ul li {
              font-size: 80%;
              list-style: none;
              margin-left: 0;
              margin-bottom: 2px;
              line-height: 23px;
              }
            .my-legend ul.legend-labels li span {
              display: block;
              float: left;
              height: 16px;
              width: 30px;
              margin-right: 5px;
              margin-left: 0;
              border: 1px solid #999;
              }
            .my-legend .legend-source {
              font-size: 70%;
              color: #999;
              clear: both;
              }
            .my-legend a {
              color: #777;
            }          
            span {
              width: 10px; 
              height: 10px; 
              display: inline-block; 
              margin-right: 10px; 
              margin-bottom: 5px;          
            }
            text {
              margin-bottom: 5px;
            }
            .floatleft {
              position : fixed;
            }
          `;
          svg.insertBefore(style, svg.firstChild);      
          document.body.appendChild(svg); 
          
          const legend = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          legend.setAttribute("width", 200);
          legend.setAttribute("height", 150);
    
          const legendRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          legendRect.setAttribute("x", 10);
          legendRect.setAttribute("y", 10);
          legendRect.setAttribute("width", 180);
          legendRect.setAttribute("height", 130);
          legendRect.setAttribute("fill", "white");
          legendRect.setAttribute("stroke", "black");
    
          legendRect.innerHTML = `
            <div id='leadger' class='floatleft'>
              <div class='my-legend'>
                <div class='legend-scale'>
                  <ul class='legend-labels'>
                    ${ledger.map((itemtype, index) => {
                      const targetNodeColor = nodeColors.find(nodeColor => nodeColor.value === itemtype);
                      let clr = '';
                      if (targetNodeColor) {
                        clr = targetNodeColor.color;
                      } else {
                        clr = defaultColor;
                      }
                      return `
                        <li key=${itemtype} style='color: ${clr};'>
                          <span style='background-color: ${clr};'></span>
                          <text style='color: ${clr}; background-color: ${clr};'> ${ledgerName[index]}</text>
                        </li>
                      `;
                    }).join("")}
                  </ul>
                </div>
              </div>
            </div>
          `;
    
          legend.appendChild(legendRect);
          document.body.appendChild(legend);
          console.log(legendRect);
          const divheight = svg.querySelector('.check');
          divheight.setAttribute('style', 'width:' + wt * 2 + 'px;height:' + gs + 'px;');;
          const g = svg.querySelector('g') 
          g.setAttribute('transform', `translate(100.20001220703125, ${gs/2}) scale(0.3)`);
          svg.setAttribute('width', wt * 2) 
          svg.setAttribute('height', gs)
          const svgAsXML = (new XMLSerializer).serializeToString(svg);
          const svgData = `data:image/svg+xml,${encodeURIComponent(svgAsXML)}`
          if(type === "svg"){
            const link = document.createElement("a");
            document.body.appendChild(link); 
            link.setAttribute("href", svgData);
            link.setAttribute("download", "luminar.svg");
            link.click();  
          }
          if(type === "html"){
            const htmlData = `<!DOCTYPE html><html><head><title>Luminar</title>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;700&family=Rubik:wght@300;400&display=swap" rel="stylesheet" crossorigin="anonymous">
            <style>
            svg {
              font-family: 'Rubik-Regular, Rubik';
            }
            .my-legend .legend-title {
              text-align: left;
              margin-bottom: 5px;
              font-weight: bold;
              font-size: 90%;
              }
            .my-legend .legend-scale ul {
              margin: 0;
              margin-bottom: 5px;
              padding: 0;
              float: left;
              list-style: none;
              }
            .my-legend .legend-scale ul li {
              font-size: 80%;
              list-style: none;
              margin-left: 0;
              margin-bottom: 2px;
              line-height: 23px;
              }
            .my-legend ul.legend-labels li span {
              display: block;
              float: left;
              height: 16px;
              width: 30px;
              margin-right: 5px;
              margin-left: 0;
              border: 1px solid #999;
              }
            .my-legend .legend-source {
              font-size: 70%;
              color: #999;
              clear: both;
              }
            .my-legend a {
              color: #777;
            }          
            span {
              width: 10px; 
              height: 10px; 
              display: inline-block; 
              margin-right: 10px; 
              margin-bottom: 5px;          
            }
            text {
              margin-bottom: 5px;
            }
            .floatleft {
              position : fixed;
            }
            </style>
            </head><body>${svgAsXML}</body></html>`;
            const blob = new Blob([htmlData], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const links = document.createElement('a');
            document.body.appendChild(links);
            links.setAttribute('href', url);
            links.setAttribute('download', 'luminar.html');
            links.click();             
          }    
        })
        .then(() => {
          console.log('Data set successfully.');
        })
        .catch((error) => {
          console.error('Error setting data:', error);
        });      
    }
    const centerData = () => {
      setLoadingSpinner(true);
      setTimeout(() => {
        setData(data);
        setLoadingSpinner(false);
      }, 100);                      
    }
    const getLeadgers = arr => {
      arr.forEach(item => {        
        uniqueNames.add(item.itemtype);
        uniqueType.add(item.itemtypename);
        if (item.children) {
          getLeadgers(item.children);
        }
      });
      setLedgerName(Array.from(uniqueType));
      setLedger(Array.from(uniqueNames));
//      return Array.from(uniqueNames);
    };    
    useEffect(() => { 
      handleLoadMore();
    }, []);    
              
    return (
      <>
        <CRow className='toprows' ref={ref}>
          <CCol xs={6} lg={3} className="d-flex justify-content-end mb-4 pt-4">
            <input type="file" accept=".json" className='form-control' onChange={handleChange} />
          </CCol>        
          <CCol xs={6} lg={3} className="d-flex justify-content-end mb-4 pt-4" id='123'>
            <button className='center-color' onClick={centerData}>Center</button>&nbsp;
            <CDropdown className='center-color'>
              <CDropdownToggle color="secondary" className='center-color'>Save</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem onClick={() => downlo('svg')}>Svg</CDropdownItem>
                <CDropdownItem onClick={() => downlo('html')}>Html</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>&nbsp;           
            <div className="input-group">
              <input type="text" className="form-control" onChange={e => setSearchResult(e.target.value)} placeholder="Search..." aria-label="Search Item Id" aria-describedby="button-addon2" autoComplete="off"/>
            </div>            
          </CCol>                  
          <CCol xs={12} lg={6} className="d-flex justify-content-end mb-4 pt-4">
            <Pagination
              pageSize={40}
              items={treedata['downstream']}
              onChangePage={onChangePage}
            />            
          </CCol>
        </CRow>
        <CRow  id='trees' className='trees' ref={treeContainer}>
          <CCol xs={12} lg={6} className="pt-2">
            <div id='leadger' className='floatleft'>
            <div className='my-legend'>
                <div className='legend-scale'>
                  <ul className='legend-labels'>
                  {ledger.map((itemtype,index) => {
                    const targetNodeColor = nodeColors.find(nodeColor => nodeColor.value === itemtype);
                    let clr = ''
                    if (targetNodeColor) {
                      clr = targetNodeColor.color;
                    } else {
                      clr = defaultColor;
                      console.log("No node color found with value " + itemtype);
                    }
                    return (                       
                      <li key={itemtype}>
                        <span style={{backgroundColor: clr, marginRight: "10px", marginBottom: "5px"}}></span>
                        <ledgertag style={{marginBottom: "5px"}}> {ledgerName[index]}</ledgertag>
                      </li>
                    );
                  })}
                  </ul>
                </div>
              </div>            
            </div>
          </CCol>
          <CCol xs={12} className="check" style={{"height":"15000px"}}>
          {
            loadingSpinner ? (
              <div className="d-flex align-items-center justify-content-center" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <CSpinner component="span" size="sm" aria-hidden="false"/>
              </div>
            ) : (
            <Tree 
              data={data} 
              dimensions={dimensions}
              renderCustomNodeElement={renderRectSvgNode}
              orientation="horizontal"        
              styles={styles}       
              childrenKey="children"  
              nodeSvgShape={svgSquare}
              pathFunc="step"
              zoom={0.3}       
              translate={{ x: 250, y: 250 }}
              nodeSize={{
                x: 650,
                y: 100
              }}
              separation={{
                siblings: 2,
                nonSiblings: 4
              }}                          
            />              
            )
          }
            <div id="mypopup">
              <p id="svg_content"></p>
            </div>        
          </CCol>
        </CRow>
      </>
    )
}

export default DashboardTree
