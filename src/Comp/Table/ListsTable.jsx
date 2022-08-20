import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss";
const rows = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
];

const ListsTable = () => {
  return (
    < >
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 100}} aria-label="simple table">
          <TableHead >
            <TableRow >
              <TableCell   className="tableHead" >Tracking ID</TableCell>
              <TableCell className="tableHead">Product</TableCell>
              <TableCell className="tableHead">Customer</TableCell>
              <TableCell className="tableHead">Date</TableCell>
              <TableCell className="tableHead">Amount</TableCell>
              <TableCell  className="tableHead">Method</TableCell>
              <TableCell className="tableHead">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((i) => (
              <TableRow key={i.id}>
                <TableCell className="tableCell">#{i.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="ceilWrapper">
                  <img className="listImg" src={i.img} alt={i.product} />
                    {i.product}
                  </div>
                  </TableCell>
   
                <TableCell className="tableCell">{i.customer}</TableCell>
                <TableCell className="tableCell">{i.date}</TableCell>
                <TableCell className="tableCell">{i.amount}</TableCell>
                <TableCell className="tableCell">{i.method}</TableCell>
                <TableCell className="tableCell">
                  <div className={`status`}
                   style={{ color: ` ${i.status ==='Approved' ?  'green' :'rgb(216, 216, 13)' } `
                   , backgroundColor: ` ${i.status ==='Approved' ?  'rgba(19, 207, 19, 0.215)' :'rgba(248, 236, 12, 0.159)' } `  }}  >
                    {i.status}
                  </div>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListsTable;
