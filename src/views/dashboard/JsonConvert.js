import React,{useState,useEffect} from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow,CSpinner } from '@coreui/react'
import './style.css';
import treedata from './json/jsonconvert.json'

const JsonConvert = () => {
    const [start, setStart] = useState(0); 
    const [end, setEnd] = useState(40);
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    let [ledger, setLedger] = useState([]);
    let [ledgerName, setLedgerName] = useState([]);

    let uniqueNames = new Set();

    function handleLoadMore() {   
      convert(treedata);
    }
    function convert(data){
      // let newJSON = [];
      // let map = new Map();
      // let check = [];
      // for (const obj of data) {
      //   if (obj['itemtypename'] !== "Heading Item Type" && obj['itemtypename'] !== "Heading/Information") {          
      //     check.push(obj['itemtypename'])
      //     if(obj.downstream){
      //       let downstream = obj.downstream;
      //       for(let j=0;j<downstream.length;j++){
      //           check.push(downstream[j]['itemtypename'])
      //           if (downstream[j]['itemtypename'] !== "Heading Item Type" && downstream[j]['itemtypename'] !== "Heading/Information") {          

      //           }
      //           else{
      //             check.push(downstream[j]['itemtypename'])
      //           }
      //       }
      //       console.log(check);
      //       let containsHeading = check.some(function(item) {
      //         return item === "Heading Item Type" || item === "Heading/Information";
      //       });
            
      //       if (containsHeading) {
      //         console.log("The array contains either Heading Item Type or Heading/Information");
      //       } else {
      //         newJSON.push(obj)
      //       }        
      //       check = [];    
      //     }
      //     else{
      //       newJSON.push(obj);
      //     }
      //   }
      //   else{

      //   }
      // }
      // data.forEach(item => {        
      //   uniqueNames.add({itemtype:item.itemtype,itemtypename:item.itemtypename});
      //   if (item.downstream) {
      //     convert(item.downstream);
      //   }
      // });
      // console.log(Array.from(uniqueNames));
      // let uniqueArray = [...new Set(uniqueNames.map(JSON.stringify))].map(JSON.parse);

      // console.log(uniqueArray);      
      // setLedgerName(Array.from(uniqueNames));      
      data.forEach(item => {        
        uniqueNames.add(item.itemtypename);
        if (item.downstream) {
          convert(item.downstream);
        }
      });
      console.log(uniqueNames);      
      // console.log(newJSON);
      // document.getElementById('print').innerText = JSON.stringify(newJSON, null, 2);
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
          convert(val);
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
