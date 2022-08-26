import React,{ useState} from "react";

function Filters()
{   
    const [hideMenu,setHideMenu]=useState("hide-menu");
    const [hideStatus,setHideStatus]=useState(true);
    let menuCss=()=>{
        if(hideStatus===true)
            {
                setHideMenu("");
                setHideStatus(false);
            }
        else
            {
                setHideMenu("hide-menu")
                setHideStatus(true);
            }   
    } 
    let collapse=()=>{
        setHideMenu("hide-menu")
        setHideStatus(true);
    }
    return(
        <>
        {/* <!-- ****menu**** --> */}
        <div className="menu">
        
            
        <div className=" bg-white col-xl-9 col-lg-11 col-md-11 col-sm-10 col-11 menu-border row px-sm-2 py-sm-2 justify-content-center">
            <button  className="btn border-0 col-11 FilterMenu" onClick={()=>menuCss()}>
                <i className="fa fa-filter icon-color me-2 " aria-hidden="true"></i> Filter Courses
            </button>
            <div className={`${hideMenu} col-lg-3 col-md-3 col-12 d-flex justify-content-center row p-0 m-0 my-sm-2 my-2`}>
                <div className={`${hideMenu} menu-shadow col-11  border-0`}>
                    <div className={`${hideMenu} form-floating my-1 `}>
                        <input type="text" className={`${hideMenu} form-control border-0`}  id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput" className={`${hideMenu}`}><i className={`${hideMenu} fa-solid icon-color fa-book-open me-2`}></i>Course</label>
                    </div> 
                </div>
            </div>
            <div className={`${hideMenu} col-lg-3 col-md-4 d-flex justify-content-center row p-0 m-0 my-sm-2 my-2  `}>
                <div className={`${hideMenu} menu-shadow col-11 border-0   `}>
                    <div className={`${hideMenu} form-floating my-1 floating-border`}>
                        <input type="text" className={`${hideMenu} form-control border-0   `} id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput" className={`${hideMenu} `}><i className={`${hideMenu} fa-solid icon-color fa-chalkboard-user me-2 `}></i>Child Subject</label>
                    </div>
                </div>
            </div>
            <div className={`${hideMenu} col-lg-3 col-md-3 d-flex justify-content-center row p-0 m-0 my-sm-2 my-2`}>
                <div className={`${hideMenu} menu-shadow col-11  border-0 m-0 px-md-3 px-4`}>
                    <div className={`${hideMenu} input-group form-floating my-1`}>
                        <span className={`${hideMenu} input-group-text border-0 p-0 bg-white`}><i className={`${hideMenu} fa-solid icon-color fa-calendar-week `}></i></span>
                        <input type="date" className={`${hideMenu} form-control border-0 p-0 m-0 ps-2 `} id="floatingInput" placeholder="name@example.com" />
                    </div> 
                </div>
            </div>
            <div className={`${hideMenu}  col-lg-3 col-md-2 d-flex justify-content-center row p-0 m-0 `}>
                <div className={`${hideMenu}  col-xl-11 col-lg-10 col-md-12 col-sm-11 col-11 d-flex justify-content-lg-between justify-content-md-center justify-content-sm-start align-content-center p-0 m-0 row`}>
                    <div className={`${hideMenu}   d-flex m-0 p-0 col-xl-8 col-lg-8 my-sm-2 my-2 justify-content-md-evenly align-items-center `}>
                        <input type="checkbox" id="selfplaced" className={`${hideMenu}  m-0 p-0 me-2`} placeholder="ram"/>
                        <label htmlFor="selfplaced" className={`${hideMenu} `}>Self Placed</label>
                    </div>
                    <div className={`${hideMenu} col-xl-4 col-lg-4 col-md-8 btn btn-sm submit-btn mt-md-1 my-sm-2 `}  onClick={()=>{collapse()}}>Submit</div>
                </div>
            </div>
            {hideStatus?<></>: <div className=" col-lg-3 col-md-2 d-flex justify-content-center row Filter-Toggel">
            <button className="col-sm-11 border-0 btn d-flex justify-content-center Filter-Toggel" onClick={()=>{collapse()}}><i className="Filter-Toggel fa-solid fa-caret-up"></i></button>
            </div> }
            
        </div>       
    </div>   
    </>
    )
}
export default Filters;