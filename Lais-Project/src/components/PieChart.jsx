import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const PieChart = () => {
  const [usuariosPorCurso, setUsuariosPorCurso] = useState([]);
  const [dataPie, setDataPie] = useState([]);

  const getTransparecia = async () => {
    try {
      const response = await axios.get("http://localhost:3004/transparecia");
      const data = response.data;
      setUsuariosPorCurso(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getTransparecia();
  }, []);

  let { usuarios_por_curso } = usuariosPorCurso;

  const array = new Array();

  usuarios_por_curso &&
    usuarios_por_curso.map((value) => {
      array.push({ name: value.curso, y: value.usuarios });
    });

  const options = {
    chart: {
      type: "pie",
      backgroundColor: "#ffffff00",
    },
    title: {
      text: "",
    },

    colorAxis: {
      minColor: "#eee",
      maxColor: "#ccc",
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
      },
    },
    series: [
      {
        name: "",
        colorByPoint: true,
        data: array,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
