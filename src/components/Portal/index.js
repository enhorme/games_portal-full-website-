import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";

const modalDetailsElement = document.querySelector("#modal");

export default ({ render }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const divElement = useMemo(() => document.createElement("div"), []);
  const fromPage = location.state?.fromPage?.pathname || "/";

  useEffect(() => {
    modalDetailsElement.appendChild(divElement);
    document.body.style.overflow = "hidden";

    return () => {
      modalDetailsElement.removeChild(divElement);
      document.body.style.overflow = "auto";
    };
  });

  const jsx = (
    <div className="modal_wrapper" onClick={() => navigate(fromPage)}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        {render(fromPage)}
      </div>
    </div>
  );

  return createPortal(jsx, divElement);
};
