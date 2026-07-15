import "./Blogger.css";

function BookDetails(props){

    const bookdet=(
        <ul>
        {
            props.books.map((book)=>(
                <li key={book.id}>
                    <h3>{book.bname}</h3>
                    <h4>{book.price}</h4>
                </li>
            ))
        }
        </ul>
    );

    return(
        <div className="section">
            <h1>Book Details</h1>
            {bookdet}
        </div>
    );
}

export default BookDetails;