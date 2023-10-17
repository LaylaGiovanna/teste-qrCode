import React from "react";
import Layout from "../components/Layout";
import CardProdutos from "../components/cardPedido"
import { useState } from "react";

export default function Pedidos() {
  // Modal de cadastro open and close
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Layout>
        <div className='grid justify-around p-8 flex-col h-full text-white bg-second overflow-y-auto'>
          <div className="grid grid-cols-3 gap-10 justify-around   h-full">

            {/* Card pedido */}
            <div className="flex flex-col items-center justify-center rounded-lg shadow-shadow-button   w-80 h-80 bg-white ">
              {/* <CardProdutos email="matheus.siqueira100@gmail.com" products="coxinha"/> */}
              <div className="flex justify-center flex-col text-center text-text">
                <span className="text-2xl ">Pedido</span>
                <span className="text-base">de</span>
                <div className="flex items-center justify-center w-72">
                  <div className=" break-all">

                    <p className=" text-base">matheus.siqueira100@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-3   grid-rows-2 gap-4 mt-4 rounded-lg p-5 w-3/4 h-2/5 bg-grayMedium text-text">
                <div className="flex h-5/6 justify-between pb-4">
                  <div className="flex justify-between w-full grid-cols-2 pr-4 overflow-y-auto">
                    <div className="">
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                    </div>
                    <div className="">
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                    </div>

                  </div>

                </div>

                <div className="flex gap-2 items-end justify-end">
                  Total  <span className="text-primary">R$80,00</span>
                </div>
              </div>
              {/* div botões */}
              <div className="flex justify-center mt-2 w-full h-1/5">
                <div className="flex gap-4 items-center w-4/5 justify-center">
                  <div className="flex border text-text rounded-lg p-5 items-center h-3/5 bg-white">
                    <button onClick={openModal}>Extornar</button>
                  </div>
                  <div className="flex border-white border rounded-lg p-5 items-center h-3/5 bg-primary">
                    <button>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card pedido */}
            <div className="flex flex-col items-center justify-center rounded-lg shadow-shadow-button   w-80 h-80 bg-white ">
              {/* <CardProdutos email="matheus.siqueira100@gmail.com" products="coxinha"/> */}
              <div className="flex justify-center flex-col text-center text-text">
                <span className="text-2xl ">Pedido</span>
                <span className="text-base">de</span>
                <div className="flex items-center justify-center w-72">
                  <div className=" break-all">

                    <p className=" text-base">matheus.siqueira100@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-3   grid-rows-2 gap-4 mt-4 rounded-lg p-5 w-3/4 h-2/5 bg-grayMedium text-text">
                <div className="flex h-5/6 justify-between pb-4">
                  <div className="flex justify-between w-full grid-cols-2 pr-4 overflow-y-auto">
                    <div className="">
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                    </div>
                    <div className="">
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                    </div>

                  </div>

                </div>

                <div className="flex gap-2 items-end justify-end">
                  Total  <span className="text-primary">R$80,00</span>
                </div>
              </div>
              {/* div botões */}
              <div className="flex justify-center mt-2 w-full h-1/5">
                <div className="flex gap-4 items-center w-4/5 justify-center">
                  <div className="flex border text-text rounded-lg p-5 items-center h-3/5 bg-white">
                    <button onClick={openModal}>Extornar</button>
                  </div>
                  <div className="flex border-white border rounded-lg p-5 items-center h-3/5 bg-primary">
                    <button>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card pedido */}
            <div className="flex flex-col items-center justify-center rounded-lg shadow-shadow-button   w-80 h-80 bg-white ">
              {/* <CardProdutos email="matheus.siqueira100@gmail.com" products="coxinha"/> */}
              <div className="flex justify-center flex-col text-center text-text">
                <span className="text-2xl ">Pedido</span>
                <span className="text-base">de</span>
                <div className="flex items-center justify-center w-72">
                  <div className=" break-all">

                    <p className=" text-base">matheus.siqueira100@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-3   grid-rows-2 gap-4 mt-4 rounded-lg p-5 w-3/4 h-2/5 bg-grayMedium text-text">
                <div className="flex h-5/6 justify-between pb-4">
                  <div className="flex justify-between w-full grid-cols-2 pr-4 overflow-y-auto">
                    <div className="">
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                    </div>
                    <div className="">
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                    </div>

                  </div>

                </div>

                <div className="flex gap-2 items-end justify-end">
                  Total  <span className="text-primary">R$80,00</span>
                </div>
              </div>
              {/* div botões */}
              <div className="flex justify-center mt-2 w-full h-1/5">
                <div className="flex gap-4 items-center w-4/5 justify-center">
                  <div className="flex border text-text rounded-lg p-5 items-center h-3/5 bg-white">
                    <button onClick={openModal}>Extornar</button>
                  </div>
                  <div className="flex border-white border rounded-lg p-5 items-center h-3/5 bg-primary">
                    <button>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card pedido */}
            <div className="flex flex-col items-center justify-center rounded-lg shadow-shadow-button   w-80 h-80 bg-white ">
              {/* <CardProdutos email="matheus.siqueira100@gmail.com" products="coxinha"/> */}
              <div className="flex justify-center flex-col text-center text-text">
                <span className="text-2xl ">Pedido</span>
                <span className="text-base">de</span>
                <div className="flex items-center justify-center w-72">
                  <div className=" break-all">

                    <p className=" text-base">matheus.siqueira100@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-3   grid-rows-2 gap-4 mt-4 rounded-lg p-5 w-3/4 h-2/5 bg-grayMedium text-text">
                <div className="flex h-5/6 justify-between pb-4">
                  <div className="flex justify-between w-full grid-cols-2 pr-4 overflow-y-auto">
                    <div className="">
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                    </div>
                    <div className="">
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                    </div>

                  </div>

                </div>

                <div className="flex gap-2 items-end justify-end">
                  Total  <span className="text-primary">R$80,00</span>
                </div>
              </div>
              {/* div botões */}
              <div className="flex justify-center mt-2 w-full h-1/5">
                <div className="flex gap-4 items-center w-4/5 justify-center">
                  <div className="flex border text-text rounded-lg p-5 items-center h-3/5 bg-white">
                    <button onClick={openModal}>Extornar</button>
                  </div>
                  <div className="flex border-white border rounded-lg p-5 items-center h-3/5 bg-primary">
                    <button>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card pedido */}
            <div className="flex flex-col items-center justify-center rounded-lg shadow-shadow-button   w-80 h-80 bg-white ">
              {/* <CardProdutos email="matheus.siqueira100@gmail.com" products="coxinha"/> */}
              <div className="flex justify-center flex-col text-center text-text">
                <span className="text-2xl ">Pedido</span>
                <span className="text-base">de</span>
                <div className="flex items-center justify-center w-72">
                  <div className=" break-all">

                    <p className=" text-base">matheus.siqueira100@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-3   grid-rows-2 gap-4 mt-4 rounded-lg p-5 w-3/4 h-2/5 bg-grayMedium text-text">
                <div className="flex h-5/6 justify-between pb-4">
                  <div className="flex justify-between w-full grid-cols-2 pr-4 overflow-y-auto">
                    <div className="">
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                    </div>
                    <div className="">
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                    </div>

                  </div>

                </div>

                <div className="flex gap-2 items-end justify-end">
                  Total  <span className="text-primary">R$80,00</span>
                </div>
              </div>
              {/* div botões */}
              <div className="flex justify-center mt-2 w-full h-1/5">
                <div className="flex gap-4 items-center w-4/5 justify-center">
                  <div className="flex border text-text rounded-lg p-5 items-center h-3/5 bg-white">
                    <button onClick={openModal}>Extornar</button>
                  </div>
                  <div className="flex border-white border rounded-lg p-5 items-center h-3/5 bg-primary">
                    <button>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card pedido */}
            <div className="flex flex-col items-center justify-center rounded-lg shadow-shadow-button   w-80 h-80 bg-white ">
              {/* <CardProdutos email="matheus.siqueira100@gmail.com" products="coxinha"/> */}
              <div className="flex justify-center flex-col text-center text-text">
                <span className="text-2xl ">Pedido</span>
                <span className="text-base">de</span>
                <div className="flex items-center justify-center w-72">
                  <div className=" break-all">

                    <p className=" text-base">matheus.siqueira100@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-3   grid-rows-2 gap-4 mt-4 rounded-lg p-5 w-3/4 h-2/5 bg-grayMedium text-text">
                <div className="flex h-5/6 justify-between pb-4">
                  <div className="flex justify-between w-full grid-cols-2 pr-4 overflow-y-auto">
                    <div className="">
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                    </div>
                    <div className="">
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                    </div>

                  </div>

                </div>

                <div className="flex gap-2 items-end justify-end">
                  Total  <span className="text-primary">R$80,00</span>
                </div>
              </div>
              {/* div botões */}
              <div className="flex justify-center mt-2 w-full h-1/5">
                <div className="flex gap-4 items-center w-4/5 justify-center">
                  <div className="flex border text-text rounded-lg p-5 items-center h-3/5 bg-white">
                    <button onClick={openModal}>Extornar</button>
                  </div>
                  <div className="flex border-white border rounded-lg p-5 items-center h-3/5 bg-primary">
                    <button>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card pedido */}
            <div className="flex flex-col items-center justify-center rounded-lg shadow-shadow-button   w-80 h-80 bg-white ">
              {/* <CardProdutos email="matheus.siqueira100@gmail.com" products="coxinha"/> */}
              <div className="flex justify-center flex-col text-center text-text">
                <span className="text-2xl ">Pedido</span>
                <span className="text-base">de</span>
                <div className="flex items-center justify-center w-72">
                  <div className=" break-all">

                    <p className=" text-base">matheus.siqueira100@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-3   grid-rows-2 gap-4 mt-4 rounded-lg p-5 w-3/4 h-2/5 bg-grayMedium text-text">
                <div className="flex h-5/6 justify-between pb-4">
                  <div className="flex justify-between w-full grid-cols-2 pr-4 overflow-y-auto">
                    <div className="">
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                    </div>
                    <div className="">
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                    </div>

                  </div>

                </div>

                <div className="flex gap-2 items-end justify-end">
                  Total  <span className="text-primary">R$80,00</span>
                </div>
              </div>
              {/* div botões */}
              <div className="flex justify-center mt-2 w-full h-1/5">
                <div className="flex gap-4 items-center w-4/5 justify-center">
                  <div className="flex border text-text rounded-lg p-5 items-center h-3/5 bg-white">
                    <button onClick={openModal}>Extornar</button>
                  </div>
                  <div className="flex border-white border rounded-lg p-5 items-center h-3/5 bg-primary">
                    <button>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card pedido */}
            <div className="flex flex-col items-center justify-center rounded-lg shadow-shadow-button   w-80 h-80 bg-white ">
              {/* <CardProdutos email="matheus.siqueira100@gmail.com" products="coxinha"/> */}
              <div className="flex justify-center flex-col text-center text-text">
                <span className="text-2xl ">Pedido</span>
                <span className="text-base">de</span>
                <div className="flex items-center justify-center w-72">
                  <div className=" break-all">

                    <p className=" text-base">matheus.siqueira100@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-3   grid-rows-2 gap-4 mt-4 rounded-lg p-5 w-3/4 h-2/5 bg-grayMedium text-text">
                <div className="flex h-5/6 justify-between pb-4">
                  <div className="flex justify-between w-full grid-cols-2 pr-4 overflow-y-auto">
                    <div className="">
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                    </div>
                    <div className="">
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                    </div>

                  </div>

                </div>

                <div className="flex gap-2 items-end justify-end">
                  Total  <span className="text-primary">R$80,00</span>
                </div>
              </div>
              {/* div botões */}
              <div className="flex justify-center mt-2 w-full h-1/5">
                <div className="flex gap-4 items-center w-4/5 justify-center">
                  <div className="flex border text-text rounded-lg p-5 items-center h-3/5 bg-white">
                    <button onClick={openModal}>Extornar</button>
                  </div>
                  <div className="flex border-white border rounded-lg p-5 items-center h-3/5 bg-primary">
                    <button>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card pedido */}
            <div className="flex flex-col items-center justify-center rounded-lg shadow-shadow-button   w-80 h-80 bg-white ">
              {/* <CardProdutos email="matheus.siqueira100@gmail.com" products="coxinha"/> */}
              <div className="flex justify-center flex-col text-center text-text">
                <span className="text-2xl ">Pedido</span>
                <span className="text-base">de</span>
                <div className="flex items-center justify-center w-72">
                  <div className=" break-all">

                    <p className=" text-base">matheus.siqueira100@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-3   grid-rows-2 gap-4 mt-4 rounded-lg p-5 w-3/4 h-2/5 bg-grayMedium text-text">
                <div className="flex h-5/6 justify-between pb-4">
                  <div className="flex justify-between w-full grid-cols-2 pr-4 overflow-y-auto">
                    <div className="">
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                    </div>
                    <div className="">
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                    </div>

                  </div>

                </div>

                <div className="flex gap-2 items-end justify-end">
                  Total  <span className="text-primary">R$80,00</span>
                </div>
              </div>
              {/* div botões */}
              <div className="flex justify-center mt-2 w-full h-1/5">
                <div className="flex gap-4 items-center w-4/5 justify-center">
                  <div className="flex border text-text rounded-lg p-5 items-center h-3/5 bg-white">
                    <button onClick={openModal}>Extornar</button>
                  </div>
                  <div className="flex border-white border rounded-lg p-5 items-center h-3/5 bg-primary">
                    <button>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card pedido */}
            <div className="flex flex-col items-center justify-center rounded-lg shadow-shadow-button   w-80 h-80 bg-white ">
              {/* <CardProdutos email="matheus.siqueira100@gmail.com" products="coxinha"/> */}
              <div className="flex justify-center flex-col text-center text-text">
                <span className="text-2xl ">Pedido</span>
                <span className="text-base">de</span>
                <div className="flex items-center justify-center w-72">
                  <div className=" break-all">

                    <p className=" text-base">matheus.siqueira100@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-3   grid-rows-2 gap-4 mt-4 rounded-lg p-5 w-3/4 h-2/5 bg-grayMedium text-text">
                <div className="flex h-5/6 justify-between pb-4">
                  <div className="flex justify-between w-full grid-cols-2 pr-4 overflow-y-auto">
                    <div className="">
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                    </div>
                    <div className="">
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                    </div>

                  </div>

                </div>

                <div className="flex gap-2 items-end justify-end">
                  Total  <span className="text-primary">R$80,00</span>
                </div>
              </div>
              {/* div botões */}
              <div className="flex justify-center mt-2 w-full h-1/5">
                <div className="flex gap-4 items-center w-4/5 justify-center">
                  <div className="flex border text-text rounded-lg p-5 items-center h-3/5 bg-white">
                    <button onClick={openModal}>Extornar</button>
                  </div>
                  <div className="flex border-white border rounded-lg p-5 items-center h-3/5 bg-primary">
                    <button>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card pedido */}
            <div className="flex flex-col items-center justify-center rounded-lg shadow-shadow-button   w-80 h-80 bg-white ">
              {/* <CardProdutos email="matheus.siqueira100@gmail.com" products="coxinha"/> */}
              <div className="flex justify-center flex-col text-center text-text">
                <span className="text-2xl ">Pedido</span>
                <span className="text-base">de</span>
                <div className="flex items-center justify-center w-72">
                  <div className=" break-all">

                    <p className=" text-base">matheus.siqueira100@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-3   grid-rows-2 gap-4 mt-4 rounded-lg p-5 w-3/4 h-2/5 bg-grayMedium text-text">
                <div className="flex h-5/6 justify-between pb-4">
                  <div className="flex justify-between w-full grid-cols-2 pr-4 overflow-y-auto">
                    <div className="">
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                      <div> Coxinha</div>
                    </div>
                    <div className="">
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                      <div>1x</div>
                    </div>

                  </div>

                </div>

                <div className="flex gap-2 items-end justify-end">
                  Total  <span className="text-primary">R$80,00</span>
                </div>
              </div>
              {/* div botões */}
              <div className="flex justify-center mt-2 w-full h-1/5">
                <div className="flex gap-4 items-center w-4/5 justify-center">
                  <div className="flex border text-text rounded-lg p-5 items-center h-3/5 bg-white">
                    <button onClick={openModal}>Extornar</button>
                  </div>
                  <div className="flex border-white border rounded-lg p-5 items-center h-3/5 bg-primary">
                    <button>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal de cadastro */}
            {isOpen && (
              <div className="bg-gradient fixed inset-0 flex items-center justify-center z-50">
                <div className="grid modal-container rounded-lg p-4 min-w-[465px] h-fit text-text bg-white">
                  <div className=" modal-content g p-4 rounded-xl">
                    <span className="text-xl font-semibold my-4 ">Extornar pedido</span>
                    <form className="fle flex-col justify-between">
                      <div className="mt-1 mb-6">
                        <span className="font-extralight text-gray" htmlFor="campo">Selecione os itens do carrinho para realizar o extorno</span>
                      </div>

                      <div className='mb-5'>
                        <div class="flex items-center mb-4">
                          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Coxinha</label>
                        </div>
                        <div class="flex items-center">
                          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Coxinha</label>
                        </div>

                      </div>

                      <div className="flex justify-end h-16 gap-4 ">
                        <button
                          onClick={closeModal}
                          className="border text-text h-11 py-2 px-4 rounded ">
                          Cancelar
                        </button>
                        <button

                          type="submit"
                          className="bg-primary border-text border h-11 text-white py-2 px-4 rounded">
                          Confirmar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </Layout>
    </>
  )
};
