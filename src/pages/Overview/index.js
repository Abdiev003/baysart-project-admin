import React from "react";

import InputAuth from "../../components/InputAuth";
import Button from "../../components/Button/Button";

import { FileUploader } from "react-drag-drop-files";

import "./overview.css";

const Overview = () => {
  return (
    <main className="overview">

      <div className="overview-border">
     
        <h4>Edit Shop Info</h4>

        <div className=" overview-flex">
          <div className="overview-shop">
            <label htmlFor="">Shop Name </label>
            <InputAuth
              width="418px"
              height="12px"
              placeholder="Simple Text"
              display="none"
            />
            <label className="uplad" htmlFor="">
              Upload İmage for Profile
            </label>
            <FileUploader label="Drop files to upload" types={["JPG", "PNG"]} />
          </div>

          <div className="overview-contact">
            <label htmlFor="">
              <strong> Contact</strong>
              <b>(* Country code is must Like for BD 880)</b>
            </label>
            <InputAuth
              width="584px"
              height="12px"
              display="none"
              placeholder="123456"
              padding={"17px"}
            />
            <h4>Upload Banner</h4>
            <FileUploader
              classes="drag-drop-files"
              label="Drop files to upload"
              types={["JPG", "PNG"]}
            />
          </div>
        </div>
        <div className="text-area">
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="10"
            value="Write text here .."
          >
            =
          </textarea>
        </div>
        <div className="overview-btn">
          <Button
            width="59px"
            height="34px"
            borderRadius="8px"
            backgroundColor="#1C64F2"
            color="#F9FAFB"
            text="Save"
            margin="0 20px"
          />
          <Button
            width="68px"
            height="34px"
            borderRadius="8px"
            backgroundColor="#E02424"
            color="#F9FAFB"
            text="Delete "
          />
       
      </div>
      </div>
    </main>
  );
};

export default Overview;
