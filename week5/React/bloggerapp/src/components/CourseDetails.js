import "./Blogger.css";

function CourseDetails(props){

    const coursedet=(
        <ul>
        {
            props.courses.map((course)=>(
                <li key={course.id}>
                    <h2>{course.name}</h2>
                    <h4>{course.date}</h4>
                </li>
            ))
        }
        </ul>
    );

    return(
        <div className="section">
            <h1>Course Details</h1>
            {coursedet}
        </div>
    );
}

export default CourseDetails;