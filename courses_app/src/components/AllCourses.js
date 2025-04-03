import { useState } from "react";
import Course from "./Course";

const AllCourses = () => {
    const [courses, setCourses] = useState([
        {title: "Java Course", description: "This is sample Java Course"},
        {title: "React Course", description: "This is sample React Course"},
        {title: "Angular Course", description: "This is sample Angular Course"}
    ])

    return(
        <div>
            <h1 className="m-4">All Courses</h1>
            <p className="m-4">List of all courses</p>
            {
                courses.length>0 
                ? courses.map((item)=> <Course course={item}/>)
                : "No courses"
            }
        </div>
    );
}
export default AllCourses;