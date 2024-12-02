import { createSvgIcon } from "@mui/material";

// Создаем SVG-иконку с помощью функции createSvgIcon
const X = createSvgIcon(
  // SVG-код иконки
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Первый путь, создающий одну из диагональных линий "X" */}
    <path
      fillRule="evenodd" // Правила заливки для сложных форм
      clipRule="evenodd" // Правила обрезки для сложных форм
      d="M24.0527 24.8644L0.370738 0.956325L1.31802 0L25 23.9081L24.0527 24.8644Z" // Описание пути
      fill="black" // Цвет заливки
    />
    {/* Второй путь, создающий вторую диагональную линию "X" */}
    <path
      fillRule="evenodd" // Правила заливки для сложных форм
      clipRule="evenodd" // Правила обрезки для сложных форм
      d="M24.6293 1.09188L0.947279 25L0 24.0437L23.682 0.135553L24.6293 1.09188Z" // Описание пути
      fill="black" // Цвет заливки
    />
  </svg>,
  "X" // Имя иконки, которое будет использоваться в MUI
);

// Экспортируем созданную иконку для использования в других компонентах
// eslint-disable-next-line react-refresh/only-export-components
export default X;
