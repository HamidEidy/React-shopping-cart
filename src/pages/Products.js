import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

function Products(props) {
  const bookRef = useRef();

  // حواست باشه به خاطر برعکس کردن کتاب لاجیک دکمه بعدی و قبلی هم برعکس شده

  const goToNextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const goToPrevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const totalPages = 6;

  return (
    <div
      dir="rtl"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        direction: "rtl",
        position: "absolute",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
        <p
          style={{
            cursor: "pointer",
            backgroundColor: "blue",
            padding: "5px",
            color: "white",
            borderRadius: "10px",
            fontSize: "14px",
          }}
          onClick={goToPrevPage}>
          قبلی
        </p>
        <p
          style={{
            cursor: "pointer",
            backgroundColor: "red",
            padding: "5px",
            color: "white",
            borderRadius: "10px",
            fontSize: "14px",
          }}
          onClick={goToNextPage}>
          بعدی
        </p>
      </div>

      <HTMLFlipBook
        startZIndex={2}
        ref={bookRef}
        width={500}
        height={600}
        showCover={true} // showCover should be a boolean, not a string
        startPage={totalPages - 1}>
        <div className="demoPage">
          <img
            src="https://ostan-mr.ir/uploads/books/rahavard/rahavard-183.jpg"
            alt="..."
            className="img-fluid"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div className="demoPage">
          <img
            src="https://ostan-mr.ir/uploads/books/rahavard/rahavard-112.jpg"
            alt="..."
            className="img-fluid"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div className="demoPage">
          <img
            src="https://ostan-mr.ir/uploads/books/rahavard/rahavard-95.jpg"
            alt="..."
            className="img-fluid"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div className="demoPage">
          <img
            src="https://ostan-mr.ir/uploads/books/rahavard/rahavard-96.jpg"
            alt="..."
            className="img-fluid"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div className="demoPage">
          <img
            src="https://ostan-mr.ir/uploads/books/rahavard/rahavard-95.jpg"
            alt="..."
            className="img-fluid"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>

        <div className="demoPage">
          <img
            src="https://ostan-mr.ir/uploads/books/tumb.jpg"
            alt="..."
            className="img-fluid"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default Products;
