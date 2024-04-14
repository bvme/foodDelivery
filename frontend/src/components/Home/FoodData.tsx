interface FoodItemType {
  id: number;
  title: string;
  category: string;
  price: any;
  img: any;
  orts: string;
}

const Data: FoodItemType[] = [
  {
    id: 1,
    title: "Өглөөний хоол",
    category: "Soup",
    price: "20,800₮",
    img: "soupp.jpeg",
    orts: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
  },
  {
    id: 2,
    title: "Зайрмаг",
    category: "Dessert",
    price: "2,800₮",
    img: "cake2.jpeg",
    orts: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
  },
  {
    id: 3,
    title: "Өглөөний хоол",
    category: "Breakfast",
    price: "2,800₮", // Corrected from "2,800₮" to 2800
    img: "pexels-julie-aagaard-2097090.jpg",
    orts: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
  },
  {
    id: 4,
    title: "Торт",
    category: "Dessert",
    price: "54,800₮", // Corrected from "54,800₮" to 54800
    img: "cake2.jpeg",
    orts: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
  },
  {
    id: 5,
    title: "Oreo shake",
    category: "Dessert",
    price: "114,800₮", // Corrected from "114,800₮" to 114800
    img: "cake2.jpeg",
    orts: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
  },
  {
    id: 6,
    title: "Чихэрлэг тахиа",
    category: "Main-Course",
    price: "114,800₮", // Corrected from "24,800₮" to 24800
    img: "beard.jpeg",
    orts: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
  },
  {
    id: 7,
    title: "Сэндвич",
    category: "Main-Course",
    price: "14,800₮", // Corrected from "14,800₮" to 14800
    img: "beard.jpeg",
    orts: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
  },
  {
    id: 8,
    title: "Apple pie",
    category: "Dessert",
    price: "34,800₮", // Corrected from "34,800₮" to 34800
    img: "cake2.jpeg",
    orts: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
  },
  {
    id: 9,
    title: "Зутан шөл",
    category: "Soup",
    price: "17,800₮", // Corrected from "17,800₮" to 17800
    img: "soupp.jpeg",
    orts: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
  },
  {
    id: 10,
    title: "Food tart",
    category: "Main-Course",
    price: "17,800₮",
    img: "beard.jpeg",
    orts: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
  },
  {
    id: 11,
    title: "Lunch",
    category: "Soup",
    price: "24,800₮",
    img: "soupp.jpeg",
    orts: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
  },
  {
    id: 12,
    title: "Chocolate",
    category: "Breakfast",
    price: "24,800₮", // Corrected from "24,800₮" to 24800
    img: "pexels-julie-aagaard-2097090.jpg",
    orts: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
  },
];

export default Data;
