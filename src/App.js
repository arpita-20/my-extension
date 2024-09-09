import React, { useEffect, useState } from "react";

function App() {
  const [svgElements, setSvgElements] = useState([]);

  useEffect(() => {
    // Ensure chrome API is available in the environment
    if (typeof chrome !== "undefined" && chrome.tabs) {
      // Query the active tab and execute a script to find SVG elements
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          const activeTab = tabs[0];

          // Inject code into the webpage to get all SVGs
          chrome.scripting.executeScript(
            {
              target: { tabId: activeTab.id },
              func: () => {
                // Get all SVG elements on the page and return their outerHTML
                const svgs = Array.from(document.querySelectorAll("svg"));
                return svgs.map((svg) => svg.outerHTML);
              },
            },
            (results) => {
              if (results && results[0] && results[0].result) {
                setSvgElements(results[0].result); // Update state with the SVG outerHTML
              }
            }
          );
        }
      });
    } else {
      console.warn("Chrome APIs are not available in this environment");
    }
  }, []);

  return (
    <div>
      <h1>SVG Elements Detected</h1>
      <div>
        {svgElements.length > 0 ? (
          svgElements.map((svg, index) => (
            // Display each SVG element by rendering its HTML
            <div key={index} dangerouslySetInnerHTML={{ __html: svg }} />
          ))
        ) : (
          <p>No SVG elements detected.</p>
        )}
      </div>
    </div>
  );
}

export default App;
