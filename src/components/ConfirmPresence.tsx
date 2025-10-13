export function ConfirmPresence() {
  return (
    <section
      className='w-full px-12 py-8 text-center flex flex-col items-center gap-4'
      id='confirmacao'
    >
      <h1 className='text-3xl text-emerald-700'>CONFIRME SUA PRESENÇA</h1>
      <a
        href='https://wa.me/5548999635635?text=Olá! Quero confirmar minha presença 🎉'
        target='_blank'
        className='bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-lg md:text-xl font-medium transition-all'
      >
        Confirmar no WhatsApp
      </a>
    </section>
  );
}
