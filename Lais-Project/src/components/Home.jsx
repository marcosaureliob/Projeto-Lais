import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Home = () => {
  const [cursos, setCursos] = useState([]);

  async function getCursos() {
    try {
      let response = await axios.get(
        "http://localhost:3004/cursos?_sort=matriculados&_order=desc&_limit=3"
      );
      let data = response.data;

      setCursos(data);
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    getCursos();
  }, []);

  return (
    <div className="font-montserrat mt-[20px]">
        <div className='bg-[url("../../public/assets/foto.jpg")] bg-no-repeat bg-cover'>
        <div className=" flex flex-col items-center pt-72 justify-center">
            <img
              src="../../public/assets/avasusbranco.png"
              className="lg:w-[500px] lg:h-[105px] w-max"
            />
            <hr className="bg-[#FFFFFF] w-[150px] border-[1px] mt-[25px]" />
            <img
              src="../../public/assets/Conhecimento.png"
              className="w-[640px] mt-[20px] h-[36px]"
            />
          </div>
          <div className="flex justify-center gap-3 pb-24 mt-[197px]">
            <img
              src="../../public/assets/retangulo.png"
              className=" w-[53px] h-[15px] rounded-[5px]"
            ></img>
            <img
              src="../../public/assets/circulo.png"
              className="w-[16px] h-[17px]"
            ></img>
            <img
              src="../../public/assets/circulo.png"
              className="w-[16px] h-[17px]"
            ></img>         
          </div>
          <div>
          </div>       
        </div> 

        <div className="mt-[20px] 2xl:mt-28 ">
          <h1 className="text-[30px] text-center text-[#F6303F] font-semibold mb-[30px]">
            Módulos Educacionais
          </h1>
        </div>
        <div>
          <ul className="flex flex-col gap-8 xl:flex-row xl:justify-center">
            <button
              onClick={async () => {
                let response = await axios.get(
                  "http://localhost:3004/cursos?_sort=matriculados&_order=desc&_limit=3"
                );
                let data = response.data;

                setCursos(data);
              }}
              className="text-[20px] font-semibold text-[#2F2E41] focus:border-b-[3px] border-[#707070]"
            >
              Mais populares
            </button>

            <button
              onClick={async () => {
                let response = await axios.get(
                  "http://localhost:3004/cursos?_sort=avaliacao&_order=desc&_limit=3"
                );
                let data = response.data;

                setCursos(data);
              }}
              className="text-[20px] font-semibold text-[#2F2E41] focus:border-b-[3px] border-[#707070]"
            >
              Mais bem avaliados
            </button>

            <button
              onClick={async () => {
                let response = await axios.get(
                  "http://localhost:3004/cursos?_sort=criado_em&_order=desc_page=1&_limit=3"
                );
                let data = response.data;

                setCursos(data);
              }}
              className="text-[20px] font-semibold text-[#2F2E41] focus:border-b-[3px] border-[#707070] "
            >
              Mais recentes
            </button>
          </ul>
        </div>

        
        <div className="xl:mx-auto xl:w-[1110px] mt-8">
          <div className="flex flex-col gap-8">
            {cursos.length === 0 ? (
              <p>carregando...</p>
            ) : (
              cursos.map((curso) => (
                <div
                  className="flex flex-col xl:flex-row gap-6 justify-between items-center p-5 bg-[#F5F5F7] rounded-[20px]"
                  key={curso.id}
                >
                  <img
                    src={curso.capa}
                    alt="capa"
                    className="w-32 h-32 rounded-[20px]"
                  />
                  <div className="flex flex-1 flex-col pt-5 pb-5 h-full justify-between">
                    <h1 className="flex-1 text-[17px] font-semibold text-[#2F2E41]">
                      {curso.titulo}
                    </h1>
                    <p className="text-[#F6303F] text-[13px] font-semibold">
                      {curso.parceiros}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <img
                      src="../../public/assets/matriculados.png"
                      alt="matriculador"
                      className="w-[30px] h-[25px]"
                    />
                    {curso.matriculados}
                  </div>
                  <div className="flex gap-2">
                    <img
                      src="../../public/assets/duração.png"
                      alt="furacao"
                      className="w-[23px] h-[23px]"
                    />
                    {curso.duracao}
                  </div>
                  <div className="flex gap-2">
                    <FaStar size={22} color="#F6303F" />
                    <FaStar size={22} color="#F6303F" />
                    <FaStar size={22} color="#F6303F" />
                    <FaStarHalfAlt size={22} color="#F6303F" />
                    <FaRegStar size={22} color="#F6303F" />
                    
                    
                    {curso.avaliacao}
                  </div>
                  <div className="text-[#FFFFFF] font-semibold text-[20px] bg-[#707070] border-[1px] border-[#707070] rounded-[20px]">
                    <Link
                      to={`/modulo/${curso.id}`}
                      className="py-2 px-7 flex justify-center items-center whitespace-nowrap"
                    >
                      Ver módulo
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="flex justify-center mt-[60px]">
          <button className="text-[#FFFFFF] text-[25px] bg-[#707070] w-[250px] xl:w-[350px] h-[50px] rounded-[20px] font-semibold">
            <Link to={"modulos"}>Ver mais</Link>
          </button>
        </div>


        <div className="flex justify-center">
          <h1 className="text-[30px] font-semibold text-[#F6303F] mt-20">
            Parceiros
          </h1>
        </div>
        <div className="mb-[70px] bg-[#F5F5F7] mt-[30px] rounded-[20px] gap-8 pb-8 flex flex-col items-center xl:flex-row justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-[25px] text-[#000000] font-semibold mt-[26px] w-[194px] ">
              Governo do RN
            </h1>
            <p className="text-[18px] text-center	 text-[#707070] font-semibold  w-[222px] mt-[18px]">
              Governo do Estado do Rio Grande do Norte.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[25px] text-[#000000] font-semibold mt-[26px]">
              SESAP
            </h1>
            <p className="text-[18px] text-center	 text-[#707070] font-semibold mt-[18px] w-[243px]">
              Secretaria de Saúde Pública do Estado do Rio Grande do Norte.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[25px] text-[#000000] font-semibold mt-[26px] w-[75px]">
              UFRN
            </h1>
            <p className="text-[18px] text-center	 text-[#707070] font-semibold mt-[18px] w-[242px] ">
              Universidade Federal do Rio Grande do Norte.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[25px] text-[#000000] font-semibold mt-[26px] w-[75px] ]">
              HUOL
            </h1>
            <p className="text-[18px] text-center	 text-[#707070] font-semibold mt-[18px] w-[242px] ">
              Hospital Onofre Lopes: Hospital Universitário da UFRN
              (Universidade Federal do Rio Grande do Norte).{" "}
            </p>
          </div>
        </div>
    </div>
  );
};

export default Home;
