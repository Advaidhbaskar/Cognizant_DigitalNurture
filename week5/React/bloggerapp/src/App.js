import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";
import "./components/Blogger.css";

export const books=[
{
id:101,
bname:"Master React",
price:670
},
{
id:102,
bname:"Deep Dive into Angular 11",
price:800
},
{
id:103,
bname:"Mongo Essentials",
price:450
}
];

export const blogs=[
{
id:1,
title:"React Learning",
author:"Stephen Biz",
description:"Welcome to learning React!"
},
{
id:2,
title:"Installation",
author:"Schwzdenier",
description:"You can install React from npm."
}
];

export const courses=[
{
id:1,
name:"Angular",
date:"4/5/2021"
},
{
id:2,
name:"React",
date:"6/3/2021"
}
];

function App(){

const showBooks=true;
const showBlogs=true;
const showCourses=true;

return(

<div className="container">

{showCourses && <CourseDetails courses={courses}/>}

{showBooks ? <BookDetails books={books}/> : null}

{showBlogs ? <BlogDetails blogs={blogs}/> : null}

</div>

);

}

export default App;