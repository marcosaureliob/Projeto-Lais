import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaRegStar, FaStar } from "react-icons/fa";


const Modulos = () => {
  
  const [cursos, setCursos] = useState([])
  const [page, setPage] = useState(1)
  const [numberPage, setNumberPage] = useState(null)
  const limitPerPage = 6;
  const ind = page * limitPerPage
  const buttonsPage = []
  const maxPages = numberPage / limitPerPage

  for ( let counter = 1; counter <= maxPages; counter++) {
    buttonsPage.push(counter)
  }
   

  async function getCursos() {
    try {
     const response = await axios.get(`http://localhost:3004/cursos?_sort=matriculados&_order=desc&_page=${page}&_limit=${limitPerPage}`)
     const data = response.data
      

      setCursos(data)
      setNumberPage(response.headers.get('X-Total-Count'));

    }
    
    catch (error) {
      console.log("error")
    }

  }

  useEffect(() =>{
   getCursos();

  }, [page])

  
 
  return (
    <div className='font-montserrat'>
      <div>
        <ul className='grid grid-cols-6 mt-8 font-semibold'>
          <li className='text-[#808080] col-start-2 col-span-4'>Início / Cursos / <span  className='text-[#000000]'>Módulos</span></li>
        </ul>
      </div>
      <div>
        <h1 className='text-center mt-10 text-[#D2202C] text-[40px] font-semibold'>Módulos Educacionais</h1>
      </div>
      <div>
        <ul className='md:flex md:flex-row flex flex-col items-center gap-8 md:justify-center text-[20px] mt-10 font-semibold text-[#2F2E41] mb-10'>
          <li>
            <button onClick={ async () => {
               let response = await axios.get("http://localhost:3004/cursos?cateroria=Covid 19&_limit=6")
               let data = response.data
               setCursos(data)
            }} className='focus:text-[#707070] focus:border-b-[3px] border-[#707070]'>Covid 19
            </button>
            </li>
          <li>
            <button onClick={ async () => {
               let response = await axios.get("http://localhost:3004/cursos?cateroria=Síflis e outras ist&_limit=6")
               let data = response.data
               setCursos(data)
            }} className='focus:text-[#707070] focus:border-b-[3px] border-[#707070]'>Sífilis e outras Ist's
            </button>
            </li>
          <li><button onClick={ async () => {
               let response = await axios.get("http://localhost:3004/cursos?cateroria=Preceptoria&_limit=6")
               let data = response.data
               setCursos(data)
            }}
           className='focus:text-[#707070] focus:border-b-[3px] border-[#707070]'>Preceptoria
           </button>
           </li>
          <li><button onClick={ async () => {
               let response = await axios.get("http://localhost:3004/cursos?cateroria=Doenças raras&_limit=6")
               let data = response.data
               setCursos(data)
            }} 
          className='focus:text-[#707070] focus:border-b-[3px] border-[#707070]'>Doenças raras
          </button></li>
          <li><button onClick={ async () => {
               let response = await axios.get("http://localhost:3004/cursos?cateroria=WebPalestras&_limit=6")
               let data = response.data
               setCursos(data)
            }} 
           className='focus:text-[#707070] focus:border-b-[3px] border-[#707070]'>Web Palestras
           </button>
           </li>
          <li><button onClick={ async () => {
               let response = await axios.get("http://localhost:3004/cursos?cateroria=Sistema prisional&_limit=6")
               let data = response.data
               setCursos(data)
            }} className='focus:text-[#707070] focus:border-b-[3px] border-[#707070]'>Sistemas prisional
            </button>
            </li>
          <li><button onClick={ async () => {
               let response = await axios.get("http://localhost:3004/cursos?cateroria=OPAS&_limit=6")
               let data = response.data
               setCursos(data)
            }} className='focus:text-[#707070] focus:border-b-[3px] border-[#707070]'>OPAS</button> </li>
        </ul>
      </div>
      <div className='flex justify-center md:grid md:grid-cols-9 md:col-span-3'>
        <p className='md:col-start-3 font-normal mb-8 text-[#2F2E41] text-[16px]'>{ind} de {numberPage} resultados</p>
      </div>
      

          <div className='flex flex-col items-center md:items-start md:flex md:flex-row 2xl:ml-[405px] md:flex-wrap'>
            {cursos.length === 0 ? (
              <p>carregando...</p>
            ) : (
               cursos.map((curso) => (
                <div className='curso' key={curso.id}> 
                <div className='mr-[30px] w-[350px]'>
                <img src={curso.capa} className='w-[350px] h-[200px] rounded-[20px] mb-[10px]' />
                <h1 className='w-[350px] text-[25px] text-[#2F2E41] font-semibold mb-[10px]'>{curso.titulo}</h1>
                <p className='font-semibold text-[13px] mb-[10px] w-[350px] text-[#F6303F]'>{curso.parceiros}</p>
                <div className='flex'>
                  <img src="../../public/assets/matriculados.png" className='w-[24px] h-[19px] mr-[10px]' />
                <p className='font-normal text-[13px] text-[#2F2E41] mr-[15px]'>{curso.matriculados}</p>
                <img src="../../public/assets/duração.png" className='w-[18px] h-[18px] mr-[10px]' />
                <p className='font-normal text-[13px] text-[#2F2E41] mr-[20px]'>{curso.duracao}</p>
                <div className="flex gap-2">
                    <FaStar size={16} color="#F6303F" />
                    <FaStar size={16} color="#F6303F" />
                    <FaStar size={16} color="#F6303F" />
                    <FaStar size={16} color="#F6303F" />
                    <FaRegStar size={16} color="#F6303F" />
                    
                    <div className='text-13px text-[#2F2E41]'>{curso.avaliacao}</div>
                  </div>
                </div>
                <p className='text-justify font-medium text-[15px] text-[#2F2E41]'>{curso.resumo}</p>
                </div>
                <button className='text-[#707070] text-[18px] font-semibold mb-10 ml-[260px]'>
                  <Link to={`/modulo/${curso.id}`} className='mt-[5px]'>Ver curso</Link>
                </button>
                  </div>
               ))
            )}
          </div>
     
        <div className='flex mb-32 mt-[80px] justify-center'>
      { buttonsPage.map((value) => (
        value == page ? <button type='button' className=' border-[1px] border-[#D9D9D9] w-[40px] h-[40px] bg-red-600 text-[#545454] text-[16px] font-semibold' onClick={() => setPage(value)}> {value} </button> :  (value - 4 > page || value + 4 < page) ? null : <button type='button' className=' border-[1px] border-[#D9D9D9] w-[40px] h-[40px] bg-[#FAFAFA] text-[#545454] text-[16px] font-semibold' onClick={() => setPage(value)}> {value} </button>
      ))}
      </div>
    </div>
  )
}

export default Modulos