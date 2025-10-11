import qrPix from "../assets/gifts/andre-vale.png";

export function ConfirmPresence() {
  return (
    <section
      className='w-full px-12 py-4 text-center flex flex-col items-center gap-4'
      id='confirmacao'
    >
      <h1 className='text-3xl text-emerald-950 font-semibold'>
        Confirme sua presença
      </h1>
      <p className='text-lg text-emerald-800 max-w-md'>
        Confirme sua presença e contribua com o presente via Pix! Após o
        pagamento, envie o comprovante no WhatsApp.
      </p>

      <img
        src={qrPix}
        alt='QR Code Pix'
        className='w-48 h-48 rounded-lg shadow-md border border-emerald-200'
      />

      <a
        href='https://wa.me/5548999999999?text=Olá! Quero confirmar minha presença 🎉'
        target='_blank'
        className='bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all'
      >
        Confirmar no WhatsApp
      </a>
    </section>
  );
}
