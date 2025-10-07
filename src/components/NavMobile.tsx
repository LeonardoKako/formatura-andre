import { MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import chapeu from "../../public/andre-formatura.svg";

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

  return (
    <header className='flex md:hidden w-full'>
      <div
        onClick={() => setNav(true)}
        className='absolute top-5 right-5 z-20 cursor-pointer'
      >
        <MenuIcon size={48} />
      </div>

      <AnimatePresence>
        {nav && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-10 flex'
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className='flex flex-col h-full w-[70%] max-w-[300px] bg-white relative shadow-xl'
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
                {["Home", "Cerimônia", "Confirme sua presença"].map(
                  (item, i) => (
                    <motion.li
                      key={item}
                      custom={i}
                      variants={itemVariants}
                      className='p-1 cursor-pointer hover:translate-x-1 transition-transform'
                    >
                      {item}
                    </motion.li>
                  )
                )}
              </motion.ul>
            </motion.div>

            <motion.div
              onClick={() => setNav(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='flex-1 bg-black'
            ></motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
