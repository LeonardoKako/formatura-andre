import fotoAndre from "../assets/andre-foto-em-pé.png";

export function SaveTheDate() {
  return (
    <section
      className='flex p-8 justify-between pb-0  md:pt-20 lg:pt-14'
      id='home'
    >
      <div className='text-center flex flex-col justify-around w-[65%] sm:w-[75%] sm:py-6 md:py-10'>
        <h2 className='mt-8 text-xl sm:text-3xl md:text-4xl lg:text-6xl font-medium italic text-emerald-800'>
          FORMATURA DE MEDICINA
        </h2>
        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-medium italic text-emerald-950'>
          ANDRÉ RIBEIRO BITTENCOURT
        </h1>
        <h3 className='text-2xl sm:text-4xl lg:text-6xl font-medium italic mt-4 text-emerald-900 mb-3'>
          11 <span className='text-lg sm:text-2xl lg:text-4xl'>&</span> 12 / 12
          / 2025
        </h3>
      </div>
      <div className='w-[35%] flex items-end sm:w-[25%]'>
        <img src={fotoAndre} alt='foto andre' />
      </div>
    </section>
  );
}
