"use client";
import Formulario from '@/components/Formulario'
import ListCardUsuarios from '@/components/ListCardUsuarios'
import { InputInterface } from '@/types/types';
import { useState,useEffect } from 'react';



export default function Home() {

 const [users, setUsers] = useState<InputInterface[]>([]);

 useEffect(() => {
   // Esta función se ejecutará solo en el cliente
   // es decir, cuando se renderice en el navegador y no en el servidor de Next.js (SSR)
   const cargarUsuarios = () => {
     const datosGuardados = sessionStorage.getItem('usuarios');
     if (datosGuardados) {
       setUsers(JSON.parse(datosGuardados));
     }
   };

   if (typeof window !== "undefined") {
     cargarUsuarios();
   }
 }, []);

 useEffect(() => {
   // Esto buscará el sessionStorage y guardará los datos  en caso de que existan

   const guardarUsuarios = () => {
     sessionStorage.setItem('usuarios', JSON.stringify(users));
   };

   if (typeof window !== "undefined") {
     guardarUsuarios();
   }
 }, [users]);

  return (
   <main className='w-full h-full flex flex-col gap-3 p-4 justify-center items-center relative'>
    <Formulario setUsers={setUsers} users={users} />
    <ListCardUsuarios users={users} />
 

   </main> 
  )
}
