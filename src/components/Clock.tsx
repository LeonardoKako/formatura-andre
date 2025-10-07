import { useEffect, useState } from "react";

export function Clock() {
  // 📅 Defina aqui a data-alvo (formato: Ano, Mês-1, Dia, Hora, Minuto)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const targetDate = new Date(2025, 11, 12, 10, 0, 0); // 20 de dezembro de 2025 às 20h

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // 🎨 Estilos centralizados
  const cardStyle =
    "w-24 h-24 rounded-xl bg-slate-300 text-slate-800 flex flex-col items-center justify-center gap-1 shadow-md";

  return (
    <section className='bg-slate-700 flex flex-col items-center justify-center gap-12 w-full p-16'>
      <h1 className='text-4xl sm:text-5xl font-semibold text-slate-200 text-center tracking-wide'>
        CONTAGEM REGRESSIVA
      </h1>

      <div className='flex flex-wrap items-center justify-center gap-8'>
        <div className={cardStyle}>
          <p className='text-5xl font-bold'>{timeLeft.days}</p>
          <p className='text-sm font-medium tracking-wide'>DIAS</p>
        </div>

        <div className={cardStyle}>
          <p className='text-5xl font-bold'>{timeLeft.hours}</p>
          <p className='text-sm font-medium tracking-wide'>HORAS</p>
        </div>

        <div className={cardStyle}>
          <p className='text-5xl font-bold'>{timeLeft.minutes}</p>
          <p className='text-sm font-medium tracking-wide'>MINUTOS</p>
        </div>

        <div className={cardStyle}>
          <p className='text-5xl font-bold'>{timeLeft.seconds}</p>
          <p className='text-sm font-medium tracking-wide'>SEGUNDOS</p>
        </div>
      </div>
    </section>
  );
}
