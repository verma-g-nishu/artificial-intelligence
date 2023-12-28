import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import scannerimg from "../../Assets/Image/qrcode-88.png";
import FileCopyIcon from '@mui/icons-material/FileCopy';


const Deposit = () => {
  return (
    <main>
      <div className="deposit-section">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="deposit-all-data">
                <div className="deposit-links">
                  <Link to="#">USDT - TRC20</Link>
                  <Link to="#" className="linking">
                    USDT - BEP/BSC
                  </Link>
                </div>
                <p>
                  Sending wrong tokens or to the wrong <br />network, will result in a
                  loss of fund
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="deposit-scanner">
                <h5>USDT -TRC20</h5>
                <div className="scanner-pic">
                  <img src={scannerimg} alt="scanner" />
                </div>
                <div className="link-copy">
                <input type='text' value="https://web.gtccapital.com/auth/signup/" disabled></input>
                <div className="icon-copy">
                <FileCopyIcon />
                </div>                
                </div>
                <p>Send only USDT - TRC20 to your address</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Deposit;
