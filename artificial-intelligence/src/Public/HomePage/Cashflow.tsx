import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import SearchIcon from "@mui/icons-material/Search";
import ReplayIcon from "@mui/icons-material/Replay";
import { titleDescription } from '../../config/Config';
const Cashflow = (props: any) => {
    useEffect(() => {
        document.title = `${props.pageTitle} | ${titleDescription}`;
    });
    return (
        <main>
            <div className="uni-level-outer">
                <div className="coustom_container">
                    <div className="level_inner">
                        <div className="top_section_unilevel cash_flow">
                            <h4>
                                CASHFLOW
                            </h4>
                            <p className='level_open'>Total: <span>$0</span></p>

                        </div>
                        <div className="table_section">
                            <div className="scrolling_table">
                                <div className="scroll_under">
                                    <Table className="support_table">
                                        <thead>
                                            <tr className="table_heading_row">
                                                <th className="table_heading">Date</th>

                                                <th className="table_heading">Generated</th>
                                                <th className="table_heading">Credited</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table_data_row">
                                                <td className="table_data">
                                                    <div className="pic_text">

                                                        20-2-2023
                                                    </div>
                                                </td>

                                                <td className="table_data">generate</td>
                                                <td className="table_data payment_fee">
                                                    credited
                                                </td>
                                            </tr>
                                            <tr className="table_data_row">
                                                <td className="table_data">
                                                    <div className="pic_text">

                                                        20-2-2023
                                                    </div>
                                                </td>

                                                <td className="table_data">generate</td>
                                                <td className="table_data payment_fee">
                                                    credited
                                                </td>
                                            </tr>
                                            <tr className="table_data_row">
                                                <td className="table_data">
                                                    <div className="pic_text">

                                                        20-2-2023
                                                    </div>
                                                </td>

                                                <td className="table_data">generate</td>
                                                <td className="table_data payment_fee">
                                                    credited
                                                </td>
                                            </tr>
                                            <tr className="table_data_row">
                                                <td className="table_data">
                                                    <div className="pic_text">

                                                        20-2-2023
                                                    </div>
                                                </td>

                                                <td className="table_data">generate</td>
                                                <td className="table_data payment_fee">
                                                    credited
                                                </td>
                                            </tr>
                                            <tr className="table_data_row">
                                                <td className="table_data">
                                                    <div className="pic_text">

                                                        20-2-2023
                                                    </div>
                                                </td>

                                                <td className="table_data">generate</td>
                                                <td className="table_data payment_fee">
                                                    credited
                                                </td>
                                            </tr>
                                            <tr className="table_data_row">
                                                <td className="table_data">
                                                    <div className="pic_text">

                                                        20-2-2023
                                                    </div>
                                                </td>

                                                <td className="table_data">generate</td>
                                                <td className="table_data payment_fee">
                                                    credited
                                                </td>
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

export default Cashflow