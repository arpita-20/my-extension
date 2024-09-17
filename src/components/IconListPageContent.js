import React, { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const IconListPageContent = ({ isDarkMode }) => {
  const [svgElements, setSvgElements] = useState([]);
  const svgRef = useRef(null); // Refer

  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome?.tabs) {
      chrome?.tabs?.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          const activeTab = tabs[0];

          chrome.scripting.executeScript(
            {
              target: { tabId: activeTab.id },
              func: () => {
                const svgs = Array.from(document.querySelectorAll("svg"));

                return svgs.map((svg) => svg.outerHTML);
              },
            },
            (results) => {
              if (results && results[0] && results[0].result) {
                setSvgElements(results[0].result);
              }
            }
          );
        }
      });
      if (svgElements) {
        svgElements.forEach((svg) => {
          svg.setAttribute("width", "30px");
          svg.setAttribute("height", "30px");
          svg.style.cursor = "pointer";
        });
      }
    } else {
      console.warn("Chrome APIs are not available in this environment");
    }
    return () => {
      setSvgElements([]);
    };
  }, []);

  const sanitizeSVG = (svgString) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = svgString;

    const svgElement = tempDiv.querySelector("svg");

    svgElement.removeAttribute("class");
    svgElement.removeAttribute("aria-hidden");
    svgElement.removeAttribute("style");

    return tempDiv.innerHTML;
  };

  const downloadSVG = (svg, index) => {
    if (svgRef.current) {
      const rawSVG = svgRef.current.innerHTML;
      const sanitizedSVG = sanitizeSVG(svg);

      const blob = new Blob([sanitizedSVG], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `svg-${index}.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-5">
      {svgElements.length > 0 ? (
        svgElements.map((svg, index) => (
          <div
            key={index}
            ref={svgRef}
            className="cursor-pointer"
            dangerouslySetInnerHTML={{ __html: svg }}
            onClick={() => downloadSVG(svg, index)}
          />
        ))
      ) : (
        <p
          className={`${
            isDarkMode ? "text-white" : "text-[#121212]"
          } text-base font-medium`}
        >
          No SVG elements detected.
        </p>
      )}
    </div>
  );
};

export default IconListPageContent;
