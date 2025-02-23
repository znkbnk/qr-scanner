import React, { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRScanner = ({ onScan }) => {
  const qrRef = useRef(null);

  useEffect(() => {
    const qrScanner = new Html5QrcodeScanner(
      "qr-scanner", // ID of the HTML element to render the scanner
      {
        fps: 10, // Frames per second
        qrbox: 250, // Size of the scanning box
      },
      false // Verbose mode (set to true for debugging)
    );

    qrScanner.render(
      (data) => {
        onScan(data); // Pass the scanned data to the parent component
        qrScanner.clear(); // Stop the scanner after a successful scan
      },
      (err) => {
        console.error("QR Scanner Error:", err);
      }
    );

    return () => {
      qrScanner.clear(); // Cleanup on unmount
    };
  }, [onScan]);

  return <div id="qr-scanner" ref={qrRef}></div>;
};

export default QRScanner;