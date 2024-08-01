import React, { useState } from "react";
import { Badge, Button, ButtonGroup, Form } from "react-bootstrap";
import "../assets/css/history.css";
import { DataGrid } from "@mui/x-data-grid";
import useFetch from "../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";

const deposits = [
  { field: "id", headerName: "No", width: 150},
  { field: "payment_type", headerName: "Payment Method", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
  { field: "refrence_no", headerName: "Transaction No", width: 150 },
  // { field: "account_no", headerName: "Account No", width: 150 },
  {
    field: "amount",
    headerName: "Amount (MMK)",
    type: "number",
    width: 150,
  },
  {
    field: "datetime",
    headerName: "Date",
    width: 180,
  },
];
const deposits_mm = [
  { field: "id", headerName: "နံပါတ်", width: 150},
  { field: "payment_type", headerName: "ဘဏ်", width: 150 },
  { field: "status", headerName: "အခြေအနေ", width: 150 },
  { field: "refrence_no", headerName: "ငွေလွှဲနံပါတ်", width: 150 },
  // { field: "account_no", headerName: "Account No", width: 150 },
  {
    field: "amount",
    headerName: "ပမာဏ (ကျပ်)",
    type: "number",
    width: 150,
  },
  {
    field: "datetime",
    headerName: "နေ့ရက်",
    width: 180,
  },
];

const withdraws = [
  { field: "id", headerName: "No", width: 150},
  { field: "account_name", headerName: "Account Name", width: 150 },
  { field: "account_no", headerName: "Account No", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
  {
    field: "amount",
    headerName: "Amount (MMK)",
    type: "number",
    width: 150,
  },
  {
    field: "datetime",
    headerName: "Date",
    width: 180,
  },
];
const withdraws_mm = [
  { field: "id", headerName: "နံပါတ်", width: 150},
  { field: "account_name", headerName: "အကောင့်နာမည်", width: 150 },
  { field: "account_no", headerName: "အကောင့်နံပါတ်", width: 150 },
  { field: "status", headerName: "အခြေအနေ", width: 150 },
  {
    field: "amount",
    headerName: "ပမာဏ (ကျပ်)",
    type: "number",
    width: 150,
  },
  {
    field: "datetime",
    headerName: "နေ့ရက်",
    width: 180,
  },
];

const HistoryPage = () => {
  const {data: deposit} = useFetch(BASE_URL + "/transaction/deposit-log");
  const {data: withdraw} = useFetch(BASE_URL + "/transaction/withdraw-log");
  const [show, setShow] = useState(false);
  // console.log(deposit);
  const language = localStorage.getItem("lan");

  return (
    <div
      className="history pt-4 pb-5 px-3 px-sm-4"
      style={{ overflowX: "hidden" }}
    >
      <div className="row">
        {/* <Form.Group
          className="col-6 col-sm-4 pe-2 mt-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group
          className="col-6 col-sm-4 pe-2 mt-3"
          controlId="formBasicEmail"
        >
          <Form.Label>End Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group> */}
        {/* <button
          style={{ height: "max-content" }}
          className="mx-auto mt-3 mt-sm-5  col-10 col-sm-4 col-xl-3 px-2 loginBtn py-1 px-3 rounded-3 fw-semibold"
        >
          <small>Show Results</small>
        </button> */}
      </div>
      <div className=" historyContainer mb-5  mt-4 p-3 rounded-3 ">
        <div className="mb-4 d-flex flex-wrap flex-sm-nowrap align-items-center gap-4">
            <Button
              style={{ border: "none" }}
              className="bg-white text-black d-flex flex-nowrap"
              onClick={() => setShow(false)}
            >
              <small className="fw-semibold historyTitle">{language === "english" ? "Deposit" : "ငွေသွင်း"}</small>
              <Badge className="ms-1 ms-sm-2" bg="secondary">
                <small>{deposit && deposit.length}</small>
              </Badge>
            </Button>
            <Button
              style={{ border: "none" }}
              className="bg-white text-black  d-flex flex-nowrap"
              onClick={() => setShow(true)}
            >
              <small className="fw-semibold historyTitle">{language === "english" ? "Withdraw" : "ငွေထုတ်"}</small>
              <Badge className="ms-1 ms-sm-2" bg="secondary">
                <small>{withdraw && withdraw.length}</small>
              </Badge>
            </Button>
        </div>
        {!show && (
          <DataGrid
            rows={deposit}
            columns={language === "english" ? deposits : deposits_mm}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        )}
        {show && (
          <DataGrid
            rows={withdraw}
            columns={language === "english" ? withdraws : withdraws_mm}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
