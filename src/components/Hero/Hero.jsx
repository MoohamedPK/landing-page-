import { motion } from "framer-motion";

function Hero() {
  const text = " VirtualR build tools for developers";

  const pVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const spanVar = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
    },
  };

  return (
    <div className="hero flex flex-col justify-ceter items-center mt-20">
      <motion.div
        initial={{
          opacity: 0,
          translateY: "-150px",
        }}
        whileInView={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <motion.h1
          variants={pVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl  font-medium md:text-5xl text-center"
        >
          {text.split("").map((charachter, index) => (
            <motion.span key={index} variants={spanVar}>
              {charachter}
            </motion.span>
          ))}
        </motion.h1>
        <p className="mt-8 md:max-w-4xl text-center text-neutral-400">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools.
          <br /> Get started today and turn your imagination into immersive
          reality!
        </p>
      </motion.div>

      <div className="flex flex-col items-center md:flex md:items-center mt-10">
        <motion.div
          className="sing-in md:mx-2  my-3"
          initial={{
            opacity: 0,
            translateX: "-180px",
          }}
          whileInView={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <button className="border border-white px-6 py-2 rounded-lg ">
            Documentation
          </button>
        </motion.div>

        <motion.div
          className="create-acc md:mx-2 my-3"
          initial={{
            opacity: 0,
            translateX: "-150px",
          }}
          whileInView={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <button className="border border-black px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-800">
            Start For Free
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;

// VirtualR build tools{" "}
//           <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
//             for <br /> developers
