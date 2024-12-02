import "../Hero/Hero.scss";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="background-theme">
      {" "}
      <div className="container container-hero">
        {" "}
        <div className="hero-block">
          {" "}
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="hero-heading"
          >
            {" "}
            Кроссовки известных брендов с&nbsp;доставкой по&nbsp;России
            и&nbsp;СНГ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="hero-description"
          >
            {" "}
            Мы&nbsp;продаем кроссовки брендов Nike, Adidas, Puma, Reebok,&nbsp;{" "}
            <br /> Converse и&nbsp;многие другие по&nbsp;низким ценам
          </motion.p>
          <div className="btn-hero-block">
            {" "}
            <a href="#catalog">
              {" "}
              <motion.button
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="btn btn-hero"
              >
                {" "}
                Перейти к&nbsp;покупкам
              </motion.button>
            </a>
          </div>
        </div>
        <p className="background-text">SneakMax</p>{" "}
      </div>
    </div>
  );
}
