import { Location } from "./Location";

export function Locations() {
  return (
    <section id='cerimonia' className='w-full'>
      <Location
        title='MISSA DE FORMATURA'
        desc='Basílica Santuário do Sagrado Coração Misericordioso de Jesus. Horário: X'
        src='https://www.google.com/maps?q=Basílica+Santuário+do+Sagrado+Coração+Misericordioso+de+Jesus,+Içara+-+SC&z=14&output=embed'
      />

      <Location
        title='COLAÇÃO DE GRAU'
        desc='AM Master Hall. Horário: X'
        src='https://www.google.com/maps?q=AM+Master+Hall,+Criciúma+-+SC&z=14&output=embed'
      />

      <Location
        title='RECEPÇÃO'
        desc='Espaço Flor de Lis. Horário: X'
        src='https://www.google.com/maps?q=Espaço+Flor+de+Lis,+Criciúma+-+SC&z=14&output=embed'
      />
    </section>
  );
}
