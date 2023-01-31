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
        let shortText = nodeDatum['name'].substring(0, 45);
        let firstLine = shortText.substring(0, 30);
        let secondLine = shortText.substring(30, 50);
        let secondData = '';
        let backgroundColor = '';
        if(nodeDatum['itemtype'] === "step1"){
          backgroundColor = "#fd7e14";
        }
        else if(nodeDatum['itemtype'] === "step2"){
          backgroundColor = "#0dcaf0";
        }
        else if(nodeDatum['itemtype'] === "step3"){
          backgroundColor = "#198754";
        }
        else if(nodeDatum['itemtype'] === "step4"){
          backgroundColor = "#dc3545";
        }
        else {
          backgroundColor = "#141517";
        }                        
        if(secondLine === ''){
          secondData = '';
        }
        else{
          secondData = secondLine + '...';
        }
        shortText = shortText + '...'
        let type = nodeDatum.itemtype;
        let svg_id = "svg_id"+id;
        return (
          <>
          <g id={svg_id} transform="translate(-536 -571)"  onClick={toggleNode}>
          <g id="Group_5599" data-name="Group 5599" transform="translate(-5 7)">
            <g width="230" id="Rectangle_3512" data-name="Rectangle 3512" transform="translate(541 520)" fill={backgroundColor} stroke={backgroundColor} stroke-width="2">
              <rect width="200" height="94" rx="13" stroke="none"/>
              <rect x="1" y="1" width="200" height="92" rx="12" fill="none"/>
            </g>
            <line id="Line_329" data-name="Line 329" x2="200" transform="translate(542.5 554.5)" fill="none" stroke={backgroundColor} stroke-width="2"/>
          </g>
          <text id="Dasboard" strokeWidth="0" transform="translate(704 608)" fill="#1993e6" font-size="10" font-family="'Rubik', sans-serif"><tspan x="-30" y="0" stroke='white' onMouseOver={(e) => handleMouseOver(nodeDatum.name,svg_id,event)} onMouseOut={() => handleMouseOut(svg_id)} >Read more</tspan></text>
          <text id="Dasboard-2" strokeWidth="0" data-name="Dasboard" transform="translate(622 553)" fill="#fff" font-size="21" font-family="'Rubik', sans-serif"><tspan x="-30" y="0" stroke='white'> {nodeDatum['gid']}</tspan></text>
          <text id="" strokeWidth="0" transform="translate(546 571)" fill="#fff" font-size="15" font-family="'Rubik', sans-serif"><tspan x="0" y="14" stroke='white'>{firstLine}</tspan><tspan x="0" y="36">{nodeDatum.__rd3t.collapsed ? 'Expand' : 'Collapse'}</tspan></text>
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
          <CCol xs={12} style={{"height":"600px"}}>
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
          <CCol xs={6}>
            
          </CCol>
          <CCol xs={6}>
{/*            <button className='btn btn-primary' onClick={(e)=>handleLoadMore()}>Load Next Data</button>    */}
            <Pagination
             pageSize={40}
             items={treedata['downstream']}
             onChangePage={onChangePage}
             />            
        </CCol>
        </CRow>
      </>
    )
}

export default DashTree
