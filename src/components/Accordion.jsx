import React, { useEffect, useState } from "react";
import faq from "../API/faq.json";
import FAQ from "./FAQ";

function Accordion() {
  const [data, setData] = useState([]);
  const [activeID, setActiveID] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);

  const handleButton = (id) => {
    setActiveID((prevId) => (prevId === id ? false : id));
  };
  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
          const { id } = curElem;
          return (
            <FAQ
              key={id}
              curData={curElem}
              isActive={activeID === id}
              onToggle={() => handleButton(curElem.id)}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Accordion;
