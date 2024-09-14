import {resourcesLinks,platformLinks,communityLinks,} from "../Constants/constants";
import {motion} from 'framer-motion'

function Footer() {

    const upper = {
        hidden : {
            opacity:0,
            transition: {
                when:'afterChildren' ,
                staggerChilden: 0.3
            }
        },
        visible: {
            opacity: 1,
            transition: {
                when : 'beforeChildren',
            }
        }
    }

    const children = {
        hidden : {opacity: 0, x : -50},
        visible: {opacity: 1, x: 0}
    }
  return (
    <div>
      <div className=" md:flex md:justify-between mt-8 mb-10">
        <motion.div
          variants={upper}
          initial="hidden"
          whileInView="visible"
          className="resources"
        >
          <div>
            <h1 className="mb-5 mt-5 font-medium tracking-wide">Resources</h1>
          </div>
          {resourcesLinks.map((link, index) => (
            <motion.div
              variants={children}
              initial="hidden"
              whileInView="visible"
              className="my-2 tracking-wide font-light text-neutral-300"
              key={index}
            >
              <a className="my-1" href="#">
                {link.text}
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={upper}
          initial="hidden"
          whileInView="visible"
          className="platform"
        >
          <div>
            <h1 className="mb-5 mt-5 font-medium tracking-wide">Platform</h1>
          </div>
          {platformLinks.map((link, index) => (
            <motion.div
              variants={children}
              initial="hidden"
              whileInView="visible"
              className="my-2 tracking-wide font-light text-neutral-300"
              key={index}
            >
              <a className="my-1" href="#">
                {link.text}
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={upper}
          initial="hidden"
          whileInView="visible"
          className="community"
        >
          <div>
            <h1 className="mb-5 mt-5 font-medium tracking-wide">Community</h1>
          </div>
          {communityLinks.map((link, index) => (
            <motion.div
              variants={children}
              initial="hidden"
              whileInView="visible"
              className="my-2 tracking-wide font-light text-neutral-300"
              key={index}
            >
              <a href="#">{link.text}</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Footer