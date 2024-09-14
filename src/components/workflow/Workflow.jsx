import image from "../../assets/pexels-pixabay-247791.jpg";
import { workFlowFeatures } from "../Constants/constants";
import { motion } from "framer-motion";

function Workflow() {
  const imgVars = {
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  const icon = {
    hidden: {
      opacity: 0,
    },
  };

  const content = {
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

  return (
    <div className="">
      <div className="text-center text-3xl md:text-4xl lg:text-5xl font-medium mt-16">
        <h1>
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            coding workflow
          </span>
        </h1>
      </div>

      <div className="md:flex md:space-x-8">
        <div className="my-16 w-full md:w-1/2">
          <motion.img
            src={image}
            variants={imgVars}
            initial="hidden"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
              },
            }}
            alt=""
            className="border border-orange-500 rounded-lg h-full object-cover"
          />
        </div>

        <div className="main my-16 w-full md:w-1/2">
          {workFlowFeatures.map((feat, index) => (
            <div className="flex my-3" key={index}>
              <motion.div
                key={index}
                className="text-green-400 mr-4"
                initial="hidden"
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                  },
                }}
                variants={icon}
              >
                <span>{feat.icon}</span>
              </motion.div>

              <motion.basediv
                className=""
                variants={content}
                initial="hidden"
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7 },
                }}
              >
                <h2>{feat.title}</h2>
                <p className="text-neutral-500 my-3">{feat.text}</p>
              </motion.basediv>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workflow;
