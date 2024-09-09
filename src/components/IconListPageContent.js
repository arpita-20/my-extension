import React, { useEffect, useRef, useState } from "react";

const IconListPageContent = () => {
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
                svgs.forEach((svg) => {
                  svg.setAttribute("width", "40px");
                  svg.setAttribute("height", "40px");
                  svg.style.cursor = "pointer";
                });

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
    } else {
      console.warn("Chrome APIs are not available in this environment");
    }
  }, []);

  const sanitizeSVG = (svgString) => {
    // Create a temporary DOM element to manipulate the SVG
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = svgString;

    // Select the SVG element
    const svgElement = tempDiv.querySelector("svg");

    // Remove unwanted attributes (class, aria-hidden, style)
    svgElement.removeAttribute("class");
    svgElement.removeAttribute("aria-hidden");
    svgElement.removeAttribute("style");

    return tempDiv.innerHTML; // Return cleaned SVG
  };

  const downloadSVG = (svg, index) => {
    if (svgRef.current) {
      const rawSVG = svgRef.current.innerHTML;
      const sanitizedSVG = sanitizeSVG(svg); // Clean up the SVG

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
            dangerouslySetInnerHTML={{ __html: svg }}
            onClick={() => downloadSVG(svg, index)}
          />
        ))
      ) : (
        <p className="text-base text-white">No SVG elements detected.</p>
      )}
    </div>
  );
};

export default IconListPageContent;
