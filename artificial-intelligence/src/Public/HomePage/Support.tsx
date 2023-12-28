import React, { useEffect } from 'react'
import { titleDescription } from '../../config/Config';
import drag_file from '../../Assets/Image/darg_file.png';
import ques from '../../Assets/Image/ques.png';
import support from '../../Assets/Image/support.jpeg';
const Support = (props: any) => {
    useEffect(() => {
        document.title = `${props.pageTitle} | ${titleDescription}`;
    });
    return (
        <main>
            <div className="support_main">
                <div className="coustom_container">
                    <div className="support_inner">
                        <div className="top_head_sec">
                            <h4>SUPPORT</h4>

                        </div>
                        <div className="support-section">
                            <p className="select_reason">

                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Question about node</option>
                                    <option value="1">Please specify your reason</option>
                                    <option value="2">Question about income</option>
                                    <option value="3">Others</option>
                                </select>
                            </p>
                            <div className="desc">
                                <textarea rows={4} placeholder='Description' className='text_sec' />
                            </div>


                        </div>

                        <div className="row support_row">
                            <div className="col-lg-7">
                                <div className="right_sec_support">
                                    <p>Attach upto 5 files<br />
                                        The file size should not exceed 4 MB<br />
                                        File format .png, jpeg, jpg</p>
                                    <h4>24x7 Live</h4>
                                    <img src={ques} alt="question" className='question' />
                                </div>

                            </div>
                            <div className="col-lg-5">
                                <div className="upload_document">

                                    <div className="main">

                                        <div className="upload-input">
                                            <p>Upload your files here</p>
                                            <label htmlFor="upload"><span><img
                                                src={drag_file}
                                                alt="card" /></span>
                                                <span><input type="file" id="upload" style={{ display: "none" }} /></span>
                                            </label>
                                            <label className="button_style browse" htmlFor="upload">Browse Files</label>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="send_sec">
                            <button className='button_style send'>Send</button>
                        </div>


                    </div>
                </div>
            </div>
        </main>
    )
}

export default Support