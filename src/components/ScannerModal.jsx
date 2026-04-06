import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const ScannerModal = ({ onClose, onScan }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    // Initialize the scanner
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      false
    );

    scanner.render(
      (decodedText) => {
        // Stop scanning after success
        scanner.clear();
        onScan(decodedText);
      },
      (error) => {
        // Continuous error feedback (mostly ignored in UI)
      }
    );

    // Cleanup on unmount
    return () => {
      scanner.clear().catch(error => console.error("Failed to clear html5QrcodeScanner. ", error));
    };
  }, [onScan]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-surface-container-lowest w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-4 border-b border-outline-variant/20">
          <h3 className="font-bold text-on-surface">Scan Product Code</h3>
          <button 
            onClick={onClose} 
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="p-4">
          <div id="reader" className="w-full rounded-2xl overflow-hidden" ref={scannerRef}></div>
          <p className="text-center text-xs text-on-surface-variant mt-4">Point your device camera at a Barcode or QR Code to scan.</p>
        </div>
      </div>
    </div>
  );
};

export default ScannerModal;
