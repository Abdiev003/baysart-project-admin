import React from "react";
import Close from "../../assets/images/close.svg";
import Purle from "../../assets/images/purplelaptop.svg";
import Day from "../../assets/images/daylaptop.svg";
import Night from "../../assets/images/nightlaptop.svg";
import Modalclose from "../../assets/images/modalclose.svg";

import Input from "../Input";
import Button from "../Button/Button";
import styled from "styled-components";

import { FileUploader } from "react-drag-drop-files";

import "../Modal/modal.css";
const Modal = ({ closeModal }) => {
  return (
    <div className="position">
      <div className="modal-background">
        <div className="modal-header">
          <h4>Edit Product</h4>
          <img onClick={() => closeModal(false)} src={Close} alt="" />
        </div>
        <div className="modal-container">
          <div className="input-flex">
            <div className="product-name">
              <label htmlFor="">Product Name</label>
              <Input
                width="224px"
                height="30px"
                borderRadius="10px"
                placeholder="Simple Text"
              />
              <label htmlFor="">Brand</label>
              <Input
                width="224px"
                height="30px"
                borderRadius="10px"
                placeholder="Simple Text"
              />
            </div>
            <div className="category">
              <label htmlFor="">Category</label>
              <Input
                width="224px"
                height="30px"
                borderRadius="10px"
                placeholder="Simple Text"
              />
              <label htmlFor="">Price</label>
              <Input
                width="224px"
                height="30px"
                borderRadius="10px"
                placeholder="Simple Text"
              />
            </div>
          </div>
          <div className="modal-text-area">
            <label htmlFor="">Details</label>
            <textarea name="" value="" id="" cols="30" rows="10">
              Write text here ..
            </textarea>
          </div>
          <div className="modal-img-area">
            <div className="modal-img">
              <div className="close-boder">
                <img className="close" src={Modalclose} alt="" />
              </div>
              <img src={Purle} alt="" />
            </div>
            <div className="modal-img">
              <div className="close-boder">
                <img className="close" src={Modalclose} alt="" />
              </div>
              <img src={Day} alt="" />
            </div>
            <div className="modal-img">
              <div className="close-boder">
                <img className="close" src={Modalclose} alt="" />
              </div>
              <img src={Night} alt="" />
            </div>
          </div>
          <FileUploader
            classes="drag-drop-files"
            label="Drop files to upload"
            types={["JPG", "PNG"]}
          />
          <div className="mobal-btn">
            <Button
              width="59px"
              height="34px"
              backgroundColor="#1C64F2"
              color="#F9FAFB"
              borderRadius="8px"
              text="Save"
            />
            <Button
              width="113px"
              height="34px"
              backgroundColor="#E02424"
              color="#F9FAFB"
              borderRadius="8px"
              text="Delete Product"
              margin="0 0 0 36px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
