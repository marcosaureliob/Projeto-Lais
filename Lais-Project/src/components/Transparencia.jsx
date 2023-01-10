import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import PieChart from "./PieChart";

const Transparencia = () => {
  const [transparecia, setTransparecia] = useState([]);

  const getTransparecia = async () => {
    try {
      const response = await axios.get("http://localhost:3004/transparecia");
      const data = response.data;
      setTransparecia(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getTransparecia();
  }, []);

  let { usuarios_por_estado } = transparecia;

  const array = new Array();

  console.log(usuarios_por_estado);

  usuarios_por_estado &&
    usuarios_por_estado.map((value) => {
      array.push([`br-${value.estados.toLowerCase()}`, value.usuarios_totais]);
    });

  (async () => {
    const topology = await fetch(
      "https://code.highcharts.com/mapdata/countries/br/br-all.topo.json"
    ).then((response) => response.json());

    Highcharts.mapChart("container", {
      chart: {
        map: topology,
        backgroundColor: "#ffffff00",
      },

      title: {
        text: "",
      },

      subtitle: {
        text: "",
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: "bottom",
        },
      },

      colorAxis: {
        minColor: "#eee",
        maxColor: "#707070",
      },

      series: [
        {
          data: array,
          name: "Usuários por Estado",
          states: {
            hover: {
              color: "#707070",
            },
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
          },
        },
      ],
    });
  })();

  return (
    <div className="font-montserrat">
      <div>
        <div className="grid grid-cols-4 mt-[30px] font-semibold">
          <p className="text-[#808080] col-start-2 col-span-4">Início / <span className="text-[#000000]">Transparência</span></p>
        </div>
      </div>
      <div>
        <h1 className="text-center text-[#D2202C] text-[40px] font-semibold mt-7">
          Transparência
        </h1>
      </div>
      
      


      <div className="flex flex-col bg-[#F5F5F7]  pt-6 mt-2">
        <h1 className="text-center text-[#D2202C] font-bold text-[25px]">
          Dados Gerais
        </h1>
          
        <div className="flex-col lg:grid lg:grid-cols-6">
          <div className="flex-col mt-8 col-start-2">
            <div className="flex justify-center ">
              <img
                src="../../public/assets/matriculados.png"
                alt="usuario"
                className="w-[25px] h-[20px] mr-3"
              />
              <p className="text-[16px] text-[#2F2E41] font-bold">
                Total de usuários registrados
              </p>
            </div>
            <p className="text-[30px] font-semibold text-[#D2202C] mt-2 text-center">
              {transparecia?.dados_gerais?.usuarios_registrados}
            </p>
          </div>

          <div className="flex-col mt-8">
            <div className="flex justify-center">
              <img
                src="../../public/assets/Inscricoes.png"
                alt="inscricoes"
                className="w-[17px] h-[17px] mr-3"
              />
              <p className="text-[16px] text-[#2F2E41] font-bold">
                Inscrições realizadas
              </p>
            </div>
            <p className="text-[30px] font-semibold text-[#D2202C] mt-2 text-center">
              {transparecia?.dados_gerais?.incricoes_realizadas}
            </p>
          </div>

          <div className="flex-col mt-8">
            <div className="flex justify-center">
              <img
                src="../../public/assets/ativos.png"
                alt="ativos"
                className="w-[23px] h-[18px] mr-3"
              />
              <p className="text-[16px] text-[#2F2E41] font-bold">
                Cursos ativos
              </p>
            </div>
            <p className="text-[30px] font-semibold text-[#D2202C] mt-2 text-center">
              {transparecia?.dados_gerais?.cursos_ativos}
            </p>
          </div>

          <div className="flex-col mt-8">
            <div className="flex justify-center">
              <img
                src="../../public/assets/certificacao.png"
                alt="certificacao"
                className="w-[18px] h-[20px] mr-3"
              />
              <p className="text-[16px] text-[#2F2E41] font-bold">
                Direito à Certificação
              </p>
            </div>
            <p className="text-[30px] font-semibold text-[#D2202C] mt-2 text-center">
              {transparecia?.dados_gerais?.direito_certificacao}
            </p>
          </div>
          </div>



        <div className="flex-col lg:grid lg:grid-cols-6 lg:mt-2">
          <div className="flex-col mt-8 col-start-3">
            <div className="flex justify-center">
              <img
                src="../../public/assets/investimento-curso.png"
                alt="investimento"
                className="w-[26px] h-[25px] mr-3"
              />
              <p className="text-[16px] text-[#2F2E41] font-bold">
                Investimento médio por curso
              </p>
            </div>
            <p className="text-[30px] font-semibold text-[#D2202C] mt-2 text-center ">
              {transparecia?.dados_gerais?.investimento_medio_curso}
            </p>
          </div>
          <div className="flex-col mt-8">
            <div className="flex justify-center">
              <img
                src="../../public/assets/investimento-aluno.png"
                alt="aluno"
                className="w-[18px] h-[20px] mr-3"
              />
              <p className="text-[16px] text-[#2F2E41] font-bold">
                Investimento médio por aluno
              </p>
            </div>
            <p className="text-[30px] font-semibold text-[#D2202C] mt-2 text-center pb-6 ">
              {transparecia?.dados_gerais?.investimento_medio_aluno}
            </p>
          </div>
        </div>
      </div>








      

      <div className=" flex flex-col items-center md:flex md:flex-row md:justify-center mb-16 mt-8 gap-8">
        <div className="w-[375px] h-[540px] bg-[#F5F5F7] rounded-[20px] mb-6">
          <div>
            <h1 className="text-center text-[25px] mt-[30px] font-semibold text-[#F6303F]">
              Usuários por curso
            </h1>
            <div className="flex justify-center">
              <PieChart />
            </div>
          </div>
        </div>
        <div className="w-[375px] h-[540px] bg-[#F5F5F7] rounded-[20px] ">
          <div>
            <h1 className="text-center text-[25px] font-semibold text-[#F6303F]">
              Usuários por Estado
            </h1>
            <div id="container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparencia;
