import { MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import chapeu from "../assets/andre-formatura.svg";

export function NavMobile() {
  const [nav, setNav] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 * i, duration: 0.3 },
    }),
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setNav(false); // fecha o menu ao clicar
    }
  };

  return (
    <header className='flex md:hidden w-full fixed top-0 left-0 z-50'>
      <div
        onClick={() => setNav(!nav)}
        className='fixed top-5 right-5 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md'
      >
        <MenuIcon size={40} />
      </div>

      <AnimatePresence>
        {nav && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-40 flex'
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className='flex flex-col h-full w-[70%] max-w-[300px] bg-white relative shadow-xl z-50'
            >
              <img
                src={chapeu}
                className='mt-2 ml-2'
                width={60}
                alt='Chapéu formatura'
              />
              <XIcon
                className='absolute top-3 right-3 cursor-pointer'
                size={32}
                onClick={() => setNav(false)}
              />
              <h1 className='text-center mt-3 text-xl font-bold italic border-b pb-2 mx-3'>
                Andre Bittencourt
              </h1>

              <motion.ul
                initial='hidden'
                animate='visible'
                className='flex flex-col mt-4 px-6 text-lg gap-3 text-slate-800 font-medium'
              >
                {[
                  { name: "Home", id: "home" },
                  { name: "Cerimônia", id: "cerimonia" },
                  { name: "Lista de presentes", id: "lista" },
                  { name: "Confirme sua presença", id: "confirmacao" },
                ].map((item, i) => (
                  <motion.li
                    key={item.name}
                    custom={i}
                    variants={itemVariants}
                    className='p-1 cursor-pointer hover:translate-x-1 transition-transform'
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              onClick={() => setNav(false)}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className='flex-1 bg-black absolute top-0 left-0 w-full h-full z-40'
            ></motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
