import Layout from "../components/Layout";
import DinheiroIcon from "../components/icons/images/iconDinheiro.jpg";
import ImagemPao from "../components/icons/images/imagemPao.png";
import ImagemFruta from "../components/icons/images/imagemFruta.png";
import Image from "next/image";
import { IconArrowDown } from '@tabler/icons-react';
import React from "react";
import ListOrder from "../components/listPedidos";
import ImagePerfil1 from "../components/icons/images/foto-perfil-1.png";
import ImagePerfil2 from "../components/icons/images/foto-perfil-2.png";
import ImagePerfil3 from "../components/icons/images/foto-perfil-3.png";
import CardCreditos from "../components/cardCredito";
import CardProdutos from "../components/cardProdutos";
import { useState } from "react";


export default function Home() {
  function redirectPedidos() {
    var urlDestino = "/pedidos";
    window.location.assign(urlDestino);
  }

  return (
    <>
      <Layout>
        <div className="grid grid-cols-2  items-center h-full bg-second">

          {/* Div coluna 1 */}
          <div className="flex flex-col justify-around p-12 items-center h-full">
            <CardCreditos title="Crédito" subtitle="Adicione créditos ao seus usuários" titleButton="Créditos da Cantina" src={DinheiroIcon} alt="Icone de dinheiro" height={80} width={68} />

            {/* Card 2 - card de produtos */}
            <CardProdutos title="Produtos" subtitle="Adicione os produtos disponíveis" titleButton="Verificar" src1={ImagemPao} src2={ImagemFruta} src3={ImagemPao} src4={ImagemFruta} alt="Imagem de pão" titleProduto1="Bread" titleProduto2="Fruits" titleProduto3="Bread" titleProduto4="Fruits" />

          </div>


          {/* Div coluna 2 */}
          <div className="flex flex-col p-12 justify-around items-center h-full  ">
            {/* Card Pedidos */}
            <div className=" relative flex flex-col min-w-card-home-1 h-[770px] rounded-3xl shadow-shadow-button  bg-white">
              {/* Div interna do card  */}
              <div className="flex flex-col p-6 gap-12 text-text">
                {/* Div dos textos */}
                <div className="pt-2 gap-4 ">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex gap-3 items-center">
                      <div className=" h-3 w-3 bg-blue rounded-full"></div>
                      <span className="text-3xl">Pedidos</span>
                    </div>

                    <div className="top-0 flex items-center gap-3  justify-end ">
                      <button onClick={redirectPedidos} className="text-text-green">Verificar</button>
                      <div className="flex items-center justify-center h-7 w-7 bg-redTransparent rounded-full">
                        <IconArrowDown class="icon-triangle" color='#EC4C6E' width={20} height={20} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* div dos valores ganhos no dia */}
                <div className="flex items-center pl-5 gap-8 h-9">
                  <div className="">$1.400</div>

                  <div className="flex items-center border-gray text-gray pl-5 border-l-2 h-9">Hoje</div>
                </div>

                {/* div da lista de quem comprou */}
                <div className="pb-10 h-[500px] pr-6 overflow-auto flex flex-col gap-6  sticky w-full  ">

                  <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
                  <ListOrder src={ImagePerfil2} name="teste" order="w6t873467846" price="20,00" />
                  <ListOrder src={ImagePerfil3} name="teste" order="w6t873467846" price="20,00" />
                  <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
                  <ListOrder src={ImagePerfil2} name="teste" order="w6t873467846" price="20,00" />
                  <ListOrder src={ImagePerfil3} name="teste" order="w6t873467846" price="20,00" />
                  <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
                  <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
                  <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
                  <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
                  <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
                  <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
                  <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
                  <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </Layout>;
    </>
  );
};
