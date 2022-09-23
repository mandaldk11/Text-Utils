
export default function About(props) {
    // const [myStyle,setMyStyle]=useState(  {
    //     color:"black",
    //     backgroundColor:"white"
    // });
    let myStyle={
       color: props.mode ==='dark'?'black':'black',
       backgroundColor:props.mode ==='light'?'white':'grey',
    }

  
    return (
        <div>
            <div className='container my-5' style={myStyle}>
                <h2><b><i> About Our Website - TEXT-UTILS</i></b> </h2>
                <div className="accordion my-2" id="accordionExample" style={myStyle} >
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Text-analysis ?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            Text analysis is the process of using computer systems to read and understand human-written text for business insights. Text analysis software can independently classify, sort, and extract information from text to identify patterns, relationships, sentiments, and other actionable knowledge. You can use text analysis to efficiently and accurately process multiple text-based sources such as emails, documents, social media content, and product reviews, like a human would.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               uppercase 
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            Uppercase letters are capital letters—the bigger, taller versions of letters (like W), as opposed to the smaller versions, which are called lowercase letters (like w). Uppercase means the same thing as capital. Uppercase letters can also be called capitals.
                            What is lower case letter example?
                             a, b, and c shows lowercase, and  A, B, and C shows uppercase
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               Remove Extra Space
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            Use this online free Remove Extra Spaces Tool which removes all the extra spaces from text or code. This tool does not remove all the spaces, it just removes the ones which human eyes cannot catch. There is no way to spot trailing spaces, those that keep out of sight at the end of cells.
                            Type or paste any text into the textarea above and click the Submit button and see the result below.
                            In fact, spaces are characters like the others, but they are invisible. To delete them in a text means to search for all characters with the code space and to perform their removal.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Copy to clipboard
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                          By this tool you can copy your manipulated or modyfied text to anywher you want.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                             Clear text
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                          By this tool you can Clear all the text which is in textarea of your website.
                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               lowercase
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            Lowercase letters are the shorter, smaller versions of letters (like w), as opposed to the bigger, taller versions (like W), which are called uppercase letters or capital letters. The adjective lowercase can also be used as a noun meaning the same thing as lowercase letter, though this is much less commonly used.
                            What is lower case letter example?
                            Here are all the lower case letters in the English alphabet: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y and z.
                            </div>
                        </div>
                    </div>
                </div>
                              
            </div>
           
        </div>
    )
}
