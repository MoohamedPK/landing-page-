import { features } from "../Constants/constants";
import { motion } from "framer-motion";

function Features() {
  return (
    <div>
      <div className="text-center text-sm uppercase text-orange-500 font-medium mt-20">
        <span>FEATURES</span>
      </div>

      <div className="text-center text-3xl md:text-4xl lg:text-5xl font-medium mt-16">
        <h1>
          Easy build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h1>
      </div>

      <motion.div className="flex flex-wrap mt-7">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            // variants={featureDivVars}
            initial={{
              opacity: 0,
              translateY: "100px",
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            className="w-full sm:w-1/2 lg:w-1/3 my-7 space-x-9 "
          >
            <div className="flex items-center py-2 my-4">
              <span className="text-orange-500 mr-3">{feature.icon}</span>
              <h1 className=" text-lg">{feature.text}</h1>
            </div>
            <div>
              <p className="text-neutral-500">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Features;
