
import HTMLFlipBook from "react-pageflip";

function Products(props) {



    return (
        <div dir="rtl">
            <p onClick={next}>بعدی</p>
        <HTMLFlipBook
        startZIndex={2}
        ref="book"
        width={300} height={500}
        direction="rtl"
        showCover="false"
        >
            <div className="demoPage h-[100%]">    1   <img
                src="https://ostan-mr.ir/uploads/books/tumb.jpg"
                alt="..."
                className="img-fluid h-[100%]"
            /></div>
                     <div className="demoPage">       <img
                src="https://ostan-mr.ir/uploads/books/tumb.jpg"
                alt="..."
                className="img-fluid"
            /></div>
                      <div className="demoPage">       <img
                src="https://ostan-mr.ir/uploads/books/tumb.jpg"
                alt="..."
                className="img-fluid"
            /></div>
                      <div className="demoPage">       <img
                src="https://ostan-mr.ir/uploads/books/tumb.jpg"
                alt="..."
                className="img-fluid"
            /></div>
                      <div className="demoPage">       <img
                src="https://ostan-mr.ir/uploads/books/tumb.jpg"
                alt="..."
                className="img-fluid"
            /></div>
        </HTMLFlipBook>

        </div>
    );
}

export default Products;