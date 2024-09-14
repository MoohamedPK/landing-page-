import { pricing } from "../Constants/constants";
import { motion } from "framer-motion";

function Pricing() {
  const cards = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <div>
      <div className="text-center text-3xl md:text-4xl lg:text-5xl font-medium mt-16">
        <h1>Pricing</h1>
      </div>

      <div className="main flex justify-around flex-wrap items-center my-16">
        {pricing.map((card, index) => (
          //the card
          <motion.div
            variants={cards}
            initial="hidden"
            whileInView="visible"
            className="py-6 px-11  my-8 space-x-2 border border-neutral-600 hover:shadow-2xl hover:shadow-orange-500/30 rounded-lg transition duration-300"
            key={index}
          >
            {/* children */}
            <motion.div variants={item}>
              <h1 className="text-[35px] tracking-wide font-medium">
                {card.type}
              </h1>
            </motion.div>

            <motion.div variants={item} className="my-3">
              <h1 className="font-medium text-[35px]">
                {card.price}{" "}
                <span className="text-neutral-500 text-sm font-medium">
                  /month
                </span>
              </h1>
            </motion.div>

            <motion.div variants={item}>
              {card.features.map((feat, index) => (
                <div key={index} className="flex my-7">
                  <span>{card.icon}</span>
                  <p className="ml-3">{feat}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-20 ">
              <button className="py-2 w-full text-center border border-orange-600 rounded-lg hover:bg-orange-600 transition duration-300">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
