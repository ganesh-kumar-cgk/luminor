import React,{useState,useEffect} from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow,CSpinner } from '@coreui/react'
import Tree from 'react-d3-tree'
import { useCenteredTree } from "./helpers/Helpers"
import './style.css';
import {fitWrappedText} from 'canvas-text-wrapper';
import { Tooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";
import treedata from './tree2.json'
import treedata2 from './tree2.json'
import axios from 'axios'
import Pagination from "./Pagination";

const DashTree = () => {
    const [data, setData] = useState({"name": "roots","id": "R0001","type": "step1","children": []});
    const [treeData, setTreeData] = useState({"name": "roots","id": "R0001","type": "step1","children": []});
    const [datas, setDatas] = useState(treedata);    
    const [start, setStart] = useState(0); 
    const [end, setEnd] = useState(40);
    const [tooltip, setTooltipVisible] = useState(false);
    const [dimensions, translate, containerRef] = useCenteredTree();    
    const [loadingSpinner, setLoadingSpinner] = useState(true);
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
      let orgChartString = JSON.stringify(pageOfItems);
      orgChartString = orgChartString.replace(/downstream/g, 'children');
      pageOfItems = JSON.parse(orgChartString);
      setTreeData({"name": "roots","gid": "R0001","itemtype": "step1","children": pageOfItems});
      setData({"name": "roots","gid": "R0001","itemtype": "step1","children": pageOfItems})    
      setTimeout(() => {
        setLoadingSpinner(false);
      }, 3000);                
    };    
    const renderRectSvgNode = ({ nodeDatum, toggleNode }) => {
      console.log(nodeDatum);
        let shortText = nodeDatum['name'].substring(0, 110);
        let firstLine = shortText.substring(0, 30);
        let secondLine = shortText.substring(30, 60);
        let thirdLine = shortText.substring(60, 90);        
        let fourthLine = shortText.substring(90, 110);        
        let secondData = '';
        let backgroundColor = '';
        if(nodeDatum.__rd3t.depth === 0){
          backgroundColor = "#00973d";
        }
        else if(nodeDatum.__rd3t.depth === 1){
          backgroundColor = "#F56457";
        }
        else if(nodeDatum.__rd3t.depth === 2){
          backgroundColor = "#7E1470";
        }
        else if(nodeDatum.__rd3t.depth === 3){
          backgroundColor = "#3245BF";
        }
        else if(nodeDatum.__rd3t.depth === 4){
          backgroundColor = "#5D6E1E";
        }
        else if(nodeDatum.__rd3t.depth === 5){
          backgroundColor = "#BD3B1B";
        }
        else if(nodeDatum.__rd3t.depth === 6){
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
        let type = nodeDatum.itemtype;
        let svg_id = "svg_id"+id;
        return (
          <>
          <g id={svg_id} transform="translate(-598 -770)" stroke-width="0">
            <rect id="Rectangle_4292" data-name="Rectangle 4292" width="257" height="135" rx="13" transform="translate(536 713)" fill={backgroundColor}/>
            <path id="Path_6071" data-name="Path 6071" d="M0,0H257" transform="translate(536 747.5)" fill="none" stroke="#fff" stroke-width="2"/>
            <text id="textid" stroke-width="0" data-name={nodeDatum.name} transform="translate(546 757)" fill="#fff" font-size="15" font-family="Rubik-Regular, Rubik"><tspan x="0" y="14">{firstLine}</tspan><tspan x="0" y="36">{secondLine} </tspan><tspan x="0" y="58">{thirdLine}</tspan><tspan x="0" y="80">{fourthLine}</tspan></text>
            {
              secondData === '' ? (
                <></>
              ) : (
                <text id="Dasboard" transform="translate(704 837)" fill="#fff" font-size="15" font-family="Rubik-Regular, Rubik" text-decoration="underline" stroke-width="0"><tspan x="0" y="0" onMouseOver={(e) => handleMouseOver(nodeDatum.name,svg_id,event)} onMouseOut={() => handleMouseOut(svg_id)} >Read more</tspan></text>
              )
            }            
            <text id="Dasboard-2" data-name="Dasboard" transform="translate(546 738)" fill="#fff" font-size="21" font-family="Rubik-Regular, Rubik" stroke-width="0"><tspan x="0" y="0"> {nodeDatum['gid']}</tspan></text>
            {nodeDatum.__rd3t.collapsed ?(
              <>
                <text id="Dasboard-3" data-name="Dasboard" transform="translate(707 736)" fill="#fff" font-size="15" font-family="Rubik-Regular, Rubik" stroke-width="0" onClick={toggleNode}><tspan x="0" y="0">{nodeDatum.__rd3t.collapsed ? 'Expand' : 'Collapse'}</tspan></text>
                <g id="Navigation" transform="translate(765.154 722.395)">
                  <g id="_-Round-_-Navigation-_-arrow_back_ios" data-name="-Round-/-Navigation-/-arrow_back_ios" transform="translate(0 0)">
                    <g id="Group_277" data-name="Group 277">
                      <path id="_-Icon-Color" stroke-width="0" data-name="🔹-Icon-Color" d="M.338,16.864a1.145,1.145,0,0,0,1.622,0L9.578,9.247a.913.913,0,0,0,0-1.292L1.96.337A1.147,1.147,0,0,0,.338,1.959L6.974,8.605.329,15.251A1.143,1.143,0,0,0,.338,16.864Z" transform="translate(0 0)" fill="#fff" fill-rule="evenodd"/>
                    </g>
                  </g>
                </g>
              </>
            ) : (
              <>
                <text id="Dasboard-3" data-name="Dasboard" transform="translate(717 736)" fill="#fff" font-size="15" font-family="Rubik-Regular, Rubik" stroke-width="0" onClick={toggleNode}><tspan x="0" y="0">{nodeDatum.__rd3t.collapsed ? 'Expand' : 'Collapse'}</tspan></text>
                <g id="Navigation" transform="translate(695.001 720)">
                  <g id="_-Round-_-Navigation-_-arrow_back_ios" data-name="-Round-/-Navigation-/-arrow_back_ios">
                    <g id="Group_277" data-name="Group 277">
                      <path id="_-Icon-Color" stroke-width="0" data-name="🔹-Icon-Color" d="M9.508,16.864a1.145,1.145,0,0,1-1.622,0L.268,9.247a.913.913,0,0,1,0-1.292L7.885.337A1.147,1.147,0,0,1,9.508,1.959L2.871,8.605l6.646,6.646A1.143,1.143,0,0,1,9.508,16.864Z" transform="translate(5.727 2.395)" fill="#fff" fill-rule="evenodd"/>
                    </g>
                  </g>
                </g>            
              </>
            )
            }
          </g>
          {id++}
          </>       
        );
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
        document.getElementById("svg_content").innerText = input;
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
        
        console.log(children);
        const child = children[start];
        setStart(end);
        setEnd(end + 40);
      
        console.log(start);
        console.log(end);
        setTreeData({"name": "roots","gid": "R0001","itemtype": "step1","children": children});
        setData({"name": "roots","gid": "R0001","itemtype": "step1","children": children})        
        setLoadingSpinner(false);
      }

      useEffect(() => {
        handleLoadMore();
      }, []);    
              
    return (
      <>
        <CRow>
        <CCol xs={12} className="d-flex justify-content-end mb-4 pt-4">
          <Pagination
            pageSize={40}
            items={treedata['downstream']}
            onChangePage={onChangePage}
          />            
        </CCol>
          <CCol xs={12} style={{"height":"800px"}}>
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
            translate={translate}
            nodeSize={{
              x: 540,
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
