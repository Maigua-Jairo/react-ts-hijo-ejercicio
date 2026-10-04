import { Link } from "react-router-dom";
import { calcularDanio } from "../utils/CalcularDanio";
export const Modulo1Page = () => {
    //1) Inferencia vs anotacion
  let saga = "Saiyan Saga";//inferido
  let horasEntrenamiento:number=36;//anotado
     
  // 2) Tipos basicos
  let guerrero: string= "Goku Ultra Instinct";
  const ki: number=9001; //enteros, decimales
  const enCombate: boolean=true;


  //3)Array
  const equipoZ: string[]=["Goku","Vegeta","Gohan","Piccolo"];

  //4)Tupla
   const coordenadas: [number, number,string]=[42,17, "Hola"];

   //5) Funciones tipadas(parametro+retorno)
   //function calcularDanio(base: number, multiplicador: number): number{
    //return base * multiplicador;
   //}
   //const calcularDanioFlecha=(base: number, multiplicador: number): number =>{
    //return base * multiplicador;
   //}

   //6)Null y undefined
   let transformacion: string | null=null;
   transformacion= "Super Saiyan 3";

   let estrategia: string | undefined=undefined;
   estrategia="Fusion a Vegetto";

   //7) Anyy uknown
   let variableLibre: any= "Semilla del ermitanio";
   variableLibre=2;
   let evento: unknown= "refuerzo";
   let eventMayus: string| null= null;
   
   if(typeof evento==="string"){
     eventMayus=evento.toUpperCase();  
}

return (
 <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
    <div className="mx-auto max-w-3x1 p-8">
    <header className="mb-8 border-b border-neutral-800 pb-4">
        <Link to="/"
        className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 transition rounded-lg shadow-md"
        >
         Volver a Home
        </Link>
        <h1 className="text-3x1 font-semibold text-blue-500">
            REACT- TYPESCRIPT -MODULO 1
        </h1>
        <p className="text-sm text-neutral-400">
            Fundamentos: Tipos basicos, arrays y tuplas.
        </p>
    </header>

    <section className="mb-8">
        <h2 className="text-xl font-medium text-blue-300 mb-2">
              Inferencias y basicos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
            <div> Saga: {saga}</div>
            <div> Horas de entrenamiento: {horasEntrenamiento}</div>
            <div> Guerrero: {guerrero}</div>
            <div> Ki: {ki}</div>
            <div> En combate: {enCombate? "Si": "No"}</div>
        </div>
    </section>
    <section className="mb-8">
        <h2 className="text-xl font-medium text-blue-300 mb-2">
              Arrays
        </h2>   
        <div> Equipo Z: {equipoZ.join(", ")}</div>
        <h2 className="text-xl font-medium text-blue-300 mb-2">
              Tuplas 
        </h2>
        <div> Coordenadas [x,y,saludo]: x= {coordenadas[0]}, y= {coordenadas[1]}, saludo= {coordenadas[2]}</div>  
    </section>
    <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
              Funciones Tipadas
        </h2>   
        <div> Danio Recibido(Base 450 x mul2):</div>
        <span> {calcularDanio(450, 2)}</span>
    </section>
        <section className="mb-8">
         <h2 className="text-xl font-medium text-blue-300 mb-2">
           Any y Unknown
        </h2> 
        <div> Any: {variableLibre}</div>   
        <div> Unknown: {eventMayus}</div>      
        </section>

    </div>
 </main>
  );
};  