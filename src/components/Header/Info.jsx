import React from "react";
import { Container,Row ,Col} from "react-bootstrap";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Info = () => {
  return (
    <Container fluid>
      <Row>
       
      
      < Col xs={12} className="information d-flex justify-content-between    ">
        <div className="icons        ">
          <ul className=" d-flex align-items-center  ">
            <li className=" ">
              <a href="#">
                
                <FacebookOutlinedIcon className="icon" /> 
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedInIcon /> 
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon /> 
              </a> 
            </li>
            <li>
              <a href="#">
               
                <EmailOutlinedIcon /> 
              </a>
            </li>
          </ul>
        </div>

        <div className="texts  ">
          <ul className="d-flex ">
            <li>
              <a href="">Introduction</a>
            </li>
            <li>
              <a href="">. Partner Incentives</a>
            </li>
            <li>
              <a href="">. Promotion</a>
            </li>
            <li>
              <a href="">. Contact</a>
            </li>
            <li>
              <a href=""> . Frequently asked questions</a>
            </li>
          </ul>
        </div>
      </Col>
      
      </Row>
    </Container>
  );
};

export default Info;
