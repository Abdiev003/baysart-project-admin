import React from "react";
import Input from "../Input";
import Button from "../Button/Button";
import Searchh from "../../assets/images/search.svg";
import Trash from "../../assets/images/trash.svg";

import Add from "../../assets/images/add.svg";

import "./addproduct.css";

const AddProduct = () => {
  return (
    <div className="flex">
      <div className="add-product-area">
        <div className="add-product-header">
          <Input
            width="224px"
            height="30px"
            placeholder="Search for products"
            icon={Searchh}
            type="text"
          />
          <img src={Trash} alt="" />
        </div>
        <div className="add-produtc-btn">
          <div className="btn-add">
            <Button
              width="135px"
              height="40px"
              borderRadius="8px"
              backgroundColor="#1C64F2"
              color="#F9FAFB"
              img={Add}
              text="Add product"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
