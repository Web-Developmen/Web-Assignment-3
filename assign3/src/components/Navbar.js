import React from "react";
import './Navbar.css';
import Sidebar from './Sidebar';
import Pagination from "./Pagination";

import Modal from "./Modal";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Card from "./Card";

class Navbar extends React.Component
{
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render()
  {
    return(

      <div style={{"backgroundColor":"#f0f0f0"}}>

      <Router>

      <div>
        <nav class="navbar navbar-expand navbar-light bg-light">
          <div class="container-fluid sigh">
            
            <div style={{"width":"145px","height":"36px"}}>
                <a class="navbar-brand" href="https://www.freelancer.com" >
                <img  src="https://www.f-cdn.com/assets/img/fl-logo-c555380d.svg" alt="Freelancer Logo"></img>
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav  ">

                <li class="nav-item d-none d-lg-inline ">
                  <a class="nav-link active " href="#">How It Works</a>
                </li>
                <li class="nav-item d-none d-lg-inline">
                  <a class="nav-link active" href="#">Browse Jobs</a>
                </li>

              </ul>
              <ul class="navbar-nav ms-auto ">
                <li class="nav-item me-2">
                  <a onClick={this.showModal}  class="nav-link active" aria-current="page" href="/Login">
                    Log In
                  </a>
                  {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button> */}
                </li>
                <li class="nav-item me-5">
                {/* <Link onClick={this.handleModelOpen}  className="nav-link active" to="/Signup">Sign Up</Link> */}
                <a onClick={this.showModal}  class="nav-link active" aria-current="page" href="/Signup">
                     Signup
                  </a> 
                  
                </li>			
              </ul>	
            </div>
      </div>
    </nav>
  {/* <LoginModal/> */}
    <Routes>

    <Route exact path="/Login" element={ 
    <Modal show={this.state.show} handleClose={()=>this.hideModal}>
        </Modal>}/>
        
    </Routes>

    </div>
</Router>

<div className="d-flex container-fluid justify-content-center" style={{"backgroundColor":"blue","height":"auto", "padding":"1.3rem"}}>
<div className="row container justify-center  ">
<div className=" d-flex col-lg-6 col-12  justify-content-lg-start justify-content-center " style={{"fontSize":"2rem"}}>
<h1 style={{"color":"white"}}>Top Jobs</h1>
</div>

<div className="col-lg-6 col-12">
<div class="d-flex justify-content-lg-end justify-content-center  ">
  
    <a className="btn btn-primary my-btn " style={{"marginRight":"8px"}}>I want to Hire</a>
    
    <a className="btn btn-plain-alt border" style={{"borderRadius":"0px","borderBlockColor":"white"}}>I want to Work</a>
    
 </div>

</div>
</div>
</div>

<div className="container justify-center"  >

  <div className="mt-3 mb-3">
    <a   href="" className="color-black">Freelancer</a>&nbsp; &nbsp;
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>&nbsp; &nbsp;

    <a href="" className="color-black"> Jobs</a>&nbsp; &nbsp;

    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className=" color-black bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>&nbsp; &nbsp;

<a href="" className="color-black"> Browse All Jobs</a>&nbsp; &nbsp;

<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className=" color-black bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>&nbsp; &nbsp;

<span className="color-black">1</span>




  </div>

<section >
  <div className="row mb-3">
  <div className="col-lg-5 col-12 ">
<div class="input-group flex-nowrap mb-2" style={{"height":"70px"}} >
  <span style={{"backgroundColor":"white"}} class="input-group-text" id="addon-wrapping">    <svg style={{"fill":"lightgray"}} class="Icon-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M21.71 20.29l-5.4-5.39a8 8 0 0 0-12-10.56 8 8 0 0 0 10.56 12l5.39 5.39 1.41-1.41zM10 16a6 6 0 1 1 4.24-1.76A6 6 0 0 1 10 16z"></path>
</svg></span>
  <input style={{"width":"100%","paddingLeft":"0px","fontSize":"1rem","border":"0"}} type="text" class="" placeholder=" Search Key" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
    </div>

    <div className="col-lg-5 col-12">
<div class="input-group flex-nowrap mb-2" style={{"height":"70px"}} >
  <span style={{"backgroundColor":"white"}} class="input-group-text" id="addon-wrapping">    <svg style={{"fill":"lightgray"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg></span>
  <input style={{"width":"100%","paddingLeft":"0px","fontSize":"1rem","border":"0"}} type="text" class="" placeholder=" Search Key" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
    </div>

    <div className="col-lg-2 col-12 mb-2 " style={{"backgroundColor":"white", "height":"70px"}}>
      <div className="row">
        <div className="col-3 col-0">

        </div>
        <div className="col-9 col-12" style={{"padding":"5px"}}>
        <button id="search-submit" class="InputCombo-btn btn btn-xlarge btn-info ProjectSearch-searchField-button" aria-label="search">
            Search
    </button>
        </div>
        

      </div>


    </div>


  </div>

</section>



<div className="row container">

<div className="col-lg-3 d-none d-lg-block">
  
<Sidebar/>
</div>

{/* Enter cards here  */}
<div className="col-lg-9" style={{"cursor":"pointer","backgroundColor":"white"}} >
     <Pagination/>

<Card
 header="Need full time Wordpress developer who can edit and create theme"
 days_left = "6 days left"
 body="Hi we have an urgent requirement for a full time Wordpress developer with min 3-4 years experience in php ,
 Wordpress Creating theme and editing existing theme Anjular knowing is an added advantage Looking for immiidetate 
 joinee Location banglore ,initial can be wfh"
 tags={['CSS','Html', 'PHP','Website Design','Word Press']}
 price = "$15/ hr"
 bids="0 bids"
 button_text="Bid Now"
  />

<Card
 header="Logo for fast Food place"
 days_left = "6 days left"
 body="We need a logo for bakery/fast food shop, the main color needs to be the pink on the coler scheme attached. 
 And can use any of the other colors as secondary. The name is “Lilly’s”
 "
 tags={['Graphic' ,'Design' ,'Illustrator', 'Logo', 'Design', 'Photoshop']}
 price = "$50"
 bids="0 entries"
 button_text="Bid Now"
 verified
  />

<Card
 header="Need A Article writer on business niche"
 days_left = "6 days left"
 body="Article will be 100% unique and no grammatical mistakes. Article will be about 2000-2500 words. "
 tags={['Article' ,'WritingContent' ,'WritingResearch' ,'Writing']}
 price = "$250"
 bids="1 bids"
 button_text="Bid Now"

  />

<Card
 header="Seeking professional demo(s)"
 days_left = "6 days left"
 body="I’ve written a Christmas song I want to market to publishers and am looking to establish a relationship with a demo service"
 tags={['CSS','Html', 'PHP','Website Design','Word Press']}
 price = "$164 - $491"
 bids="0 bids"
 button_text="Bid Now"
 verified
  />
</div>
</div>

</div>

</div>

// </div>





    )
}
}

export default Navbar;