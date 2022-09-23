import React from 'react'
import simg from '../Images/simg.jpg';
import simg2 from '../Images/simg2.jpg';
import simg3 from '../Images/simg3.jpg';
export default function Services() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide container my-3" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src={simg} className="d-block w-100" alt="..." height="400px" />
                    </div>
                    <div className="carousel-item">
                        <img src={simg2} className="d-block w-100" alt="..." height="400px" />
                    </div>
                    <div className="carousel-item">
                        <img src={simg3} className="d-block w-100" alt="..." height="400px" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <!-- first card --> */}
            <div class="container my-4">
                <div class="card mb-3" style={{ maxWidth: "840px" }}>
                    <div class="row g-0">
                        <div class="col-md-4 d-flex align-items-center justify-content-center">
                            <img src={simg} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"><u> <i>Our Facilities</i></u></h5>
                                <p class="card-text">
                                    <ul>
                                        <li>Analysis your text and manipulate according to the way you want</li>
                                        <li>Convert text in uppercase,lowercase,copy the text, remove extraa space bwtween text etc these are the some of our facilities</li>
                                        <li> <b><i><u></u> 100% free & Online</i></b></li>
                                        <li> Helps you to find desireable text </li>
                                        <li>simple and user friendly</li>
                                    </ul>
                                </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                  {/* <!-- second card --> */}
                  <div class="container my-4">
                    <div class="card mb-3" style={{ maxWidth: "840px" }}>
                        <div class="row g-0">
                            <div class="col-md-4 d-flex align-items-center justify-content-center">
                                <img src={simg3} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"><u> <i>What is text Analysis ?</i></u></h5>
                                    <p class="card-text">Text analysis is the process of using computer systems to read and understand human-written text for business insights. Text analysis software can independently classify, sort, and extract information from text to identify patterns, relationships, sentiments, and other actionable knowledge. You can use text analysis to efficiently and accurately process multiple text-based sources such as emails, documents, social media content, and product reviews, like a human would</p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- third card --> */}
                <div class="card mb-3 " style={{ maxWidth: "840px" }}>
                    <div class="row g-0">
                        <div class="col-md-4 order-md-2 d-flex align-items-center justify-content-center">
                            <img src={simg2} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8 ">
                            <div class="card-body">
                                <h5 class="card-title"><u> <i>Estabilishment of text utils</i></u></h5>
                                <p class="card-text">This is a text analysis website founded by<u> Mr.Dharmendra mandal
                                    Since aug 2022</u> .This will help you to shape your text in desiarable or manipulated form and
                                    don't be afraid we are here for you .
                                </p>
                                <p>This website is design and its function is used to tackle modern challenges during manipulate your text and its a spa and faster to use.
                                    I hope this will solve your problem regarding your text
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
              

            </div>
        </div>


    )
}
