type Props = {
  title: string;
  desc: string;
  src: string;
};

export function Location({ title, desc, src }: Props) {
  return (
    <div className='w-full p-8 sm:p-12 md:px-20 text-center items-center flex flex-col gap-3'>
      <h1 className='text-3xl text-emerald-700'>{title}</h1>
      <p className='text-xl text-emerald-950'>{desc}</p>

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
