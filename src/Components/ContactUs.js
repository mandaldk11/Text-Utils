import React from 'react'
import cimg from '../Images/cimg.jpg';
export default function ContactUs() {
    return (
        <>
            <div>
                <div className="card text-bg-dark ">
                    <img src={cimg} className="card-img" alt="..." height="400vh" />
                    <div className="card-img-overlay">
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <h3><b><i><u>Let's Start a Conversation !</u></i></b></h3>
            </div>
            <div className=" container">
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label container"><b>Enter your full Name :</b></label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-2 col-form-label container"><b>Enter your Email :</b></label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="mobile" className="col-sm-2 col-form-label container"><b>Enter your mob. no  :</b></label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="mobile" />
                    </div>
                </div>

                <div className="form-floating ">
                    <textarea className="textarea" placeholder="Ask your queries here" id="floatingTextarea2" style={{ height: "100px", width: "40vw" }}></textarea>

                </div>
                <button type="button" className="btn btn-primary">Submit</button>

            </div>

        </>
    )
}
