import "./Blogger.css";

function BlogDetails(props){

    const content=(
        <div>
        {
            props.blogs.map((blog)=>(
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h4>{blog.author}</h4>
                    <p>{blog.description}</p>
                    <br/>
                </div>
            ))
        }
        </div>
    );

    return(
        <div className="section">
            <h1>Blog Details</h1>
            {content}
        </div>
    );
}

export default BlogDetails;