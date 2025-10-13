import { Gift } from "./Gift";
import qrCode from "../assets/qrCode.png";
import opala from "../assets/gifts/opala.png";
import pensando from "../assets/gifts/pensando.png";
import ancelloti from "../assets/gifts/ancelloti.png";
import andreVale from "../assets/gifts/andre-vale.png";
import inter from "../assets/gifts/inter.png";
import andreReceita from "../assets/gifts/andre-receita.png";
import avisoPix from "../assets/gifts/aviso-pix.png";
import opalaDinheiro from "../assets/gifts/opala-dinheiro.png";

export function List() {
  return (
    <section className='w-full p-8 sm:p-12 md:p-18 lg:p-30 lg:py-16' id='lista'>
      <h1 className='m-auto border-b-3 border-emerald-700 text-3xl text-emerald-700 mb-4 w-[80%] text-center'>
        SUGESTÃO DE PRESENTE PARA O FORMANDO
      </h1>
      <div className='w-full flex flex-wrap gap-6 md:gap-10 items-center md:items-start justify-center'>
        <Gift
          img={opala}
          title='Passe vitalício pro mecânico do Opala'
          valor='R$ 150,00'
          desc='Pra garantir que o motor do clássico nunca te deixe na mão. Um investimento na verdadeira máquina do tempo.'
        />

        <Gift
          img={pensando}
          title='Curso de paciência pra dono de carro antigo'
          valor='R$ 200,00'
          desc="Inclui controle respiratório, zen e um cafezinho enquanto o mecânico 'só dá uma olhadinha'."
        />

        <Gift
          img={ancelloti}
          title='Vale Ancelloti pro Inter'
          valor='R$ 250,00'
          desc='Ajude o Colorado a finalmente ter um técnico com sangue nos olhos e tática de campeão. É pelo bem da nação vermelha!'
        />

        <Gift
          img={inter}
          title='Plano de saúde emocional do torcedor colorado'
          valor='R$ 300,00'
          desc='Cobre todas as fases do sofrimento: da esperança pré-jogo ao luto pós-rodada.'
        />

        <Gift
          img={andreVale}
          title='Vale-atestado médico premium'
          valor='R$ 400,00'
          desc="Ideal pra emergências do tipo: 'não vou trabalhar porque tô me recuperando da formatura'."
        />

        <Gift
          img={andreReceita}
          title='Vale-receita personalizada'
          valor='R$ 500,00'
          desc="Pra quando o amigo pede 'só um remedinho leve' e você finge que é tudo protocolo."
        />

        <Gift
          img={opalaDinheiro}
          title='Fundo de manutenção do Opala'
          valor='R$ 600,00'
          desc='Cada real ajuda a manter viva a lenda sobre quatro rodas. Afinal, clássico não se abandona, se restaura.'
        />

        <Gift
          img={avisoPix}
          title='Pix do descanso merecido'
          valor='R$ 1.000,00'
          desc='Contribua com o sonho de todo recém-formado: parecer descansado mesmo depois de 24h de plantão.'
        />
      </div>
      <div className='p-8 pb-0 flex flex-col gap-3 items-center'>
        <img
          src={qrCode}
          alt='QR Code Pix'
          className='w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-lg shadow-md border border-emerald-200'
        />
      </div>
    </section>
  );
}
