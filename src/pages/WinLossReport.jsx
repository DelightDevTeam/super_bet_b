import React from 'react'
import { Badge, Button, ButtonGroup, Form } from 'react-bootstrap'
import '../assets/css/history.css'
import { DataGrid } from '@mui/x-data-grid';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'gameName', headerName: 'Game Name', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },

    { field: 'openingBalance', headerName: 'Opening Balance', width: 130 },
    {
      field: 'closingBalance',
      headerName: 'Closing Balance',
      type: 'number',
      width: 120,
    },
    {
        field: 'betAmount',
        headerName: 'Bet Amount',
        type: 'number',
        width: 120,
      },
      {
        field: 'returnAmount',
        headerName: 'Return Amount',
        type: 'number',
        width: 120,
      },
    {
      field: 'date',
      headerName: 'Date',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
      width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, gameName: 'Slot',status:'win', openingBalance: '10000', closingBalance: '20000',betAmount:10000,returnAmount:10000,date:new Date().toDateString() },
    { id: 2, gameName: 'Slot',status:'win', openingBalance: '10000', closingBalance: '20000',betAmount:10000,returnAmount:10000,date:new Date().toDateString() },
    { id: 3, gameName: 'Slot',status:'win', openingBalance: '10000', closingBalance: '20000',betAmount:10000,returnAmount:10000,date:new Date().toDateString() },
    { id: 4, gameName: 'Slot',status:'loss', openingBalance: '10000', closingBalance: '20000',betAmount:10000,returnAmount:10000,date:new Date().toDateString() },
    { id: 5, gameName: 'Slot', status:'win',openingBalance: '10000', closingBalance: '20000',betAmount:10000,returnAmount:10000,date:new Date().toDateString() },
    { id: 6, gameName: 'Slot',status:'win', openingBalance: '10000', closingBalance: '20000',betAmount:10000,returnAmount:10000,date:new Date().toDateString() },
   ];
  
const WinLossReportPage = () => {
  return (
    <div className='history pt-4 pb-5 px-3 px-sm-4' style={{overflowX:'hidden'}}>
      <div className="row">
      <Form.Group className='col-6 col-sm-4 pe-2 mt-3'  controlId="formBasicEmail">
        <Form.Label>Start Date</Form.Label>
        <Form.Control type="date"   />
       </Form.Group>
       <Form.Group  className='col-6 col-sm-4 pe-2 mt-3' controlId="formBasicEmail">
        <Form.Label>End Date</Form.Label>
        <Form.Control type="date"   />
       </Form.Group>
        <button  style={{height:'max-content'}} className="mx-auto mt-3 mt-sm-5  col-10 col-sm-4 col-xl-3 px-2 loginBtn py-1 px-3 rounded-3 fw-semibold">
            <small >Show Results</small>
        </button>
      </div>
      <div className=" historyContainer mb-5  mt-4 p-3 rounded-3 ">
        <div className="mb-4 d-flex flex-wrap flex-sm-nowrap align-items-center gap-4">
        <div style={{width:'max-content'}} className='py-1 px-2 rounded-3 border border-white d-flex flex-nowrap'>
            <small className="fw-semibold historyTitle">All</small>
            <Badge className='ms-2'  bg="secondary">
                <small>6</small>
            </Badge>
        </div>
      <ButtonGroup className="">
        <Button style={{border:'none'}} className='bg-white text-black d-flex flex-nowrap '>
            <small className="fw-semibold historyTitle">Win</small>
            <Badge className='ms-1 ms-sm-2'  bg="secondary">
                <small>8</small>
            </Badge>
        </Button>
        <Button style={{border:'none'}} className='bg-white text-black  d-flex flex-nowrap'>
            <small className="fw-semibold historyTitle">Loss</small>
            <Badge className='ms-1 ms-sm-2' bg="secondary">
                <small>5</small>
            </Badge>
        </Button>
       </ButtonGroup>
        </div>
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      </div>
    </div>
  )
}

export default WinLossReportPage
