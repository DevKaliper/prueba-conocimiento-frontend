"use client";
import Formulario from '@/components/Formulario'
import ListCardUsuarios from '@/components/ListCardUsuarios'
import { InputInterface } from '@/types/types';
import { useState } from 'react';


export default function Home() {
  const [users, setUsers] = useState<InputInterface[]>([])
  return (
   <main className='w-full h-full flex flex-col gap-3 p-4 justify-center items-center'>
    <Formulario setUsers={setUsers} users={users} />
    <ListCardUsuarios users={users} />

   </main> 
  )
}
