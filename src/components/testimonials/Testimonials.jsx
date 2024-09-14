import { testis } from "../Constants/constants";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const length = testis.length;

  function handelPrev() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  function handelNext() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const mainVar = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.3,
      },
    },

    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
  };

  const children = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div>
      <div className="text-center text-3xl md:text-4xl lg:text-5xl font-medium mt-16">
        <h1>
          What people are{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            saying
          </span>
        </h1>
      </div>

      <div className="main grid md:grid-cols-2 lg:grid-cols-3 mb-16 gap-6 mt-20">
        <div className="block justify-end text-black ">
          <button
            className="p-4 mx-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-border"
            onClick={handelPrev}
          >
            <ChevronLeft />
          </button>
          <button
            className="p-4 mx-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-border"
            onClick={handelNext}
          >
            <ChevronRight />
          </button>
        </div>
        {testis.map(
          (testi, index) =>
            index === current && (
              <motion.div
                variants={mainVar}
                initial="hidden"
                whileInView="visible"
                className="border border-neutral-600 py-3 px-4 rounded-lg "
                key={index}
              >
                <motion.div variants={children}>
                  <h1 className=" text-xl">{testi.name}</h1>
                  <p className="text-neutral-500 text-sm font-medium my-1 tracking-wide">
                    {testi.jobe}
                  </p>
                </motion.div>

                <motion.div
                  variants={children}
                  initial="hidden"
                  whileInView="visible"
                  className="pov mt-5"
                >
                  <p className="text-[15px] tracking-wider">{testi.opinion}</p>
                </motion.div>
              </motion.div>
            )
        )}
      </div>

        
    </div>
  );
}

export default Testimonials;
