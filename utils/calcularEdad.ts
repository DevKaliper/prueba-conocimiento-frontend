export function calcularEdad(fechaNacimiento: string) {
    const fechaNac = new Date(fechaNacimiento);
    const hoy = new Date();
  
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
  
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
  
    return edad;
  }