import React,{useState,useEffect} from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow,CSpinner,CFormInput } from '@coreui/react'
import Tree from 'react-d3-tree'
import { useCenteredTree } from "./helpers/Helpers"
import './style.css';
import treedata from './json/tree.json'
import Pagination from "./Pagination/PaginationTree";

const DashTree = () => {
    const [data, setData] = useState({"name": treedata[0]['name'],"id": treedata[0]['gid'],"type": treedata[0]['itemtype'],"description":treedata[0]['description'],"projectname":treedata[0]['projectname'],"itemid":treedata[0]['itemid'],"project": treedata[0]['project'],"children": []});
    const [datas, setDatas] = useState(treedata);    
    const [start, setStart] = useState(0); 
    const [end, setEnd] = useState(40);
    const [tooltip, setTooltipVisible] = useState(false);
    const [dimensions, translate, containerRef] = useCenteredTree();    
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    const [files, setFiles] = useState({"name": treedata[0]['name'],"id": treedata[0]['gid'],"type": treedata[0]['itemtype'],"description":treedata[0]['description'],"projectname":treedata[0]['projectname'],"itemid":treedata[0]['itemid'],"project": treedata[0]['project'],"children": []});
    let id = 0;
    const onChangePage = (pageOfItems,startIndex,endIndex) => {
      console.log("onchange");
      console.log(startIndex);
      console.log(endIndex);
      setStart(endIndex);
      setEnd(startIndex + endIndex);
      setLoadingSpinner(true);    
      console.log(start);
      console.log(end);
      const convertedArr = pageOfItems.map(convertDownstreamToArray);
      let orgChartString = JSON.stringify(convertedArr);
      orgChartString = orgChartString.replace(/downstream/g, 'children');
      pageOfItems = JSON.parse(orgChartString);
      setData({"name": "roots","gid": "R0001","itemtype": "step1","description":"description","projectname":"project name","itemid":"itemid","project": "project","children": pageOfItems})        

      setTimeout(() => {
        setLoadingSpinner(false);
      }, 500);                
    };    
    const renderRectSvgNode = ({ nodeDatum, toggleNode }) => {
      try{
        let desc = nodeDatum.description;
        desc = desc.replace(/&nbsp;/g, '');
        let stripped = desc.replace(/(<([^>]+)>)/ig, " ");      
        let shortText = stripped.substring(0, 140);
        let firstLine = shortText.substring(0, 40);
        let secondLine = shortText.substring(40, 80);
        let thirdLine = shortText.substring(80, 120);        
        let fourthLine = shortText.substring(120, 140);        
        let secondData = '';
        let backgroundColor = '';
        if(nodeDatum.itemtype === 1){
          backgroundColor = "#00973d";
        }
        else if(nodeDatum.itemtype === 2){
          backgroundColor = "#F56457";
        }
        else if(nodeDatum.itemtype === 3){
          backgroundColor = "#7E1470";
        }
        else if(nodeDatum.itemtype === 4){
          backgroundColor = "#3245BF";
        }
        else if(nodeDatum.itemtype === 5){
          backgroundColor = "#5D6E1E";
        }
        else if(nodeDatum.itemtype === 6){
          backgroundColor = "#BD3B1B";
        }
        else if(nodeDatum.itemtype === 7){
          backgroundColor = "#E83845";
        }
        else {
          backgroundColor = "#012F63";
        }                        
        if(fourthLine === ''){
          secondData = '';
        }
        else{
          secondData = fourthLine + '...';
        }
        shortText = shortText + '...'
        let link = "https://google.com/item/" + nodeDatum.itemid + "/?projectid=" + nodeDatum.gid;
        let svg_id = "svg_id"+id;
        return (
          <>
            <g id={svg_id}  transform="translate(-1273 -950)">
              <rect id="Rectangle_4299" data-name="Rectangle 4299" width="296" height="162" rx="13" transform="translate(1273 870)" strokeWidth={0} fill={backgroundColor}/>
              <path id="Path_6080" data-name="Path 6080" d="M0,0H296" transform="translate(1273 930.5)" fill="none" stroke="#fff" stroke-width="2"/>
              <text id="" data-name="" transform="translate(1283 940)" fill="#fff" font-size="15" font-family="Rubik-Regular, Rubik" strokeWidth={0}><tspan x="0" y="14">{firstLine}</tspan><tspan x="0" y="36">{secondLine} </tspan><tspan x="0" y="58">{thirdLine}</tspan><tspan x="0" y="80">{fourthLine}</tspan></text>
              {
              secondData === '' ? (
                <></>
              ) : (              
                <text id="Dasboard" transform="translate(1384 1020)" fill="#fff" font-size="15" font-family="Rubik-Regular, Rubik" text-decoration="underline" strokeWidth={0} onMouseOver={(e) => handleMouseOver(nodeDatum.description,svg_id,event)} onMouseOut={() => handleMouseOut(svg_id)} ><tspan x="100" y="0">Read more</tspan></text>
                )
            }                   
              <text id="Dasboard-2" data-name="Dasboard" transform="translate(1283 891)" fill="#fff" font-size="15" font-family="Rubik-Medium, Rubik" font-weight="500" strokeWidth={0}><a href={link} target={"_blank"}><tspan x="0" y="0">{nodeDatum.projectname}</tspan></a></text>
              <text id="Dasboard-3" data-name="Dasboard" transform="translate(1283 921)" fill="#fff" font-size="21" font-family="Rubik-Regular, Rubik" strokeWidth={0}><tspan x="0" y="0">{nodeDatum['gid']}</tspan></text>
              {
              nodeDatum.children ? (
                nodeDatum.__rd3t.collapsed ?(
                  <>
                    <text id="Dasboard-4" data-name="Dasboard" transform="translate(1485 906)" fill="#fff" font-size="15" font-family="Rubik-Regular, Rubik" strokeWidth={0} onClick={toggleNode}><tspan x="0" y="10">{nodeDatum.__rd3t.collapsed ? 'Expand' : 'Collapse'}</tspan></text>
                    <g id="Icons" transform="translate(1554 919.582) rotate(180)">
                      <g id="Rounded" transform="translate(-6 -2.418)">
                        <g id="Navigation" transform="translate(0 0)">
                          <g id="_-Round-_-Navigation-_-arrow_back_ios" data-name="-Round-/-Navigation-/-arrow_back_ios" transform="translate(0 0)">
                            <g id="Group_277" data-name="Group 277" strokeWidth={0} >
                              <path id="Path" d="M0,0H22V22H0Z" fill="none" fill-rule="evenodd" opacity="0.87"/>
                              <path id="_-Icon-Color" data-name="????-Icon-Color" d="M15.755,2.959a1.145,1.145,0,0,0-1.622,0L6.516,10.577a.913.913,0,0,0,0,1.292l7.617,7.617a1.147,1.147,0,0,0,1.622-1.622L9.119,11.218l6.646-6.646A1.142,1.142,0,0,0,15.755,2.959Z" transform="translate(-0.521 -0.219)" fill="#fff" fill-rule="evenodd"/>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </>
                ) : (
                  <>
                    <text id="Dasboard-4" data-name="Dasboard" transform="translate(1497 906)" fill="#fff" font-size="15" font-family="Rubik-Regular, Rubik" strokeWidth={0} onClick={toggleNode}><tspan x="0" y="10">{nodeDatum.__rd3t.collapsed ? 'Expand' : 'Collapse'}</tspan></text>                  
                    <g id="Icons" transform="translate(1475.001 900.001)" onClick={toggleNode}>
                      <g id="Rounded" transform="translate(0 0)">
                        <g id="Navigation" transform="translate(0)">
                          <g id="_-Round-_-Navigation-_-arrow_back_ios" data-name="-Round-/-Navigation-/-arrow_back_ios">
                            <g id="Group_277" data-name="Group 277" strokeWidth={0}>
                              <path id="Path" d="M0,22H22V0H0Z" fill="none" fill-rule="evenodd" opacity="0.87"/>
                              <path id="_-Icon-Color" data-name="????-Icon-Color" d="M9.508,16.864a1.145,1.145,0,0,1-1.622,0L.268,9.247a.913.913,0,0,1,0-1.292L7.885.337A1.147,1.147,0,0,1,9.508,1.959L2.871,8.605l6.646,6.646A1.143,1.143,0,0,1,9.508,16.864Z" transform="translate(5.727 2.395)" fill="#fff" fill-rule="evenodd"/>
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
      console.log(input);
      console.log(id);
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
    function convertDownstreamToArray(obj) {
      const { downstream, ...rest } = obj;
      if (downstream && typeof downstream === "object") {
        return {
          ...rest,
          downstream: [convertDownstreamToArray(downstream)],
        };
      }
      return obj;
    }
    function handleLoadMore() {   
      let children = datas.slice(0,40);
      console.log(children);
      const convertedArr = children.map(convertDownstreamToArray);
      let orgChartString = JSON.stringify(convertedArr);
      orgChartString = orgChartString.replace(/downstream/g, 'children');
      children = JSON.parse(orgChartString);
      
      console.log(children);
      const child = children[start];
      setStart(end);
      setEnd(end + 40);
    
      console.log(start);
      console.log(end);
      setData({"name": "roots","gid": "R0001","itemtype": "step1","description":"description","projectname":"project name","itemid":"itemid","project": "project","children": children})        
      setLoadingSpinner(false);
    }
    const handleChange = e => {
      console.log("changed");
      const fileReader = new FileReader();
      setLoadingSpinner(true);        
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = e => {
        if (fileReader.readyState === FileReader.DONE) {
          setLoadingSpinner(false);            
          let val = e.target.result;
          let json = JSON.parse(val);
          console.log(json);
          treedata = json;
          let children = json.slice(0,40);
          console.log(children);
          const convertedArr = children.map(convertDownstreamToArray);
          let orgChartString = JSON.stringify(convertedArr);
          orgChartString = orgChartString.replace(/downstream/g, 'children');
          children = JSON.parse(orgChartString);
          
          console.log(children);
          const child = children[start];
          setStart(end);
          setEnd(end + 40);
        
          console.log(start);
          console.log(end);
          setData({"name": "roots","gid": "R0001","itemtype": "step1","description":"Description","projectname":"project name","itemid":"itemid","project": "project","children": children})            
        } else {
          setLoadingSpinner(false);            
          alert("File reading failed");
        }          
      };
    };
    useEffect(() => {
      handleLoadMore();
    }, []);    
              
    return (
      <>
        <CRow className='toprows'>
        <CCol xs={12} lg={3} className="d-flex justify-content-end mb-4 pt-4">
          <input type="file" accept=".json" className='form-control' onChange={handleChange} />
        </CCol>
        <CCol xs={12} lg={9} className="d-flex justify-content-end mb-4 pt-4">
          <Pagination
            pageSize={100}
            items={treedata}
            onChangePage={onChangePage}
          />            
        </CCol>
        </CRow>
        <CRow>
          <CCol xs={12} style={{"height":"2800px"}}>
          {
            loadingSpinner ? (
              <div className="d-flex align-items-center justify-content-center" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <CSpinner component="span" size="lg" aria-hidden="false"/>
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

export default DashTree
