import React from "react";
import Header from "./Header";
import Filter from "./filter";
import Courses from "./Courses"
function Home()
{
    
    return (
        <div>
            <Header/>
            <Filter/>
            <Courses/>
        </div>
    )
}
export default Home;