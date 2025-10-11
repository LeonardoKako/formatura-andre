export function Footer() {
  return (
    <footer className='w-full bg-emerald-900 text-slate-200 py-8 mt-12'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col items-center gap-3 text-center'>
        <h1 className='text-xl font-semibold italic'>
          © {new Date().getFullYear()} Todos os direitos reservados.
        </h1>
        <p className='text-sm text-slate-400'>
          Desenvolvido por{" "}
          <span className='font-medium text-slate-200'>Leonardo Fleith</span>
        </p>
        <div className='flex gap-4 mt-2'>
          <a
            href='https://github.com/LeonardoKako'
            target='_blank'
            className='hover:text-emerald-400 transition-colors'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/leonardo-jo%C3%A3o-fleith/'
            target='_blank'
            className='hover:text-emerald-400 transition-colors'
          >
            LinkedIn
          </a>
          <a
            href='https://leonardo-fleith.vercel.app/'
            target='_blank'
            className='hover:text-emerald-400 transition-colors'
          >
            Portfólio
          </a>
        </div>
      </div>
    </footer>
  );
}
