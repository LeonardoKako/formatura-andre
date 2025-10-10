import { Gift } from "./Gift";
import opala from "../assets/gifts/opala.png";
import pensando from "../assets/gifts/pensando.png";
import ancelloti from "../assets/gifts/ancelloti.png";
import andreVale from "../assets/gifts/andre-vale.png";
import andreReceita from "../assets/gifts/andre-receita.png";
import avisoPix from "../assets/gifts/aviso-pix.png";
import opalaDinheiro from "../assets/gifts/opala-dinheiro.png";

export function List() {
  return (
    <section className='w-full p-8 sm:p-12 md:p-18 lg:p-30'>
      <div className='w-full flex flex-wrap gap-6 md:gap-10 items-center md:items-start justify-center'>
        <Gift
          img={opala}
          title='Passe vitalício pro mecânico do Opala'
          valor='R$ 5.999,99'
          desc='Pra garantir que o motor do clássico nunca te deixe na mão. Um investimento na verdadeira máquina do tempo.'
        />

        <Gift
          img={pensando}
          title='Curso de paciência pra dono de carro antigo'
          valor='R$ 399,99'
          desc="Inclui controle respiratório, zen e um cafezinho enquanto o mecânico 'só dá uma olhadinha'."
        />

        <Gift
          img={ancelloti}
          title='Vale Ancelloti pro Inter'
          valor='R$ 99,99'
          desc='Ajude o Colorado a finalmente ter um técnico com sangue nos olhos e tática de campeão. É pelo bem da nação vermelha!'
        />

        <Gift
          img={andreVale}
          title='Plano de saúde emocional do torcedor colorado'
          valor='R$ 299,99'
          desc='Cobre todas as fases do sofrimento: da esperança pré-jogo ao luto pós-rodada.'
        />

        <Gift
          img={andreReceita}
          title='Vale atestado médico premium'
          valor='R$ 149,99'
          desc="Ideal pra emergências do tipo: 'não vou trabalhar porque tô me recuperando da formatura'."
        />

        <Gift
          img={opalaDinheiro}
          title='Vale receita personalizada'
          valor='R$ 89,99'
          desc="Pra quando o amigo pede 'só um remedinho leve' e você finge que é tudo protocolo."
        />

        <Gift
          img={avisoPix}
          title='Pix do descanso merecido'
          valor='R$ 1.000,00'
          desc='Contribua com o sonho de todo recém-formado: parecer descansado mesmo depois de 24h de plantão.'
        />
      </div>
    </section>
  );
}
