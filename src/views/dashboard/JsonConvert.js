import React,{useState,useEffect} from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow,CSpinner } from '@coreui/react'
import './style.css';
import treedata from './json/jsonconvert.json'

const JsonConvert = () => {
    const [start, setStart] = useState(0); 
    const [end, setEnd] = useState(40);
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    function handleLoadMore() {   
        let newJSON = [];
        let map = new Map();
      
        for (let obj of treedata) {
          let curr = map.get(obj.id);
          if (!curr) {
            curr = { "id": obj.id, "name": obj.name,"project": obj.project,"projectname":obj.projectname,"itemtype":obj.itemtype,"itemtypename":obj.itemtypename,"itemid":obj.itemid,"gid":obj.gid,"description":obj.description, "downstream": [] };
            map.set(obj.id, curr);
            newJSON.push(curr);
          }
      
          let downstream = obj.downstream;
          let parent = curr;
          while (downstream) {
            let next = parent.downstream.find(d => d.id === downstream.id);
            if (!next) {
              next = { "id": downstream.id, "name": downstream.name,"project": obj.project,"projectname":obj.projectname,"itemtype":obj.itemtype,"itemtypename":obj.itemtypename,"itemid":obj.itemid,"gid":obj.gid,"description":obj.description, "downstream": [] };
              parent.downstream.push(next);
            }
            parent = next;
            downstream = downstream.downstream;
          }
        }
        console.log(newJSON);
        document.getElementById('print').innerText = JSON.stringify(newJSON, null, 2);

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
          val = JSON.parse(val);
          console.log(val);
          let newJSON = [];
          let map = new Map();
        
          for (let obj of val) {
            let curr = map.get(obj.id);
            if (!curr) {
              curr = { "id": obj.id, "name": obj.name,"project": obj.project,"projectname":obj.projectname,"itemtype":obj.itemtype,"itemtypename":obj.itemtypename,"itemid":obj.itemid,"gid":obj.gid,"description":obj.description, "downstream": [] };
              map.set(obj.id, curr);
              newJSON.push(curr);
            }
        
            let downstream = obj.downstream;
            let parent = curr;
            while (downstream) {
              let next = parent.downstream.find(d => d.id === downstream.id);
              if (!next) {
                next = { "id": downstream.id, "name": downstream.name,"project": obj.project,"projectname":obj.projectname,"itemtype":obj.itemtype,"itemtypename":obj.itemtypename,"itemid":obj.itemid,"gid":obj.gid,"description":obj.description, "downstream": [] };
                parent.downstream.push(next);
              }
              parent = next;
              downstream = downstream.downstream;
            }
          }
          console.log(newJSON);
          document.getElementById('print').innerText = JSON.stringify(newJSON, null, 2);
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
                <></>
            )
          }
          <div className="d-flex align-items-center justify-content-center" id='print'>          
          </div>
          </CCol>
        </CRow>
      </>
    )
}

export default JsonConvert
