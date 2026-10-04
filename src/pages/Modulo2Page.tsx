import { useState } from "react";

type ContadorProps={
    initial?: number,
    step?:number
}

export const Modulo2Page = ({initial=0, step=1}: ContadorProps) => {

   const [count, setCount]=useState<number>(initial)
   const inc= ()=>setCount((c)=>c+step)
   const dec= ()=>setCount((c)=>c-step)


    //inferido con UseState
    const [tazas, setTazas]= useState(1);   
    
    type Ingredientes= "agua" | "cafe" | "azucar"; //tipado explicito y union literal
    type RecetaCafe={
    agua?: number
    cafe?: number
    azucar?: number
  };
  type CafePreparado={
    mensaje: string
    intensidad: "suave" | "fuerte"
  };
  //Explicito con UseState -union literal
  const [intensidadUI, setIntensidadUI]= useState<CafePreparado["intensidad"]>("suave");
  //Explicito con UseState -null
  const [ultimoCafe, setUltimoCafe]=useState<CafePreparado | null>(null);
  //Explicito con UseState -undefined
  const [azucarIn, setAzucarIn]=useState<number | undefined>(undefined)

    function prepararCafe({agua=200, cafe=100, azucar=0}: RecetaCafe): CafePreparado{
    const intensidad=cafe>10? "fuerte" : "suave";
        return{
        mensaje:`Cafe preparado con ${agua}ml de agua y ${cafe}g de cafe` +(azucar?`${azucar}g de azucar`: ""),
        intensidad,
    };
   }

  //Interfaces
  //type CardProps={title: string}
  //interface CardPropsI{
    //title: string
  //}
  //interface Battle{arena: string}
  //interface Battle{ki: number}
  //const peleaOk={arena:"Namek", ki:9500}
  //Padre
   interface RecetaBase{
    agua: number,
    cafe: number
   }
   //Hijo
   interface RecetaAzucar extends RecetaBase //extends de padre=>hijo
   {azucar: number}

    interface MaquinaCafe{
        modelo: string
    }
    interface MaquinaCafe{
        aguaMax: number
    }
    const maquina: MaquinaCafe={modelo: "Kam-500", aguaMax:2000}

    interface CafePreparadoI{
        mensaje: string,
        intensidad: "suave"| "fuerte"
    }
    function prepararCafeI(receta: RecetaAzucar): CafePreparadoI{
      const intensidad: CafePreparado["intensidad"]= receta.cafe>10? "suave": "fuerte";
      return{
        mensaje:`Cafe Listo(INTF) con ${receta.agua}ml de agua, ${receta.cafe}g de cafe + ${receta.azucar}g de azucar`,
        intensidad
      };
    }

   const onCafe =()=>{
    const resultado= prepararCafe({cafe:15, azucar:5}) //sin agua definida
    alert(resultado.mensaje+ "con intensidad "+resultado.intensidad);
   };

   const onCafeInterface=()=>{
    const resultado= prepararCafeI({agua:200, cafe:15, azucar:5});
     alert(resultado.mensaje+ "con intensidad "+resultado.intensidad);
   }

   //Intersecciones
type A={nombre: string}
type B= {edad:number}
type C={state?: boolean}
type Persona= A&B&C
const juanObject: Persona={nombre:"Juan", edad:30, state:true}
    return (
    <div className="h-screen bg-amber-500 text-white flex items-center justify-center flex-col gap-4">
      <span> Modulo2Page</span>
      <button className=" bg-amber-700 rounded-2xl text-white" onClick={onCafe}>Hacer Cafe con Type</button>
      <span>Interfaces</span>
       <button className=" bg-black rounded-2xl text-white" onClick={onCafeInterface}>Hacer Cafe con Interface </button>
       <span>State tipado</span>
       {intensidadUI}
       <button onClick={()=>setIntensidadUI("fuerte")}>Cambiar estado</button>

       <span>CONTADOR</span>
       <button className="bg-neutral-800 rounded-md border-neutral-700 
       hover:bg-neutral-700 text-amber-50 px-3 py-|" onClick={dec}>-</button>
       <span className="text-center font-semibold text-white">{count}</span>
       <button className="bg-neutral-800 rounded-md border-neutral-700 
       hover:bg-neutral-700 text-amber-50 px-3 py-|" onClick={inc}>+</button>

       <h2>Interseccion(&)</h2>
        {juanObject.nombre}-{juanObject.edad}
       <pre>{JSON.stringify(juanObject, null, 2)}</pre>
    </div>
  );
};