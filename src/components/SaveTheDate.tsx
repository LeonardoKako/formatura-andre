import fotoAndre from "../assets/andre-foto-em-pé.png";

export function SaveTheDate() {
  return (
    <section className='flex sm:hidden p-8'>
      <div className='text-center flex flex-col gap-8 w-[65%]'>
        <h2 className='mt-8 text-xl md:text-4xl font-medium italic text-emerald-800'>
          FORMATURA DE MEDICINA
        </h2>
        <h1 className='text-2xl md:text-5xl font-medium italic text-emerald-950'>
          ANDRÉ RIBEIRO BITTENCOURT
        </h1>
        <h3 className='text-2xl font-medium italic mt-4 text-emerald-900'>
          12 . 12 . 2025
        </h3>
      </div>
      <div className='w-[35%] flex items-center'>
        <img src={fotoAndre} alt='foto andre' />
      </div>
    </section>
  );
}
