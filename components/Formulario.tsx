"use client"

import { Label } from '@radix-ui/react-label'
import {zodResolver} from "@hookform/resolvers/zod"
import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { formSchema } from '@/validations/validationsSchemas'
import { InputInterface, InputsType } from '@/types/types'

interface FormularioProps {
    setUsers: React.Dispatch<React.SetStateAction<InputInterface[]>>;
    users: InputInterface[];
  }

const  Formulario: React.FC<FormularioProps> = ({setUsers, users}) => {
    const { register, handleSubmit, formState:{errors}} = useForm<InputsType>({
        resolver:zodResolver(formSchema)
    })
    
    console.log(errors);

  return (
  
        <form onSubmit={handleSubmit(data=>{setUsers([...users, data])})} className=' w-3/4 xl:w-1/2 h-auto flex flex-col justify-center items-center'>
            <div className=' w-full md:w-1/2 my-3'>
            <Label  htmlFor="name" className='text-sm'>Nombre Completo</Label>
            <Input id="name" type="text" placeholder="Manuel León" className='max-h-md' {...register("name")} />
            {
                errors.name?.message && <span className='text-red-500 my-2 inline-block'>{
                    errors.name.message}</span>
            }
            </div>

            <div className=' w-full md:w-1/2 my-3'>
            <Label  htmlFor="fecha" className='text-sm'>Fecha de Nacimiento</Label>
            <Input id="fecha" type="date"  min="1900-01-01" max="2024-01-15" className='max-h-md'{...register("fecha")} />
            {
                errors.fecha?.message && <span className='text-red-500 my-2 inline-block'>{
                    errors.fecha.message}</span>
            }
            </div>

            <div className=' w-full md:w-1/2 my-3'>
            <Label  htmlFor="comentario" className='text-sm'>Comentarios</Label>
            <Textarea id="comentario" className='max-h-md' {...register("comentarios")}/>
            {
                errors.comentarios?.message && <span className='text-red-500'>{errors.comentarios.message}</span>
            }
            </div>

            <Button className='w-1/2 my-3' type='submit'>Enviar</Button>
            
        </form>
   
  )
}

export default Formulario