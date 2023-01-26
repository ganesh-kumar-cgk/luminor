import React,{useState,useEffect} from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import Tree from 'react-d3-tree'
import { useCenteredTree } from "./helpers/Helpers"
import './style.css';
import {fitWrappedText} from 'canvas-text-wrapper';
import { Tooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";
import treedata from './tree.json'
import axios from 'axios'


const DashboardTree = () => {

    const [data, setData] = useState();
    
//    const [loadedData, setLoadedData] = useState(data.children.slice(0,2))    
    const [loadedData, setLoadedData] = useState(treedata);

    const handleNodeClicks = (node) => {
        console.log(node);
      loadChildren(node);
    }
    const fetchData = () => {
      axios.get('api', {
        auth: {
          username: 'your-username',
          password: 'your-password'
        }
      })
      .then(response => {
        console.log(response);
        setData(response.data)
        setLoadedData(response.data);
      })
      .catch(error => {
        console.log(error);
      });    
    }  
    const loadChildren = (node) => {
    console.log("click");
      if (node.children) {
        setLoadedData(prevData => [...prevData, ...node.children])
      }
    }    
    const [currentDepth, setCurrentDepth] = useState(0);
  let id = 0;
  const [dimensions, translate, containerRef] = useCenteredTree();    
    const svgSquare = {
      shape: 'rect',
      shapeProps: {
        width: 0,
        height: 0,
      }
    }
//  const orgChart = data;
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
  const handleNodeClick = (node) => {
    console.log("clicked");
    console.log(node);
    // check if the node has children
    if (node.children && node.children.length >10) {
        setLoadedData([...prevData, ...node.children.slice(0,10)])
      } 
  }
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
           <text id="Dasboard-2" strokeWidth="0" data-name="Dasboard" transform="translate(622 553)" fill="#fff" font-size="21" font-family="'Rubik', sans-serif"><tspan x="-30" y="0" stroke='white'>ID : {nodeDatum['id']}</tspan></text>
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
            <text id="Dasboard-2" strokeWidth="0" data-name="Dasboard" transform="translate(622 553)" fill="#fff" font-size="21" font-family="'Rubik', sans-serif"><tspan x="-10" y="0" stroke='white'>ID : {nodeDatum['id']}</tspan></text>
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

  useEffect(() => {
    fetchData();
   }, []);    
  return (
    <>
      <CRow>
        <CCol xs={12} style={{"height":"1000px"}}>
          <Tree 
          data={loadedData} 
          dimensions={dimensions}
          renderCustomNodeElement={renderRectSvgNode}
          orientation="horizontal"        
          styles={styles}         
          nodeSvgShape={svgSquare}
          pathFunc="step"
          translate={translate}
          initialDepth={1}
          onClick={handleNodeClicks}          
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

export default DashboardTree
