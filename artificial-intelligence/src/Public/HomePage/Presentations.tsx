import React, { useEffect } from 'react'
import { titleDescription } from '../../config/Config';
import { logo } from '../../config/Config';
import england from '../../Assets/Image/england.webp';
import DownloadIcon from '@mui/icons-material/Download';
const Presentations = (props: any) => {
    useEffect(() => {
        document.title = `${props.pageTitle} | ${titleDescription}`;
    });
    return (
        <main>
            <div className="presentation_main">
                <div className="coustom_container">
                    <div className="present_top_sec">
                        <h4>
                            PRESENTATIONS
                        </h4>

                    </div>
                    <div className="present_inner">
                        <div className="row present_row">
                            <div className="col-lg-4 col-md-6">
                                <div className="card present_card">
                                    <div className="card-body">
                                        <div className="image_logo">
                                            <img src={logo} className='logo_sec' alt="logo" />
                                            <DownloadIcon className='down_icon' />
                                        </div>
                                        <div className="country_sec">
                                            <h6>ENGLAND</h6>
                                            <img src={england} className='logo_sec' alt="logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card present_card">
                                    <div className="card-body">
                                        <div className="image_logo">
                                            <img src={logo} className='logo_sec' alt="logo" />
                                            <DownloadIcon className='down_icon' />
                                        </div>
                                        <div className="country_sec">
                                            <h6>ENGLAND</h6>
                                            <img src={england} className='logo_sec' alt="logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card present_card">
                                    <div className="card-body">
                                        <div className="image_logo">
                                            <img src={logo} className='logo_sec' alt="logo" />
                                            <DownloadIcon className='down_icon' />
                                        </div>
                                        <div className="country_sec">
                                            <h6>ENGLAND</h6>
                                            <img src={england} className='logo_sec' alt="logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card present_card">
                                    <div className="card-body">
                                        <div className="image_logo">
                                            <img src={logo} className='logo_sec' alt="logo" />
                                            <DownloadIcon className='down_icon' />
                                        </div>
                                        <div className="country_sec">
                                            <h6>ENGLAND</h6>
                                            <img src={england} className='logo_sec' alt="logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card present_card">
                                    <div className="card-body">
                                        <div className="image_logo">
                                            <img src={logo} className='logo_sec' alt="logo" />
                                            <DownloadIcon className='down_icon' />
                                        </div>
                                        <div className="country_sec">
                                            <h6>ENGLAND</h6>
                                            <img src={england} className='logo_sec' alt="logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card present_card">
                                    <div className="card-body">
                                        <div className="image_logo">
                                            <img src={logo} className='logo_sec' alt="logo" />
                                            <DownloadIcon className='down_icon' />
                                        </div>
                                        <div className="country_sec">
                                            <h6>ENGLAND</h6>
                                            <img src={england} className='logo_sec' alt="logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Presentations