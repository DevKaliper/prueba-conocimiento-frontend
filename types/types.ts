
export type InputsType ={
    name:string,
    fecha:string,
    comentarios:string

}


export interface InputInterface {
    name:string,
    fecha:string,
    comentarios:string

}


export interface FormularioProps {
    setUsers: React.Dispatch<React.SetStateAction<InputInterface[]>>;
    users: InputInterface[];
  }


