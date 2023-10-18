import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import TakePhoto from "../components/icons/images/take-photo.png";
import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";




export default function Scanner() {

    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 280,
                height: 280,
            },
            fps: 5,
        });


        scanner.render(success, error);

        function success(result) {
            scanner.clear();
            setScanResult(result);
        };

        function error(err) {
            console.warn(err)

        };


        var textoPermitirAcesso = document.getElementById('html5-qrcode-button-camera-permission');
        textoPermitirAcesso.textContent = "Permitir acesso a camera";
        
        
        // var textoScanImage = document.getElementById('html5-qrcode-anchor-scan-type-change');
        // textoScanImage.textContent = "Escanear arquivo de imagem";
        
        var tirarScanImage = document.getElementById('html5-qrcode-anchor-scan-type-change');
        tirarScanImage.style.display = "none";
        
        // var textoStopScan = document.getElementById('html5-qrcode-button-camera-stop');
        // textoStopScan.textContent = "Parar de escanear";
        // var tirarImage = document.getElementById('reader__scan_region');
        // tirarImage.style.display = "none";

        
    
    }, []);

    return (
            <div className="border-none flex justify-center">
                {scanResult
                    ? <div> Success: <a href={scanResult}></a> </div>
                    : <div id="reader" className="border-none w-[600px] h-[400px]"></div>
                }
            </div>
    );
};