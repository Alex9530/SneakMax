import busket from "../../icons/Vector.svg";
import { useState } from "react";
import ModalBasket from "../ModalBasket/modalBasket";
import { useSelector } from "react-redux";
import { basketSelector } from "../../redux/slices/basket/basketSlice";
import "../Header/Header.scss";
import { motion } from "framer-motion";

const navItems = [
  { href: "#catalog", text: "Каталог" },
  { href: "#about", text: "О нас" },
  { href: "#choose", text: "Подбор товара" },
  { href: "#team", text: "Наша команда" },
  { href: "#questions", text: "Доставка и оплата" },
  { href: "#contacts", text: "Контакты" },
];

export default function Header() {
  const [isShow, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const basket = useSelector(basketSelector);
  const basketCount = basket.products.length;

  const handleBasketClick = () => {
    setShow((prev) => !prev);
    setIsOpen(false);
  };

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="container ">
        <nav>
          <p className="logo header-logo animated-logo">SneakMax</p>
          <ul className={isOpen ? "nav-list nav-open" : "nav-list"}>
            {navItems.map((item) => (
              <li key={item.href} className="nav-item nav-link">
                <motion.a
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 4 }}
                  href={item.href}
                  onClick={handleNavItemClick}
                >
                  {item.text}
                </motion.a>
              </li>
            ))}
            <li className="nav-item">
              <button className="btn-header" onClick={handleBasketClick}>
                <img src={busket} alt="корзина" />
                <span>{basketCount}</span>
              </button>
            </li>
          </ul>
          <button
            className={isOpen ? "lines lines-open" : "lines"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
      {isShow && <ModalBasket onClose={() => setShow(false)} />}
    </header>
  );
}
