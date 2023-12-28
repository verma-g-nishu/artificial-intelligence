import React, { useEffect } from "react";
import { titleDescription } from "../../config/Config";
import { Table } from "react-bootstrap";

const PayHistory = (props: any) => {

    useEffect(() => {
        document.title = `${props.pageTitle} | ${titleDescription}`;
      });

  return (
    <main>
    <div className="uni-level-outer">
      <div className="coustom_container">
        <div className="level_inner">
          <div className="top_section_unilevel cash_flow">
            <h4>PAYOUT HISTORY</h4>           
          </div>
          <div className="table_section">
            <div className="scrolling_table">
              <div className="scroll_under">
                <Table className="support_table">
                  <thead>
                    <tr className="table_heading_row">
                      <th className="table_heading">Date</th>
                      <th className="table_heading">Wallet</th>
                      <th className="table_heading">Amount</th>
                      <th className="table_heading">Address</th>
                      <th className="table_heading">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table_data_row">
                      <td className="table_data">
                        <div className="pic_text">20-Nov-2023</div>
                      </td>

                      <td className="table_data">$1.28(eUSD)</td>
                      <td className="table_data payment_fee">Uni-Level</td>
                      <td className="table_data">
                        Level 6 - Rajeshkumar Gosain
                      </td>
                      <td className="table_data">$1.28(eUSD)</td>
                    </tr>
                    <tr className="table_data_row">
                      <td className="table_data">
                        <div className="pic_text">08-Nov-2023</div>
                      </td>

                      <td className="table_data">$1.28(eUSD)</td>
                      <td className="table_data payment_fee">Uni-Level</td>
                      <td className="table_data">Level 6 - Modern Group</td>
                      <td className="table_data">$1.28(eUSD)</td>
                    </tr>
                    <tr className="table_data_row">
                      <td className="table_data">
                        <div className="pic_text">23-Oct-2023</div>
                      </td>

                      <td className="table_data">$4(eUSD) </td>
                      <td className="table_data payment_fee">Uni-Level</td>
                      <td className="table_data">Level 6 - Vinod Jain</td>
                      <td className="table_data">$1.28(eUSD)</td>
                    </tr>
                    <tr className="table_data_row">
                      <td className="table_data">
                        <div className="pic_text">20-Oct-2023</div>
                      </td>

                      <td className="table_data">$16(eUSD)</td>
                      <td className="table_data payment_fee">Uni-Level</td>
                      <td className="table_data">Level 7 - Renu verma</td>
                      <td className="table_data">$1.28(eUSD)</td>
                    </tr>
                    <tr className="table_data_row">
                      <td className="table_data">
                        <div className="pic_text">20-Oct-2023</div>
                      </td>

                      <td className="table_data">$8(eUSD)</td>
                      <td className="table_data payment_fee">Uni-Level</td>
                      <td className="table_data">Level 8 - PARDEEP SINGH</td>
                      <td className="table_data">$1.28(eUSD)</td>
                    </tr>
                    <tr className="table_data_row">
                      <td className="table_data">
                        <div className="pic_text">20-Oct-2023</div>
                      </td>

                      <td className="table_data">$4(eUSD)</td>
                      <td className="table_data payment_fee">Uni-Level</td>
                      <td className="table_data">Level 7 - VISHAVJEET SINGH</td>
                      <td className="table_data">$1.28(eUSD)</td>
                    </tr>
                    <tr className="table_data_row">
                      <td className="table_data">
                        <div className="pic_text">20-Nov-2023</div>
                      </td>

                      <td className="table_data">$4(eUSD)</td>
                      <td className="table_data payment_fee">Uni-Level</td>
                      <td className="table_data">
                      Level 7 - MANMOHAN SINGH
                      </td>
                      <td className="table_data">$1.28(eUSD)</td>
                    </tr>
                    <tr className="table_data_row">
                      <td className="table_data">
                        <div className="pic_text">21-Oct-2023</div>
                      </td>

                      <td className="table_data">$4(eUSD)</td>
                      <td className="table_data payment_fee">Uni-Level</td>
                      <td className="table_data">
                      Level 6 - RANJIT SINGH
                      </td>
                      <td className="table_data">$1.28(eUSD)</td>
                    </tr>                    
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default PayHistory;