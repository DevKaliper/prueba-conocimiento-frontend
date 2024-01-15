"use client";
import Formulario from '@/components/Formulario'
import ListCardUsuarios from '@/components/ListCardUsuarios'
import { InputInterface } from '@/types/types';
import { useState,useEffect } from 'react';



export default function Home() {
   // Inicializar el estado con los datos de sessionStorage o con un array vacío
   const [users, setUsers] = useState<InputInterface[]>(() => {
    const datosGuardados = sessionStorage.getItem('usuarios');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  // Guardar en sessionStorage cuando users cambie
  useEffect(() => {
    sessionStorage.setItem('usuarios', JSON.stringify(users));
  }, [users]);
  
  return (
   <main className='w-full h-full flex flex-col gap-3 p-4 justify-center items-center relative'>
    <Formulario setUsers={setUsers} users={users} />
    <ListCardUsuarios users={users} />
 

   </main> 
  )
}
