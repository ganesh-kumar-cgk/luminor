import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Col, Row, Table,Button } from "react-bootstrap";
import {
  DatatableWrapper,
  useDatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from "react-bs-datatable";

import TABLE_BODY from "./json/TableData.json";

const STORY_HEADERS = [
  {
    prop: "id",
    title: "ID",
    isSortable : false,
    isFilterable: true
  },
  {
    prop: "title",
    title: "Requirements Description",
    isSortable: true,
    isFilterable: true
  },
  {
    prop: "ome",
    title: "OEM Status",
    isSortable: true,
    isFilterable: true    
  },
  {
    prop: "status",
    title: "Status",
    isSortable: true,
    cell: (row) => {
        if (row.status === "processed") {
          return (
            <Button
              variant="outline-primary"
              size="sm"
              style={{"color" : "white","backgroundColor" : "#4049be","borderColor":"#4049be"}}
            >
              {row.status}
            </Button>        
          );
        } else if(row.status === "Progress"){
          return (
            <Button
              variant="outline-primary"
              size="sm"
              style={{"color" : "white","background" : "#be4087","borderColor":"#be4087"}}
            >
              {row.status}
            </Button>                    
          )
        } else if(row.status === "Rejected"){
            return (
              <Button
                variant="outline-primary"
                size="sm"
                style={{"color" : "white","backgroundColor":"#cf1035","borderColor":"#cf1035"}}
              >
                {row.status}
              </Button>                    
            )
          } else if(row.status === "Success"){
            return (
              <Button
                variant="outline-primary"
                size="sm"
                style={{"color" : "white","backgroundColor":"#23bf2f","borderColor":"#23bf2f"}}
              >
                {row.status}
              </Button>                    
            )
          }
        else{
            return (
                <Button
                  variant="outline-primary"
                  size="sm"
                  style={{"color" : "white","backgroundColor":"#23a8bf","borderColor":"#23a8bf"}}
                >
                  {row.status}
                </Button>                    
              )
        }
      },
    isFilterable: true    
  }
];
function statusFormatter(cell, row) {
    let backgroundColor = 'lightgray';
    if (cell === 'processed') {
      backgroundColor = 'lightgreen';
    } else if (cell === 'inactive') {
      backgroundColor = 'pink';
    }
  
    return <span style={{ backgroundColor, color: 'white', padding: '5px' }}>{cell}</span>;
  }

export default function DataTable() {
  return (
    <DatatableWrapper
      body={TABLE_BODY}
      headers={STORY_HEADERS}
      classes={{
        table: "table-striped table-hover custom-table"
      }}
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: 10,
          options: [5, 10, 15, 20]
        }
      }}
    >

      <Row className="mb-4 p-2">
        <Col
          xs={12}
          lg={4}
          className="d-flex flex-col justify-content-start align-items-start"
        >
          <PaginationOptions />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
        >
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Filter />
        </Col>
      </Row>
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
      <Row className="mb-4 p-2">
        <Col
          xs={12}
          lg={4}
          className="d-flex flex-col justify-content-start align-items-start"
        >
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
        >
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Pagination />
        </Col>
      </Row>      
    </DatatableWrapper>
  );
}
