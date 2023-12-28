import React, { useEffect } from 'react'
import { titleDescription } from '../../config/Config';
import { Table } from 'react-bootstrap';
import SearchIcon from "@mui/icons-material/Search";
import ReplayIcon from "@mui/icons-material/Replay";

const UniLevel = (props: any) => {
    useEffect(() => {
        document.title = `${props.pageTitle} | ${titleDescription}`;
    });
    return (
        <main>
            <div className="uni-level-outer">
                <div className="coustom_container">
                    <div className="level_inner">
                        <div className="top_section_unilevel">
                            <p className='level_open'>Level Open: <span>0</span></p>
                            <p className='level_open'>Level Bonus Earned: <span>0.00</span></p>
                            <select className="form-control">
                                <option value="0">Level</option>
                                <option value="1">All</option>
                                <option value="2">Level 1</option>
                                <option value="3">Level 2</option>
                                <option value="4">Level 3</option>
                            </select>
                            <div className="date">
                                <span>From:</span>   <input type='date' placeholder='' />
                            </div>
                            <div className="date">
                                <span>To:</span>   <input type='date' placeholder='' />
                            </div>

                            <div className="form-btn">

                                <button className="searchicons">
                                    <SearchIcon />
                                </button>
                                <button className="searchicons">
                                    <ReplayIcon />
                                </button>
                            </div>
                        </div>
                        <div className="table_section">
                            <div className="scrolling_table">
                                <div className="scroll_under">
                                    <Table className="support_table">
                                        <thead>
                                            <tr className="table_heading_row">
                                                <th className="table_heading">Date</th>
                                                <th className="table_heading">Description</th>


                                                <th className="table_heading">Country</th>
                                                <th className="table_heading">Level</th>
                                                <th className="table_heading">%</th>
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
                                                <td className="table_data">desc</td>


                                                <td className="table_data">Canada</td>
                                                <td className="table_data">1</td>
                                                <td className="table_data">4%</td>
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
                                                <td className="table_data">desc</td>


                                                <td className="table_data">Canada</td>
                                                <td className="table_data">1</td>
                                                <td className="table_data">4%</td>
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
                                                <td className="table_data">desc</td>


                                                <td className="table_data">Canada</td>
                                                <td className="table_data">1</td>
                                                <td className="table_data">4%</td>
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
                                                <td className="table_data">desc</td>


                                                <td className="table_data">Canada</td>
                                                <td className="table_data">1</td>
                                                <td className="table_data">4%</td>
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
                                                <td className="table_data">desc</td>


                                                <td className="table_data">Canada</td>
                                                <td className="table_data">1</td>
                                                <td className="table_data">4%</td>
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
                                                <td className="table_data">desc</td>


                                                <td className="table_data">Canada</td>
                                                <td className="table_data">1</td>
                                                <td className="table_data">4%</td>
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

export default UniLevel