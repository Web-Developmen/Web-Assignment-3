import './pagination.css';
function Pagination(props) {
    return (
      <div className="container">

        <div className="d-flex p-2 align-items-center row">
          <div className="d-none d-xl-block me-2 col-lg-2">
            <select className="form-select" aria-label="select results page">
              <option selected>Newest First</option>
              <option>Lowest budget first</option>
              <option>Highest budget first</option>
              <option>Lowest bids/entries</option>
              <option>Highest bids/entries</option>
            </select>
          </div>
          <div className="align-items-center col-lg-3">
            <span id="jobs-count">{props?.jobsCount}</span>
            <span>4 jobs found, pricing in USD</span>
          </div>
            <div className="d-none d-lg-block mt-3 col-lg-2 offset-lg-3 offset-6">
              <nav aria-label="results pagination">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 12"
                          className="flicon-pagination-first"
                        >
                          <path d="M10 11L5 6l5-5M2.5 11c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 12"
                          className="flicon-pagination-prev"
                        >
                          <path d="M8 11L3 6l5-5v10z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 12"
                          className="flicon-pagination-next"
                        >
                          <path d="M4 1l5 5-5 5"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 12"
                          className="flicon-pagination-last"
                        >
                          <path d="M2 1l5 5-5 5M9.5 1c.28 0 .5.22.5.5v9c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <span class="InputCombo-icon Icon Icon--mid d-lg-none d-flex justify-content-end" style={{"margin-top":"-24px"}}>
               <svg style={{"fill":"lightgray"}} class="Icon-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><g><path d="M14.5 6c0-.346.047-.678.12-1H2v2h12.62c-.073-.324-.12-.656-.12-1zM14.5 18c0-.346.047-.678.12-1H2v2h12.62c-.073-.324-.12-.656-.12-1zM4.5 12c0-.346.047-.678.12-1H2v2h2.62c-.073-.324-.12-.656-.12-1zM13.38 11c.073.322.12.654.12 1 0 .344-.047.676-.12 1H22v-2h-8.62z"></path><circle cx="19" cy="5.999" r="3"></circle><circle cx="9" cy="11.999" r="3"></circle><circle cx="19" cy="17.999" r="3"></circle></g></svg>
            </span>
        </div>
        <hr></hr>
      </div>
    );
  }
  export default Pagination;
  