import React from "react";
import Profile from "../../assets/images/settingsprofile.svg";
import Instagram from "../../assets/images/instagram.svg";
import Gmail from "../../assets/images/gmail.svg";
import Git from "../../assets/images/git.svg";
import Facebook from "../../assets/images/facebookblack.svg";
import Mail from "../../assets/images/mail.svg";

import Button from "../../components/Button/Button";
import Select from "../../components/Select";
import Input from "../../components/Input";

import "./pages.css";
const Pages = () => {
  return (
    <div className="border-flex">
      <div className="settings-border">
        <div className="left-are">
          <div className="profile">
            <div className="img-are">
              <img src={Profile} alt="" />
            </div>
            <div className="profile-txt">
              <h3>Name Surname</h3>
              <h4>UI designer</h4>
            </div>
          </div>

          <div className="socila-account">
            <h4>Social Account</h4>
            <div className="facebook">
              <div className="fb-area">
                <img src={Facebook} alt="" />
                <label htmlFor="">Facebook</label>
              </div>
              <Button
                width="55px"
                height="28px"
                backgroundColor="#1C64F2"
                text="Connect"
                borderRadius="8px"
                color="#F9FAFB"
              />
            </div>
            <div className="instagram">
              <div className="inst-area">
                <img src={Instagram} alt="" />
                <label htmlFor="">Instagram</label>
              </div>
              <Button
                width="55px"
                height="28px"
                backgroundColor="#1C64F2"
                text="Connect"
                borderRadius="8px"
                color="#F9FAFB"
              />
            </div>
            <div className="gmail">
              <div className="gmail-area">
                <img src={Gmail} alt="" />
                <label htmlFor="">Gmail</label>
              </div>
              <Button
                width="67px"
                height="28px"
                backgroundColor="#E4E4E7"
                text="Disconnect"
                borderRadius="8px"
                color="#1F2A37"
              />
            </div>
            <div className="git">
              <div className="git-area">
                <img src={Git} alt="" />
                <label htmlFor="">Git</label>
              </div>
              <Button
                width="67px"
                height="28px"
                backgroundColor="#E4E4E7"
                text="Disconnect"
                borderRadius="8px"
                color="#1F2A37"
              />
            </div>
          </div>
        </div>
        <div className="right-area">
          <div className="infarmation">
            <h4>General Infromation</h4>
            <div className="flex">
              <div className="left-input-area">
                <label htmlFor="">First Name</label>
                <Input
                  width="224px"
                  height="30px"
                  borderRadius="10px"
                  placeholder="Simple Text"
                />
                <label htmlFor="">Surname</label>
                <Input
                  width="224px"
                  height="30px"
                  borderRadius="10px"
                  placeholder="Simple Text"
                />
                <label htmlFor="">First Organization</label>
                <Input
                  width="224px"
                  height="30px"
                  borderRadius="10px"
                  placeholder="Simple Text"
                />
                <label htmlFor="">Email</label>
                <Input
                  width="224px"
                  height="30px"
                  borderRadius="10px"
                  placeholder="Simple Text"
                  icon={Mail}
                  padding="9px 25px"
                />
                <label htmlFor="">Department</label>
                <Input
                  width="224px"
                  height="30px"
                  borderRadius="10px"
                  placeholder="Marketing"
                />
              </div>
              <div className="right-input-area">
                <label htmlFor="">Country</label>
                <Select />
                <label htmlFor="">Phone Number</label>
                <Input
                  width="224px"
                  height="30px"
                  borderRadius="10px"
                  placeholder="e.g +994 51 527 74 94"
                />
                <label htmlFor="">Adress</label>
                <Input
                  width="224px"
                  height="30px"
                  borderRadius="10px"
                  placeholder="e.g California"
                />
                <label htmlFor="">Zip/Postal code</label>{" "}
                <Input
                  width="224px"
                  height="30px"
                  borderRadius="10px"
                  placeholder="123456"
                />
                <label htmlFor="">City</label>
                <Input
                  width="224px"
                  height="30px"
                  borderRadius="10px"
                  placeholder="e.g Baku"
                />
              </div>
            </div>
            <div className="update">
              <Button
                width="61px"
                height="28px"
                backgroundColor="#1C64F2"
                color="#F9FAFB"
                borderRadius="8px"
                text="Uptade"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="password-padding">

      <div className="password-infarmation">
        <h4>Password Information</h4>
        <div className="password-flex">
          <div className="left">
            <label htmlFor="">Current password</label>
            <Input
              width="224px"
              height="30px"
              placeholder="Enter your current password"
              borderRadius="10px"
              padding="9px 10px"
            />
            <label htmlFor="">Confirm new password</label>
            <Input
              width="224px"
              height="30px"
              placeholder="Confirm your new password"
              borderRadius="10px"
              padding="9px 10px"
            />

            <div className="password-button-lef">
              <Button
                width="61px"
                height="28px"
                backgroundColor="#1C64F2"
                color="#F9FAFB"
                borderRadius="8px"
                text="Uptade"
              />
            </div>
          </div>
          <div className="right">
            <label htmlFor="">New password</label>
            <Input
              width="224px"
              height="30px"
              placeholder="Enter your new password"
              borderRadius="10px"
              padding="9px 10px"
            />
            <label htmlFor="">Password requirements:</label>
            <ul >
              <li> Ensure that these requirements are met:</li>
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>
                At least one lowercase character Inclusion of at least one
                special character, e.g., ! @ # ?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
};

export default Pages;
