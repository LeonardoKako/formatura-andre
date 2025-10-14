type Props = {
  title: string;
  desc: string;
  src: string;
  date: string;
  hour: string;
};

export function Location({ title, desc, src, date, hour }: Props) {
  return (
    <div className='w-full p-8 sm:p-12 md:px-20 text-center items-center flex flex-col gap-3'>
      <h1 className='text-3xl text-emerald-700'>{title}</h1>
      <div className='flex flex-col gap-1 md:flex-row md:gap-2 items-center'>
        <p className='text-xl text-emerald-950'>{desc}</p>
        <span className='hidden md:flex'>-</span>
        <p className='text-xl text-emerald-950'>
          Data: <span className='text-[17px] font-bold'>{date}</span>
        </p>
        <span className='hidden md:flex'>-</span>
        <p className='text-xl text-emerald-950'>
          Horário: <span className='text-[17px] font-bold'>{hour}</span>
        </p>
      </div>
      <p></p>
      <div className='w-full lg:w-[80%] h-0 pb-[70%] sm:pb-[50%] relative'>
        <iframe
          className='absolute top-0 left-0 w-full h-full rounded-lg shadow-lg'
          src={src}
          loading='lazy'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
