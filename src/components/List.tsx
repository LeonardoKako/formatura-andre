import { Gift } from "./Gift";
import opala from "../assets/opala.jpeg";

export function List() {
  return (
    <section className='w-full p-8 sm:p-12'>
      <div className='w-full flex flex-wrap gap-6 md:gap-10 items-center justify-center   '>
        <Gift
          img={opala}
          title={"Passe vitalício pro mecânico do Opala"}
          valor={"RS 5.999, 99"}
          desc={
            "Pra garantir que o motor do clássico nunca te deixe na mão. Um investimento na verdadeira máquina do tempo."
          }
        />
        <Gift
          img={opala}
          title={"Passe vitalício pro mecânico do Opala"}
          valor={"RS 5.999, 99"}
          desc={
            "Pra garantir que o motor do clássico nunca te deixe na mão. Um investimento na verdadeira máquina do tempo."
          }
        />
        <Gift
          img={opala}
          title={"Passe vitalício pro mecânico do Opala"}
          valor={"RS 5.999, 99"}
          desc={
            "Pra garantir que o motor do clássico nunca te deixe na mão. Um investimento na verdadeira máquina do tempo."
          }
        />
        <Gift
          img={opala}
          title={"Passe vitalício pro mecânico do Opala"}
          valor={"RS 5.999, 99"}
          desc={
            "Pra garantir que o motor do clássico nunca te deixe na mão. Um investimento na verdadeira máquina do tempo."
          }
        />
      </div>
    </section>
  );
}
