import React from 'react'
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div className='font-montserrat'>
        <div  className='bg-[#F6303F]'> 
            <div className='text-[24px] text-[#FFFFFF] flex justify-center font-semibold pt-[39px]'>Realização</div>
            <div className='flex flex-col items-center md:flex-row justify-evenly mt-[44px] gap-10 pb-8'>
                <img src="../../public/assets/Lais.png" alt="LAIS" className='w-[245px] h-[75px]' />
                <img src="../../public/assets/UFRN.png" alt="UFRN" className='w-[225px] h-[75px]'/>
            </div>
        </div>
        <div className='bg-[#323237]  md:flex md:justify-around pt-[63px] pb-16 gap-16'>
            <div className='flex flex-col items-center mt-8'>
                <img src="../../public/assets/Lais.png" alt="" className='w-[120px] h-[38px]' />
                <p className='text-[16px] text-[#ffffff] w-[200px] mt-[10px] text-center font-normal'>Laboratório de Inovação Tecnológica em Saúde.</p>
            </div>
            <div className='text-[#FFFFFF] flex flex-col items-center mt-8 '>
                <h1 className='text-[26px] font-semibold'>Links Úteis</h1>
                <ul className='text-[18px] font-normal'>
                    <li className='mt-[15px]'><Link to="/">Início</Link></li>
                    <li className='mt-[10px]'><Link to="sobre">Sobre nós</Link></li>
                    <li className='mt-[10px]'><Link to="modulos">Módulos</Link></li>
                    <li className='mt-[10px]'><Link to="parceiros">Parceiros</Link></li>
                    <li className='mt-[10px]'><Link to="transparencia">Transparência</Link></li>
                </ul>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-[24px] text-[#FFFFFF] font-semibold mt-8'>Redes Sociais</h1>
                <ul className='flex justify-start gap-[45px]'>
                    <li><a href='https://www.facebook.com/LAIS.HUOL/'><img src="../../public/assets/001-facebook.png" alt="fb" className=' w-[11px] h-[23px] mt-[22px]'/></a></li>
                    <li><a href='https://twitter.com/laishuol'><img src="../../public/assets/003-twitter.png" alt="tt" className='w-[26px] h-[21px] mt-[24px]'/></a></li>
                    <li><a href='https://www.instagram.com/laishuol/'><img src="../../public/assets/004-instagram.png" alt="ig" className='w-[26px] h-[26px] mt-[21px]' /></a></li>
                </ul>
            </div>      
        </div>
        <div className='bg-[#424146] flex justify-center'>           
             <p className='text-[#FFFFFF] text-center text-[18px] mt-[27px] mb-[22px] font-normal '>2022 © LAIS (HUOL). Todos os direitos reservados</p>
        </div>
    </div>
  )
}

export default Footer