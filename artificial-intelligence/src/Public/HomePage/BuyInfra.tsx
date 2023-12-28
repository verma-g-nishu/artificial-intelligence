import React, { useEffect, useState } from "react";
import { titleDescription } from "../../config/Config";
import christmas_tree from '../../Assets/Image/christmas_tree.png';
import profession1 from '../../Assets/Image/profession1.png';
import premium from '../../Assets/Image/premium.png';
import premium_1 from '../../Assets/Image/premium_1.png';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
const BuyInfra = (props: any) => {
    useEffect(() => {
        document.title = `${props.pageTitle} | ${titleDescription}`;
    });
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <>
            <main>
                <div className="buy_section">
                    <div className="coustom_container">
                        <div className="buy_top_sec">
                            <h4>
                                BUY INFRA
                            </h4>
                            <div className="top_btn">
                                <button className="button_style">Myself</button>
                                <button className="button_style">Downline</button>
                            </div>
                        </div>

                        <div className="row cards_sec">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card christmas_card mb-4">

                                    <div className="card-body">
                                        <img src={christmas_tree} className="christmas" />
                                        <h3>Christmas Infra</h3>
                                        <div className="card_bottom_Sec">
                                            <div className="inc_section">
                                                <h6>INC</h6>
                                                <h6>+5%</h6>
                                            </div>
                                            <div className="inc_section">
                                                <h6>MAX EARN</h6>
                                                <h6>700%</h6>
                                            </div>
                                            <div className="buy-section">
                                                <p className="select_amount">

                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Select Amount</option>
                                                        <option value="1">$10,000</option>
                                                        <option value="2">$15,000</option>
                                                        <option value="3">$20,000</option>
                                                    </select>
                                                </p>
                                                <button className="button_style mt-3 w-100" onClick={onOpenModal}>BUY NOW</button>
                                            </div>


                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card christmas_card mb-4">

                                    <div className="card-body">
                                        <img src={profession1} className="christmas" />
                                        <h3>Professional</h3>
                                        <div className="card_bottom_Sec">
                                            <div className="inc_section">
                                                <h6>INC</h6>
                                                <h6>+7%</h6>
                                            </div>
                                            <div className="inc_section">
                                                <h6>MAX EARN</h6>
                                                <h6>600%</h6>
                                            </div>
                                            <div className="buy-section">
                                                <p className="select_amount">

                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Select Amount</option>
                                                        <option value="1">$10,000</option>
                                                        <option value="2">$20,000</option>
                                                        <option value="3">$30,000</option>
                                                    </select>
                                                </p>
                                                <button className="button_style mt-3 w-100 " onClick={onOpenModal}>BUY NOW</button>
                                            </div>


                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card christmas_card mb-4">

                                    <div className="card-body">
                                        <img src={premium} className="christmas" />
                                        <h3>Advanced</h3>
                                        <div className="card_bottom_Sec">
                                            <div className="inc_section">
                                                <h6>INC</h6>
                                                <h6>+4%</h6>
                                            </div>
                                            <div className="inc_section">
                                                <h6>MAX EARN</h6>
                                                <h6>400%</h6>
                                            </div>
                                            <div className="buy-section">
                                                <p className="select_amount">

                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Select Amount</option>
                                                        <option value="1">$10,000</option>
                                                        <option value="2">$25,000</option>
                                                        <option value="3">$30,000</option>
                                                    </select>
                                                </p>
                                                <button className="button_style w-100 mt-3" onClick={onOpenModal}>BUY NOW</button>
                                            </div>


                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card christmas_card mb-4">

                                    <div className="card-body">
                                        <img src={premium_1} className="christmas" />
                                        <h3>Premium</h3>
                                        <div className="card_bottom_Sec">
                                            <div className="inc_section">
                                                <h6>INC</h6>
                                                <h6>+9%</h6>
                                            </div>
                                            <div className="inc_section">
                                                <h6>MAX EARN</h6>
                                                <h6>400%</h6>
                                            </div>
                                            <div className="buy-section">
                                                <p className="select_amount">

                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Select Amount</option>
                                                        <option value="1">$10,000</option>
                                                        <option value="2">$15,000</option>
                                                        <option value="3">$25,000</option>
                                                    </select>
                                                </p>
                                                <button className="button_style w-100 mt-3" onClick={onOpenModal}>BUY NOW</button>
                                            </div>


                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Modal open={open} onClose={onCloseModal} center>
                <p className="modal_data mb-3">
                    <h6>Price</h6>
                    <h6>$6,000</h6>
                </p>
                <p className="modal_data mb-3">
                    <h6>Available</h6>
                    <h6>$68,000</h6>
                </p>
                <p className="modal_data mb-3">
                    <h6>Rebuy</h6>
                    <h6>$22,000</h6>
                </p>
                <p className="need">Need 3,888.50 in wallet to make a purchase.</p>
                <div className="check_input">
                    <input type="checkbox" placeholder="" /><label>Use Rebuy Amount</label>

                </div>
                <p className="mt-3 mb-4">(20% of Infra Price can be used from Rebuy)</p>
                <a href="/deposit" className="button_style load_btn d-flex justify-content-center">Load eUSD</a>


            </Modal>
        </>

    );
};

export default BuyInfra;
