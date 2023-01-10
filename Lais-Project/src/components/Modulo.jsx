import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FaRegStar, FaStar } from "react-icons/fa";

const Modulo = () => {
  const [curso, setCurso] = useState([])
  const { id } = useParams()

  async function getCurso() {
    try {
      let response = await axios.get(`http://localhost:3004/cursos/${id}`)
      let data = response.data
      setCurso(data)
    }
    catch (error) {
      console.log("error")
    }
  }

  useEffect(() =>{
   getCurso();
  }, [])

  return (
    <div className='font-montserrat'>
      <div className='bg-[url(../../public/assets/bg-modulo.png)] bg-center bg-cover '>
      <div>
        <ul className='pt-[30px] text-[16px] font-semibold'>
          <li className='text-center text-[#ffffff]'>Início / Cursos / Módulos / {curso.titulo}</li>
        </ul>
      </div>
      <div className=' flex flex-col'> 
        <h1 className='text-center mt-8	md:text-[40px] md:mt-16 text-[#FFFFFF] font-bold'>{curso.titulo}</h1>
        <p className='text-center	mt-8 text-[#FFFFFF] md:text-[25px] font-semibold'>{curso.parceiros}</p>
      </div>
      </div >
      <div className='mt-[30px]'>
        <h1 className='text-[#D2202C] text-center text-[22px] md:text-[40px] font-semibold'>Informações Gerais do Curso</h1>
      </div>

      <div className='mt-[40px] gap-8 flex flex-col items-center lg:flex lg:flex-row lg:justify-center'>
        <div className='flex'> 
           <img src="../../public/assets/duração.png" className='w-[25px] h-[25px] mr-[12px]' />
        <p className='text-[20px] text-[#2F2E41] font-bold '>{curso.duracao}oras</p>
        </div>
        <div className='flex'>
          <img src="../../public/assets/calendario.png" className='w-[22px] h-[22px] mr-[12px]' />
        <p className='text-[20px] text-[#2F2E41] font-bold '>Desde {curso.criado_em}</p>
        </div>
        <div className='flex'>
          <img src="../../public/assets/matriculados.png" className='w-[29px] h-[23px] mr-[12px]' />
        <p className='text-[20px] text-[#2F2E41] font-bold '>{curso.matriculados} alunos matriculados</p>
        </div>
        <div className="flex gap-2 mt-1">
                    <FaStar size={20} color="#F6303F" />
                    <FaStar size={20} color="#F6303F" />
                    <FaStar size={20} color="#F6303F" />
                    <FaStar size={20} color="#F6303F" />
                    <FaRegStar size={20} color="#F6303F" />
                    
                <div className='lg:text-[20px] text-[#2F2E41] font-bold'>{curso.avaliacao} ({curso.numero_avaliacoes} avaliações)</div>
              </div>
      </div>

      <div className='flex flex-col items-center '>
        <h1 className='text-[25px] text-[#D2202C] font-semibold mt-[40px] text-center'>Sobre o curso</h1>
        <p className=' mt-[30px] lg:w-[1110px] text-[16px] text-[#000000] text-justify'>{curso.sobre}</p>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-[25px] text-[#D2202C] font-semibold mt-[30px] text-center'>Objetivos</h1>
        <p className=' mt-[30px] text-[16px] font-bold text-[#2F2E41]'>Objetivo Geral</p>
        <p className=' mt-[15px] lg:w-[1110px] text-[16px] text-[#000000] text-justify'>{curso.objetivo_geral}</p>
      </div>
      <div className='flex flex-col items-center'>
        <p className=' mt-[30px] text-[16px] font-bold text-[#2F2E41]'>Objetivo Específicos</p>
        <p className=' mt-[15px] lg:w-[1110px] text-[16px] text-[#000000] text-justify'>{curso.objetivo_especifico}</p>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-[25px] text-[#D2202C] font-semibold mt-[30px] text-center'>Recursos educacionais</h1>
        <p className=' mt-[30px] lg:w-[1110px] text-[16px] text-[#000000] text-justify'>{curso.recursos_educacionais}</p>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-[25px] text-[#D2202C] font-semibold mt-[50px] mb-[30px] text-center'>Créditos</h1>
        <div className='flex flex-col items-center lg:grid lg:grid-cols-5 lg:w-[1110px] lg:h-[280px] lg:gap-[38px] mb-[100px]'>
          {curso?.creditos?.map((parceiro, index) => {
            return <img key={index} src={parceiro.capa} alt={parceiro.titulo} />
          })}
        </div>
      </div>
      
    </div>

  )
}

export default Modulo