/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useQRCode } from "next-qrcode";

function QRcodeCanvas({ value = "HelloQR", width = "340" }) {
  const { SVG } = useQRCode();
  const WH = width;

  useEffect(() => {
    let download = () => {
      const variableFileName = Math.floor(Math.random() * 10);
      const container = document.querySelector("#container_svg");
      const SVG_CONTAINER = container.querySelector("svg");
      const SVG_XML_HEADER = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 ${width} ${width}">`;
      const DEFAULT_SVG_FILENAME = "qrcode" + variableFileName + ".svg";
      let svg_code = SVG_XML_HEADER + "\n" + SVG_CONTAINER.innerHTML.trim() + "</svg>";

      let btn = document.querySelector("#download_svg");
      btn.addEventListener("click", (e) => {
        let a = document.createElement("a");
        // Set it's href to have the SVG content directly in the URL.
        a.setAttribute(
          "href",
          "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg_code)
        );
        // Set the filename for the "save as" dialog box.
        a.setAttribute("download", DEFAULT_SVG_FILENAME);
        // Don't display this link in the HTML page.
        a.style.display = "none";
        // Put it in the HTML page so that we can click on it.
        document.body.appendChild(a);
        // This click will generate the download.
        a.click();
        // Remove the created link from the HTML page.
        document.body.removeChild(a);
      });

      console.log("new download");
    };
    download();
  }, []);

  return (
    <div className="mt-5 w-full border p-2" id="qrcode">
      <div id="container_svg">
        <SVG
          text={value}
          options={{
            errorCorrectionLevel: "M",
            margin: 3,
            scale: 4,
            width: WH,
            color: {
              dark: "#0a0507",
              light: "#f8f8ff",
            },
          }}
        />
      </div>
      <button
        className="px-5 py-3 text-slate-950 bg-white border-2 border-gray-950 rounded-md w-full hover:bg-black hover:text-slate-50 transition-colors"
        id="download_svg"
      >
        скачать в svg
      </button>
    </div>
  );
}

export default QRcodeCanvas;
