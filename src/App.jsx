import React, { useState } from "react";
import QRScanner from "./QRScanner";
import LocationTracker from "./LocationTracker";

const App = () => {
  const [scannedLocation, setScannedLocation] = useState(null);

  const handleScan = (data) => {
    setScannedLocation(data); // Assuming the QR code contains location info
  };

  return (
    <div>
      <h1>Golf Course QR Scanner</h1>
      <QRScanner onScan={handleScan} />
      {scannedLocation && (
        <div>
          <h2>Scanned Location: {scannedLocation}</h2>
          <LocationTracker />
        </div>
      )}
    </div>
  );
};

export default App;