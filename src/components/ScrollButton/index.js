import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
export default () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll(e) {
    e.target.documentElement.scrollTop > 250
      ? setIsVisible(true)
      : setIsVisible(false);
  }

  function handleClick() {
    window.scroll(0, 0);
  }

  if (isVisible)
    return (
      <div className="scroll-totop" onClick={handleClick}>
        <FaArrowCircleUp />
      </div>
    );
};
