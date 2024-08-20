import { useEffect, useState } from "react";
import Products from "./pages/Products";

function App() {
// const [books, setBooks] = useState([])
// useEffect(() => {
// setBooks()



// }, [])
const data = {
	"Books": [
		{
			"_id": "66c3055ef1466acf04731b76",
			"title": "رهاورد خدمت",
			"created_at": "2024-08-13T08:58:33.656Z",
			"updated_at": "2024-08-13T08:58:33.656Z",
			"__v": 0,
			"url": "https://ostan-mr.ir/uploads/books/tumb.jpg",
			"id": "66c3055ef1466acf04731b76"
		}
	]
};
const [status, setStatus] = useState(false)
const openBook = (e) => {
  e.stopPropagation()
  e.preventDefault();
  setStatus(true)
}
const closeBook = (e) => {
e.stopPropagation();
e.preventDefault();
setStatus(false)
}
  return (
<div onClick={closeBook}>
{ data.Books.map((item) => (
  <p onClick={openBook}>{ item.title }</p>
)) }

{ status && <Products /> }


</div>
  );
}

export default App;
