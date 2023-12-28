import React, { useEffect } from "react";
import { titleDescription } from "../../config/Config";
import { Table } from "react-bootstrap";
import pearl from "../../Assets/Image/pearl.webp";
import Sapphir from "../../Assets/Image/sapphire.webp";
import sapphire25 from "../../Assets/Image/sapphire_25.webp";
import Ruby from "../../Assets/Image/ruby.webp";
import emerald from "../../Assets/Image/emerald.webp";
import Diamond from "../../Assets/Image/diamond.webp";

const RankRoyalty = (props: any) => {
  useEffect(() => {
    document.title = `${props.pageTitle} | ${titleDescription}`;
  });

  return (
    <main>
      <div className="uni-level-outer">
        <div className="coustom_container">
          <div className="level_inner">
            <div className="top_section_unilevel cash_flow rank-royal">
              <h4 className="rank-royal">RANK ROYALTY: $10,000,000</h4>
              <div className="rank-head">
                <div className="rank-data">
                  <p>Rank Royalty Earned</p>
                  <h5>$0</h5>
                </div>
              </div>
            </div>
            <div className="table_section">
              <div className="scrolling_table">
                <div className="scroll_under">
                  <Table className="support_table">
                    <thead className="rank_table-head">
                      <tr className="table_heading_row">
                        <th className="table_heading">Icon</th>
                        <th className="table_heading">Rank</th>
                        <th className="table_heading">Rank Royalty</th>
                      </tr>
                    </thead>
                    <tbody className="rank_table-body">
                      <tr className="table_data_row">
                        <td className="table_data">
                          <div className="pic_text justi">
                            <img src={pearl} alt="pearl" />
                          </div>
                        </td>

                        <td className="table_data">Pearl</td>
                        <td className="table_data payment_fee">$0/$200</td>
                      </tr>
                      <tr className="table_data_row">
                        <td className="table_data">
                          <div className="pic_text justi">
                            <img src={Sapphir} alt="pearl" />
                          </div>
                        </td>

                        <td className="table_data">Sapphire</td>
                        <td className="table_data payment_fee">$0/$400</td>
                      </tr>
                      <tr className="table_data_row">
                        <td className="table_data">
                          <div className="pic_text justi">
                            <img src={sapphire25} alt="pearl" />
                          </div>
                        </td>
                        <td className="table_data">Sapphire 25</td>
                        <td className="table_data payment_fee">$0/$1,000</td>
                      </tr>
                      <tr className="table_data_row">
                        <td className="table_data">
                          <div className="pic_text justi">
                            <img src={Ruby} alt="pearl" />
                          </div>
                        </td>

                        <td className="table_data">Ruby</td>
                        <td className="table_data payment_fee">$0/$2,000</td>
                      </tr>
                      <tr className="table_data_row">
                        <td className="table_data">
                          <div className="pic_text justi">
                            <img src={emerald} alt="pearl" />
                          </div>
                        </td>

                        <td className="table_data">Emerald</td>
                        <td className="table_data payment_fee">$0/$4,000</td>
                      </tr>
                      <tr className="table_data_row">
                        <td className="table_data">
                          <div className="pic_text justi">
                            <img src={Diamond} alt="pearl" />
                          </div>
                        </td>

                        <td className="table_data">Diamond</td>
                        <td className="table_data payment_fee">$0/$10,000</td>
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
  );
};

export default RankRoyalty;
