import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

interface props{
  showAlert:(arg:string)=>void
}
const ShowData : React.FC<props> = ({ showAlert })=> {
  let [data, setData] = useState([]);
  let history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userDetails") === null) {
      showAlert("Please sign up first");
      history("/");
      return;
    }
    const userDetails = JSON.parse(localStorage.getItem("userDetails") || "");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "userId", headerName: "User ID", width: 90 },
    { field: "title", headerName: "Title", width: 180 },
    { field: "body", headerName: "Body", width: 950 },
  ];
  return (
    <>
      <div className="container">
        
      </div>
      <Box sx={{ height: 400, width: "80%" }}>
        <Typography className="container" fontSize={30}>
          Data
        </Typography>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};

export default ShowData;
