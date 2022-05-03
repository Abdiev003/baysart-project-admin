import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import AddProduct from "../../components/AddProduct";
import Modal from "../../components/Modal";

import "./product.css";
import { Button } from "bootstrap";

const Product = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const columns = [
    { field: "name", headerName: "Name", width: 225 },
    { field: "technology", headerName: "Technology", width: 225 },
    { field: "idProduct", headerName: "ID", width: 225 },
    { field: "price", headerName: "Price", width: 225 },
    {
      field: "",
      headerName: "",
      width: 225,
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          return alert(JSON.stringify(thisRow, null, 4));
        };

        return (
          <button
            onClick={() => {
              setModalShow(true);
            }}
            className="btn btn-primary table-btn"
          >
            Edit Button
          </button>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Snow",
      technology: "Jon",
      idProduct: 35,
      price: "10.00",
    },
    {
      id: 2,
      name: "Lannister",
      technology: "Cersei",
      idProduct: 42,
      price: "10.00",
    },
    {
      id: 3,
      name: "Lannister",
      technology: "Jaime",
      idProduct: 45,
      price: "10.00",
    },
    { id: 4, name: "Stark", technology: "Arya", idProduct: 16, price: "10.00" },
    {
      id: 5,
      name: "Targaryen",
      technology: "Daenerys",
      idProduct: 10,
      price: "10.00",
    },
    {
      id: 6,
      name: "Melisandre",
      technology: null,
      idProduct: 150,
      price: "10.00",
    },
    {
      id: 7,
      name: "Clifford",
      technology: "Ferrara",
      idProduct: 44,
      price: "10.00",
    },
    {
      id: 8,
      name: "Frances",
      technology: "Rossini",
      idProduct: 36,
      price: "10.00",
    },
    {
      id: 9,
      name: "Roxie",
      technology: "Harvey",
      idProduct: 65,
      price: "10.00",
    },
  ];
  return (
    <main className="product-main">
      <AddProduct />
      <div id="table" style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          columnBuffer={10}
        />
      </div>
      {modalShow && <Modal  closeModal={setModalShow} />}
    </main>
  );
};

export default Product;
