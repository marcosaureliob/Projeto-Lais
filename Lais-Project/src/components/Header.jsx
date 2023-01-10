import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="2xl:flex-row 2xl:flex  font-montserrat 2xl:justify-around mb-[30px] flex-col">
      <div className="flex justify-center">
        <img
          className="w-[200px] h-[45px] mt-[28px]"
          src="../../public/assets/AVASUS.png"
          alt="AVASUS"
        />
      </div>
      <div className="flex justify-center">
        <ul className="2xl:flex gap-[36px] mt-[38px] text-[20px] text-center font-semibold text-[#2F2E41]">
          <li className="text-[#707070]">
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"sobre"}>Sobre Nós</Link>
          </li>
          <li>
            <Link to={"modulos"}>Cursos</Link>
          </li>
          <li>
            <Link to={"parceiros"}>Parceiros</Link>
          </li>
          <li>
            <Link to={"transparencia"}>Transparência</Link>
          </li>
          <li>
            <Link to={"contato"}>Contato</Link>
          </li>
        </ul>
      </div>
      <div className="text-[20px] flex justify-center font-semibold">
        <input
          type="text"
          placeholder="Busca por um assunto..."
          className="mb-[10px] text-center text-[16px] font-normal text-[#545454] w-[350px] h-[40px]  bg-[#FFFFFF] rounded-[20px] mt-[30px] border-[2px] border-[#000000]/20"
        />
      </div>
      <div className="mt-[30px] flex justify-center">
        <button className="w-[130px] h-[40px]  bg-[#FFFFFF] border-[1px] border-[#707070] rounded-[20px] text-[#707070] font-semibold text-[20px]">
          Entrar
        </button>
        <button className="2xl:w-[180px] w-[130px]  h-[40px]  bg-[#707070]  ml-[10px] rounded-[20px] text-[#FFFFFF] font-semibold text-[20px]">
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default Header;
