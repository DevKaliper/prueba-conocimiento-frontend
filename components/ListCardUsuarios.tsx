"use client";
import React from 'react'
import CardUsuario from './CardUsuario'
import { InputInterface } from '@/types/types'

function ListCardUsuarios({users}: {users: InputInterface[] | undefined}) {
  return (
    <section className='w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:grid-cols-4 flex-wrap'>
        {
            users?.map((user, index) => <CardUsuario key={index} name={user.name} fecha={user.fecha} comentarios={user.comentarios} />)
        }
    </section>
  )
}

export default ListCardUsuarios