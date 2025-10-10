import fotoAndre from "../assets/andre-foto-em-pé.png";

export function SaveTheDate() {
  return (
    <section className='flex p-8 justify-between pb-4'>
      <div className='text-center flex flex-col gap-8 w-[65%] sm:w-[75%] '>
        <h2 className='mt-8 text-xl sm:text-3xl md:text-4xl font-medium italic text-emerald-800'>
          FORMATURA DE MEDICINA
        </h2>
        <h1 className='text-2xl sm:text-4xl md:text-5xl font-medium italic text-emerald-950'>
          ANDRÉ RIBEIRO BITTENCOURT
        </h1>
        <h3 className='text-2xl sm:text-4xl font-medium italic mt-4 text-emerald-900'>
          12 . 12 . 2025
        </h3>
      </div>
      <div className='w-[35%] flex items-center sm:w-[25%]'>
        <img src={fotoAndre} alt='foto andre' />
      </div>
    </section>
  );
}
