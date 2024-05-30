"use client";
import '../page.css';
import { useState, useEffect } from "react";
import { Badge, InputGroup, FormControl, Col, Container, Row, Spinner, FloatingLabel } from "react-bootstrap";
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import appData from '@/api/appData.json';
import styled from 'styled-components';
import DataTable from "react-data-table-component";

export default function Apps() {

  const appRows = appData["rows"];
  let tempRows = []

  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");

  const customStyles = {
    pagination: {
      style: {
        borderRadius: '0 0 20px 20px',
      }
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(tempRows);
      setPending(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);


  useEffect(() => {
    const filteredRows = appRows.filter(app => {
      const match = app["Application"].match(/<a [^>]*>(.*?)<\/a>/);
      const text = match ? match[1] : "";
      return text.toLowerCase().includes(search.toLowerCase());
    });
    setRows(filteredRows.map((app, index) => ({
      id: index,
      application: app["Application"],
      status: app["Status"],
      desc: app["Description and Cost"],
      vasp: app["VASP Educator Report"],
    })));
  }, [search]);

  const conditionalRowStyles = [
    {
      when: row => row.status == "Green",
      style: {
        backgroundColor: 'rgba(25, 135, 84, 0.7)',
        color: 'black',
      },
    },
    {
      when: row => row.status == "Yellow",
      style: {
        backgroundColor: 'rgba(255, 193, 7, 0.7)',
        color: 'black',
      },
    },
    {
      when: row => row.status == "Red",
      style: {
        backgroundColor: 'rgba(220, 53, 69, 0.7)',
        color: 'black',
      },
    }
  ]

  const headers = [
    {
      id: "application",
      name: "Application",
      selector: row => row.application,
      cell: row => (
        <div dangerouslySetInnerHTML={{ __html: row.application }}></div>
      ),
      sortable: true,
    },
    {
      id: "status",
      name: "Status",
      selector: row => row.status,
      sortable: true,
    },
    {
      id: "desc",
      name: "Description and Cost",
      selector: row => row.desc,
      sortable: true,
    },
    {
      id: "vasp",
      name: "VASP Educator Report",
      selector: row => row.vasp,
      cell: row => (
        <div dangerouslySetInnerHTML={{ __html: row.vasp }}></div>
      ),
      sortable: true,
    },

  ]

  function addRows() {
    appRows.map((app, index) => (
      tempRows.push(
        {
          id: index,
          application: app["Application"],
          status: app["Status"],
          desc: app["Description and Cost"],
          vasp: app["VASP Educator Report"],
        }
      )
    ));
  }
  addRows();

  return (
    <>
      <Container fluid className='pt-3'>
        <Container fluid className='p-4 pt-0 mb-3 rounded-3 bg-body-tertiary'>
          <h1 className="display-6"><b>Approved AMDSB Online Tools</b></h1>
          <p>
            The AMDSB Online Tools database changes frequently.
            <br />
            <span className="fw-bold">Please note:</span>{" "}
            An application may be approved for all platforms{" "}
            <Badge bg="secondary">IOS</Badge> <Badge bg="success">Chromebook</Badge> <Badge bg="secondary">O365</Badge> <Badge bg="info">Windows</Badge>
            {" "}
            However it may not be available for all platforms.
            <br />
            <span className="fw-bold">Staff, don't see your resource?</span> <a target="_blank" href="https://amdsb.topdesk.net/tas/public/login/saml">Request it</a>
          </p>
          <hr />
          <h3 className='fw-bold'>Legend</h3>
          <span className='align-top'><Badge bg="success" style={{ color: "white", minWidth: '60px' }}><h6 className='p-0 m-0'>Green</h6></Badge> Safe to Proceed</span>
          <br />
          <span className='align-top'><Badge bg="warning" style={{ color: "black", minWidth: '60px' }}><h6 className='p-0 m-0'>Green</h6></Badge> Safe to Proceed with Caution (Follow guidance in the risk report)</span>
          <br />
          <span className='align-top'><Badge bg="danger" style={{ minWidth: '60px' }}><h6 className='p-0 m-0'>Red</h6></Badge> Cannot be used within AMDSB</span>
        </Container>

        <Row className='d-flex flex-row-reverse pb-1'>
            <Col md="6" lg="4">
              <InputGroup data-bs-theme="light">
                <InputGroupText id="search-addon" className='rounded-start-4'>Search</InputGroupText>
                  <FormControl
                    className='rounded-end-4'
                    placeholder="Application"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={(e) => setSearch(e.target.value)}
                  />
              </InputGroup>
            </Col>
          </Row>
        <Container fluid className='rounded-4 bg-secondary-subtle p-3'>
          

          <DataTable
            className="data-table rounded-top-4 rounded-bottom-0 bg-body-tertiary"
            conditionalRowStyles={conditionalRowStyles}
            columns={headers}
            data={rows}
            progressPending={pending}
            progressComponent={<div className='text-center'><Spinner className='rounded-4' animation="border" variant="success" /></div>}
            pagination
            responsive
            customStyles={customStyles}
            id="appList" />
        </Container>
      </Container>


    </>
  );
}
