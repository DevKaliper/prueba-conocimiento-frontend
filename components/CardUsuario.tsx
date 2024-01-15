import { InputsType } from '@/types/types'
import React from 'react'

function CardUsuario({name, fecha, comentarios}:InputsType) {

    function calcularEdad(fechaNacimiento: string) {
        const fechaNac = new Date(fechaNacimiento);
        const hoy = new Date();
      
        let edad = hoy.getFullYear() - fechaNac.getFullYear();
        const mes = hoy.getMonth() - fechaNac.getMonth();
      
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
          edad--;
        }
      
        return edad;
      }
  return (
    <div className='min-w-fit rounded-xl shadow-xl  min-h-52 p-5 flex flex-col gap-3 h-fit '>
        <h2 className='font-bold text-3xl '>{name}</h2>
        <span>{fecha}, Edad: {calcularEdad(fecha)} años.</span>
        <p >comentarios: {comentarios}.</p>
       

    </div>
  )
}

export default CardUsuario