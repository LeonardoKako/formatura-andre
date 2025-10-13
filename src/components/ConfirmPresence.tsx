import { toast } from "react-toastify";
import qrPix from "../assets/qrCode.png";

export function ConfirmPresence() {
  const pixKey =
    "00020126580014BR.GOV.BCB.PIX0114+55489999999995204000053039865802BR5912Andre Vale6009FLORIANOP702BR62290525PIXANDREVALE1234567890123456304ABCD";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      toast.success("Chave Pix copiada com sucesso! ", {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      });
    } catch {
      toast.error("Erro ao copiar a chave Pix ❌", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  return (
    <section
      className='w-full px-12 py-8 text-center flex flex-col items-center gap-4'
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
        className='w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-lg shadow-md border border-emerald-200'
      />

      <button
        onClick={handleCopy}
        className='bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 cursor-pointer rounded-lg font-medium md:text-lg transition-all shadow-sm'
      >
        Copiar chave Pix
      </button>

      <a
        href='https://wa.me/5548999999999?text=Olá! Quero confirmar minha presença 🎉'
        target='_blank'
        className='bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-lg md:text-xl font-medium transition-all'
      >
        Confirmar no WhatsApp
      </a>
    </section>
  );
}
