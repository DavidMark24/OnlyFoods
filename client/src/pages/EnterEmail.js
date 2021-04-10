import React from "react";
import resetPassword from "../images/resetPassword.svg";
import resetButton from "../images/resetButton.svg";
import Footer from "../components/Footer";

function EnterEmail() {
    return (
        <div className="container">
            <div className="row spacing">

            </div>
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-8 shadow-lg px-5 pt-5 pb-3 my-5 tan_bg rounded">
                    <div className="logo">
                        <img src={resetPassword} alt="LoginLogo" height="100" />
                    </div>
                    <form className="login mt-5">
                        <div className="input-group input-group-lg mt-4 ">
                            <input type="email" className="form-control two-right-round-corners" aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm" id="email-input" placeholder="Enter Your Email" required />
                        </div>
                        <div style={{display: "none"}} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg"></span>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-secondary m-3 mt-4 h3 btn-xl"><img src={resetButton} width='100' alt="loginbtn" /></button>
                        </div>
                    </form>
                    <br />
                </div>
                <div className="col-2">

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EnterEmail;