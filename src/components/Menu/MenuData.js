import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";

const data = [
  {
    title: "最新消息",
    path: "/",
    icon: <FaHome />,
  },
  {
    title: "關於我們",
    path: "/about",
    icon: <FaInfoCircle />,
  },
  {
    title: "可愛毛孩",
    path: "/cutepets",
    icon: <FaDog />,
  },
  {
    title: "物資捐贈",
    path: "/donate",
    icon: <RiShoppingBasketFill />,
  },
];

export default data;
