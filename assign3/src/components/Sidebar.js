import React from "react"
import './Sidebar.css';
const Sidebar = () => {
    return (

        <div className="Sidebar " style={{"padding-right":"15px"}}>
        <div className="sidebar" style={{"backgroundColor":"white","padding-left":"15px", "padding-top":"15px" }}>



        <div className=" overflow ">

        <h2 className="sidebar_heading">My recent searches
                    <br/>
                    <br/>
                    <hr/>
                    <h2 className="sidebar_heading">Filter by:
                    <br/>
                    <h3 className="budget">Budget</h3>
                    </h2>
        </h2>
                  
            <div className="check1 mb-2">
               <form action="d-flex form-inline">
                    <input className="Checkbox-input" type="checkbox"/>
                        <label for=""> &nbsp; Fixed Price Projects</label>
                </form>
            </div>

            <div className="d-flex form-inline">
                    <input id="fixed-min" className="default-input" placeholder="min"/>
                    <label for=""> &nbsp; &nbsp; to &nbsp; &nbsp;</label>
                    <input id="fixed-max" className="default-input ml-2" placeholder="max"/>
            </div> 
            <br/>
            
            <div>
               <form action="d-flex form-inline">
                    <input className="Checkbox-input mr-4 ml-1" type="checkbox"/>
                        <label for="">&nbsp; Hourly Projects</label>
                </form>
            </div>

            <div className="d-flex form-inline mt-2">
                    <input id="fixed-min" className="default-input ml-2 mr-2" placeholder="min"/>
                    <label for=""> &nbsp; &nbsp; to &nbsp; &nbsp;</label>
                    <input id="fixed-max" className="default-input ml-2" placeholder="max"/>
            </div> 
            <br/>

            <div>

            <span className="SectionJobFilter-durationControl">
                                <select id="hourly-duration" className="default-select">
                                    <option value="false" selected="">All Durations</option>
                                    <option value="1">Less than 1 week</option>
                                    <option value="2">1 week to 4 weeks</option>
                                    <option value="3">1 month to 3 months</option>
                                    <option value="4">3 months to 6 months</option>
                                    <option value="5">Over 6 months / Ongoing</option>
                                    <option value="6">Unspecified</option>
                                </select>
                        </span>
            </div>
<br/>
            <div>
               <form action="d-flex form-inline">
                    <input className="Checkbox-input mr-4 ml-1" type="checkbox"/>
                        <label for="">&nbsp; Contests</label>
                </form>
            </div>

            <div className="d-flex form-inline mt-2">
                    <input id="fixed-min" className="default-input ml-2 mr-2" placeholder="min"/>
                    <label for=""> &nbsp; &nbsp; to &nbsp; &nbsp;</label>
                    <input id="fixed-max" className="default-input ml-2" placeholder="max"/>
            </div> 
            <br/>

            {/* <h3 className="sidebar_heading">Type</h3> */}

            <strong>Type</strong><br />
            <div className="mt-3 mb-5">
                <input type="checkbox"/>
                <label >&nbsp; Local Jobs</label><br/>
                <input type="checkbox"/>
                <label >&nbsp; Featured Jobs</label><br/>
                <input type="checkbox"/>
                <label >&nbsp; Recruiter Jobs</label><br/>
                <input type="checkbox"/>
                <label >&nbsp; Full time Jobs</label>
                <hr />
            </div>
        </div>
        </div>
        </div>
    )
}
export default Sidebar;