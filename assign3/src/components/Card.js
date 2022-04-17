import React from 'react'
import './Navbar.css'

export default function Card(props) {
    
  return (

      <div className="mydivouter " >
    
            <div className="row " style={{"padding":"18px"}}>
        
            <div className="col-lg-9  ">
                <div className="ms-3">
                    <a className="color-black" href = "#"> <strong>{props.header}</strong> </a>
                    {props.days_left} 
                </div>
                {props.verified &&(
                    <div className="ms-3">
                        <svg  style={{"fill":"green"}} class="Icon-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><g><path d="M20 2c0-1.104-.896-2-2-2H2C.897 0 0 .896 0 2v2h20V2zM19 14c.34 0 .668.036.99.09.002-.03.01-.06.01-.09V6H0v8c0 1.102.897 2 2 2h12.537c1.1-1.225 2.69-2 4.463-2zM8 13H3v-2h5v2zm2-3H3V8h7v2zm3-2h4v2h-4V8zM22.293 16.293L18 20.587l-2.293-2.294-1.414 1.413L18 23.416l5.707-5.71"></path></g></svg>
                            <span style={{"color":"green"}}>Verified</span>
                        
                    </div>
                )}
                <div className="mt-4 ms-3">
                    {props.body}
                </div>
                <div >
                    {props.tags.map((item)=>(
                        <a 
                            key={item}
                            href="#"
                            className='no-color-hover mt-3 ms-3'
                            style={{textDecoration:"none"}}
                        >
                        {item}
                        </a>
                    ))}

                </div>
        
        
            </div>
            <div  className="col-lg-3 mt-3 " style={{"paddingLeft":"50px","position":"relative"}}>
                    <h6 >{props.price}</h6>
                    <p>{props.bids}</p>
                    <div >  
                        <button type="button" className="mybuttonoverlap my">
                            {props.button_text}
                        </button>
                    </div>
            </div>
        
        
        </div> 
        <hr></hr>   
        </div>
    
  )
}