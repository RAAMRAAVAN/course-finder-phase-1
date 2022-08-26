import React from 'react';
import '../style/style.css';

function Header() 
{     

        return(
            <>
                {/* <!-- **************** background designes **************** --> */}
                <div className="col-12 d-flex justify-content-end backgroundcontainer">
                    <div className="col-12 background ">
                    </div>
                </div>
                <div className="col-12 d-flex  backgroundcontainer2">
                    <div className="col-12 background2 ">
                    </div>
                </div>
                {/* <!-- *********** Header ************* --> */}
                <div className="container-fluid  d-flex justify-content-between bg-purple  mb-5">

                </div>
                <div className="d-flex justify-content-center">
                <div className="home pt-3">
                <p className="text-white h6 fw-bold">Course Finder</p>
                    <p className="h6 fw-bold">Course Found : 
                        <span className="rounded text-danger bg-white px-2 ms-1 fw-bold py-1">
                            500
                        </span>
                    </p>
                    </div>
                </div>   
                
        </>
        );    
}
export default Header;