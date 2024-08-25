// Canvas.jsx
import Body from "./body";
import Header from "./header";
import { useEffect, useRef, useState } from "react";

function Canvas() {
  const outerDivRef = useRef();
  const [pageIndex, setPageIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollToPage = (index) => {
    window.scrollTo({
      top: window.innerHeight * index,
      behavior: "smooth",
    });
  };

  const handleMenuClick = (index) => {
    setPageIndex(index);
    handleScrollToPage(index);
  };

  useEffect(() => {
    const wheelHandler = (e) => {
      if (isScrolling || isModalOpen) return;

      e.preventDefault();
      const { deltaY } = e;

      setIsScrolling(true);

      if (deltaY > 0) {
        // 스크롤 내릴 때
        setPageIndex((prev) => {
          const newPageIndex = Math.min(prev + 1, 3);
          handleScrollToPage(newPageIndex);
          return newPageIndex;
        });
      } else {
        // 스크롤 올릴 때
        setPageIndex((prev) => {
          const newPageIndex = Math.max(prev - 1, 0);
          handleScrollToPage(newPageIndex);
          return newPageIndex;
        });
      }

      setTimeout(() => setIsScrolling(false), 100);
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);

    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, [isScrolling, isModalOpen]);

  return (
    <div className="canvas" ref={outerDivRef}>
      {!isModalOpen && (
        <Header pageIndex={pageIndex} onMenuClick={handleMenuClick} />
      )}
      <Body pageIndex={pageIndex} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default Canvas;
