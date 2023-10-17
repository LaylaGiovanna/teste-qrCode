import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import TakePhoto from "../components/icons/images/take-photo.png";
import Scanner from "../components/Scanner";




export default function QrCode() {

  return (
    <Layout>
      <div className='flex flex-col h-full justify-center text-text bg-second'>
        <div className='flex items-end justify-center h-1/2 '>
          <span className="text-text text-xl font-semibold tracking-wide">
            Leitor de pedidos QRCode
          </span>
        </div>

        {/* <div className='flex items-center justify-center  h-fit '>
          <Image src={TakePhoto} alt="Pessoa tirando foto" height={550} width={550} />
        </div>

        <div className='flex items-center justify-center  h-1/2 '>
          <button className='flex items-center justify-center h-14 w-96 rounded-full bg-primary'>
            Escanear pedido
          </button>
        </div> */}

        <Scanner/>

      </div>
    </Layout>
  );
};