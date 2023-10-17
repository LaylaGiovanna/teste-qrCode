import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import TakePhoto from "../components/icons/images/take-photo.png";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";




export default function Scanner() {

    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
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
    }, []);

    return (
        <div>

            {/* <div className='flex items-center justify-center  h-fit '>
                <Image src={TakePhoto} alt="Pessoa tirando foto" height={550} width={550} />
            </div> */}

            {/* <div className='flex items-center justify-center  h-1/2 '>
                <button className='flex items-center justify-center h-14 w-96 rounded-full bg-primary'>
                    Escanear pedido
                </button>
            </div> */}

            <div className="bg-pink flex justify-center">
                {scanResult
                    ? <div> Success: <a href={scanResult}></a> </div>
                    : <div id="reader" className="w-[600px] "></div>
                }
            </div>

        </div>




    );
};