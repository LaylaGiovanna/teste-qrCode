import Image from "next/image";
import * as React from "react";
import imageLogo from "./images/easy.png";

function Logo () {
  return <Image src={imageLogo} alt='Logo Easy4u' height={79} width={210}/>
  // <img src="./logoeasy.png" alt="Minha Imagem" className="w-{210} h-{128} bg-blue"></img>
}

export default Logo;
