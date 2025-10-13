import { toast } from "react-toastify";

type Props = {
  img: string;
  title: string;
  valor: string;
  desc: string;
};

export function Gift({ img, title, valor, desc }: Props) {
  const handleGift = (title: string) => {
    const messages: Record<string, string> = {
      "Passe vitalício pro mecânico do Opala":
        "🧰 Mecânico ativado! Que nunca falte graxa e paciência pro Opalão!",
      "Curso de paciência pra dono de carro antigo":
        "🧘 Respira fundo… o carro vai pegar (uma hora dessas).",
      "Vale Ancelloti pro Inter":
        "⚽ Transferência quase confirmada! O Inter agradece sua fé inabalável!",
      "Plano de saúde emocional do torcedor colorado":
        "💔 Terapia aprovada! Força, guerreiro vermelho. Domingo tem mais sofrimento!",
      "Vale-atestado médico premium":
        "🩺 Atestado emitido! Motivo: formatura, ressaca e orgulho misturados.",
      "Vale-receita personalizada":
        "💊 Receita enviada! Pode conter traços de sarcasmo e cafeína.",
      "Fundo de manutenção do Opala":
        "🚗 Cada real é um parafuso novo! O Opala agradece por continuar rugindo!",
      "Pix do descanso merecido":
        "😴 Descanso liberado! Que o sono venha antes do próximo plantão.",
    };

    const msg = messages[title] || "🎁 Presente enviado com sucesso!";
    toast.success(msg, {
      position: "top-center",
      autoClose: 2500,
      theme: "light",
    });
  };

  return (
    <div
      className='flex flex-col items-center justify-between gap-2 w-full sm:h-[440px]
    border-1 border-emerald-950 rounded p-3 max-w-56 text-center'
    >
      <div className='flex flex-col justify-around h-full'>
        <img src={img} alt={img} className='w-full' />
        <p className='text-base sm:text-lg font-bold'>{title}</p>
        <p className='text-sm sm:text-base '>{desc}</p>
        <h2 className='font-bold text-emerald-950'>{valor}</h2>
      </div>
      <button
        className='w-[80%] p-2 bg-emerald-900 text-emerald-300 rounded cursor-pointer
        hover:bg-emerald-300 hover:text-emerald-950 transition font-bold text-lg'
        onClick={() => handleGift(title)}
      >
        Presentear
      </button>
    </div>
  );
}
