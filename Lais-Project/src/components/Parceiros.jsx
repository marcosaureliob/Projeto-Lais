import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const Parceiros = () => {

  const [parceiros, setParceiros] = useState([])
  const [page, setPage] = useState(1)
  const [numberPage, setNumberPage] = useState(null)
  const limitPerPage = 6;
  const ind = page * limitPerPage
  const buttonsPage = []
  const maxPages = numberPage / limitPerPage


  for ( let counter = 1; counter <= maxPages; counter++) {
    buttonsPage.push(counter)
  }
  

  const getParceiros = async() => {
    try {
      const response = await axios.get(`http://localhost:3004/parceiros?_page=${page}&_limit=${limitPerPage}`); 
      const data = response.data;
      
      setParceiros(data);
      setNumberPage(response.headers.get('X-Total-Count'));
    }
    catch (error) {
      console.log("error");
    }

  }
 

  useEffect(() =>{

   getParceiros();

  }, [page])
  
  return (
    <div>
      <div className='grid grid-cols-4'>
        <ul className='col-span-2 col-start-2  flex mt-[30px] font-semibold'>
          <li className='text-[#808080] mr-[5px]'>Início /</li>
          <li className='text-[#000000]'>Parceiros</li>
        </ul>
      </div>
      <div className='grid grid-cols-4'>
        <h1 className='col-span-2 col-start-2 mt-[30px] mb-[30px] text-[#D2202C] text-[40px] font-semibold'>Nossos Parceiros</h1>
      </div>
      <div className='grid grid-cols-4'>
        <p className='col-span-2 col-start-2 font-normal mb-[30px] text-[#2F2E41] text-[16px]'> {ind} de {numberPage} resultados</p>
      </div>
      
      <div className=' 2xl:ml-[405px] flex gap-[30px] mb-[80px] justify-center flex-wrap 2xl:w-[1110px]'>
        {parceiros.length === 0 ? (
          <p>carregando...</p>
        ) : (
          parceiros.map((parceiro) =>(
            <div className='parceiro' key={parceiro.id}>              
              <img src={parceiro.capa} alt="capa" className='w-[350px] h-[200px] rounded-[20px] gap-8' />
              <hr className='w-[345px] mt-[15px] bg-[#F6303F] h-[2px]'/>       
              <h1 className='text-[25px] text-[#2F2E41] font-semibold text-center mt-[10px] w-[345px]'>{parceiro.titulo}</h1>
            </div>
            
          ))
        )}
      </div>
      
      <div className='flex mb-[195px] justify-center'>
      { buttonsPage.map((value) => (
        value == page ? <button type='button' className=' border-[1px] border-[#D9D9D9] w-[40px] h-[40px] bg-red-600 text-[#545454] text-[16px] font-semibold' onClick={() => setPage(value)}> {value} </button> :  (value - 4 > page || value + 4 < page) ? null : <button type='button' className=' border-[1px] border-[#D9D9D9] w-[40px] h-[40px] bg-[#FAFAFA] text-[#545454] text-[16px] font-semibold' onClick={() => setPage(value)}> {value} </button>
      ))}
      </div>   
    </div>
  )
}

export default Parceiros

//criar um for -> pra cada index preciso criar um button, o valor do button vai ser index + 1