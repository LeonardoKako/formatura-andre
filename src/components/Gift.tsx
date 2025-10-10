import { toast } from "react-toastify";

type Props = {
  img: string;
  title: string;
  valor: string;
  desc: string;
};

export function Gift({ img, title, valor, desc }: Props) {
  return (
    <div
      className='flex flex-col items-center justify-center gap-2 w-full ]
    border-1 border-emerald-950 rounded p-3 max-w-56 text-center'
    >
      <img src={img} alt={img} />
      <p className='text-base sm:text-lg font-bold'>{title}</p>
      <p className='text-sm sm:text-base '>{desc}</p>
      <h2 className='font-bold text-emerald-950'>{valor}</h2>
      <button
        className='w-[80%] p-2 bg-emerald-900 text-emerald-300 rounded cursor-pointer
        hover:bg-emerald-300 hover:text-emerald-950 transition font-bold text-lg'
        onClick={() => toast.success("Mensagem engraçada")}
      >
        Presentear
      </button>
    </div>
  );
}
