import { LucideIcon, Coffee, Thermometer, Droplets, Zap, Leaf, GlassWater, Utensils } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  items: MenuItem[];
}

export const MENU_DATA: Category[] = [
  {
    id: 'espresso-bar',
    name: 'Espresso Bar',
    color: '#3E2723',
    items: [
      { id: 'eb1', name: 'Single Espresso', price: 3000 },
      { id: 'eb2', name: 'Double Espresso', price: 4000 },
      { id: 'eb3', name: 'Espresso Macchiato', price: 4000 },
      { id: 'eb4', name: 'Americano', price: 4500 },
      { id: 'eb5', name: 'Cortado', price: 5000 },
      { id: 'eb6', name: 'Flat White', price: 4500 },
      { id: 'eb7', name: 'Cappuccino', price: 5000 },
      { id: 'eb8', name: 'Caffe Latte', price: 5000 },
      { id: 'eb9', name: 'Affogato Espresso', price: 5000 },
    ]
  },
  {
    id: 'flavored-latte',
    name: 'Flavored Latte',
    color: '#795548',
    items: [
      { id: 'fl1', name: 'Spanish Latte', price: 5500 },
      { id: 'fl2', name: 'Vanilla Latte', price: 5500 },
      { id: 'fl3', name: 'Caramel Latte', price: 5500 },
      { id: 'fl4', name: 'Salted Caramel Latte', price: 5500 },
      { id: 'fl5', name: 'Hazelnut Latte', price: 5500 },
      { id: 'fl6', name: 'Coconut Latte', price: 5500 },
      { id: 'fl7', name: 'Toffee Nut Latte', price: 5500 },
      { id: 'fl8', name: 'Cinnamon Latte', price: 5500 },
    ]
  },
  {
    id: 'mocha',
    name: 'Mocha',
    color: '#4E342E',
    items: [
      { id: 'm1', name: 'Dark Mocha', price: 5500 },
      { id: 'm2', name: 'White Mocha', price: 5500 },
      { id: 'm3', name: 'Caramel Mocha', price: 5500 },
    ]
  },
  {
    id: 'traditional',
    name: 'Traditional',
    color: '#263238',
    items: [
      { id: 't1', name: 'Turkish Coffee', price: 3000 },
      { id: 't2', name: 'Kazwan Coffee', price: 3000 },
      { id: 't3', name: 'Karak Tea', price: 4000 },
    ]
  },
  {
    id: 'hot-drinks',
    name: 'Hot Drinks',
    color: '#8D1F17',
    items: [
      { id: 'hd1', name: 'Hot Chocolate', price: 5000 },
      { id: 'hd2', name: 'Hot Chocolate Mint', price: 5500 },
      { id: 'hd3', name: 'Hot Chocolate Toffee Nut', price: 5500 },
      { id: 'hd4', name: 'Hot Chocolate Hazelnut', price: 5500 },
      { id: 'hd5', name: 'Hot Chocolate Cookies', price: 5500 },
      { id: 'hd6', name: 'Hot Milk', price: 2500 },
      { id: 'hd7', name: 'Hot Milk Vanilla', price: 3000 },
      { id: 'hd8', name: 'Hot Milk Caramel', price: 3000 },
      { id: 'hd9', name: 'Hot Milk Honey', price: 3000 },
    ]
  },
  {
    id: 'iced-drinks',
    name: 'Iced Drinks',
    color: '#1A3F5E',
    items: [
      { id: 'id1', name: 'Iced Americano', price: 5500 },
      { id: 'id2', name: 'Iced Dark Mocha', price: 6000 },
      { id: 'id3', name: 'Iced White Mocha', price: 6000 },
      { id: 'id4', name: 'Iced Caramel Mocha', price: 6000 },
      { id: 'id5', name: 'Iced Caramel Macchiato', price: 6500 },
      { id: 'id6', name: 'Iced Cappuccino', price: 5500 },
      { id: 'id7', name: 'Iced Latte', price: 5500 },
      { id: 'id8', name: 'Iced Spanish Latte', price: 6000 },
      { id: 'id9', name: 'Iced Vanilla Latte', price: 6000 },
      { id: 'id10', name: 'Iced Caramel Latte', price: 6000 },
      { id: 'id11', name: 'Iced Salted Caramel Latte', price: 6000 },
      { id: 'id12', name: 'Iced Hazelnut Latte', price: 6000 },
      { id: 'id13', name: 'Iced Coconut Latte', price: 6000 },
      { id: 'id14', name: 'Iced Cinnamon Latte', price: 6000 },
      { id: 'id15', name: 'Iced Cookies Latte', price: 6000 },
      { id: 'id16', name: 'Iced Rose Latte', price: 6000 },
      { id: 'id17', name: 'Iced Pink Latte', price: 6000 },
      { id: 'id18', name: 'Iced Coffee Caramel', price: 6000 },
      { id: 'id19', name: 'Iced Coffee Toffee Nut', price: 6000 },
      { id: 'id20', name: 'Iced Coffee Irish', price: 6000 },
    ]
  },
  {
    id: 'v60-speciality',
    name: 'V60 Speciality',
    color: '#2E4C31',
    items: [
      { id: 'v1', name: 'Hot Ethiopian V60', price: 5500 },
      { id: 'v2', name: 'Hot Colombia V60', price: 5500 },
      { id: 'v3', name: 'Hot Brazil V60', price: 5500 },
      { id: 'v4', name: 'Iced Ethiopia V60', price: 5500 },
      { id: 'v5', name: 'Iced Colombia V60', price: 5500 },
      { id: 'v6', name: 'Iced Brazil V60', price: 5500 },
    ]
  },
  {
    id: 'matcha',
    name: 'Matcha',
    color: '#4B5320',
    items: [
      { id: 'ma1', name: 'Hot Matcha Latte', price: 7000 },
      { id: 'ma2', name: 'Hot White Chocolate Matcha Latte', price: 7500 },
      { id: 'ma3', name: 'Hot Vanilla Matcha Latte', price: 7500 },
      { id: 'ma4', name: 'Iced Matcha Latte', price: 7500 },
      { id: 'ma5', name: 'Iced Strawberry Matcha Latte', price: 8000 },
      { id: 'ma6', name: 'Iced Moon Matcha Latte', price: 8000 },
    ]
  },
  {
    id: 'frappe',
    name: 'Frappe',
    color: '#6D4C41',
    items: [
      { id: 'fr1', name: 'Classic Coffee', price: 7000 },
      { id: 'fr2', name: 'Chocolate', price: 7000 },
      { id: 'fr3', name: 'Caramel', price: 7000 },
      { id: 'fr4', name: 'Vanilla', price: 7000 },
      { id: 'fr5', name: 'Cinnamon', price: 7000 },
      { id: 'fr6', name: 'Cookies', price: 7000 },
      { id: 'fr7', name: 'Oreo', price: 7000 },
      { id: 'fr8', name: 'Black Coconut', price: 7000 },
    ]
  },
  {
    id: 'milkshake',
    name: 'Milkshake',
    color: '#601D41',
    items: [
      { id: 'ms1', name: 'Mocha', price: 7000 },
      { id: 'ms2', name: 'Caramel', price: 7000 },
      { id: 'ms3', name: 'Vanilla', price: 7000 },
      { id: 'ms4', name: 'Chocolate', price: 7000 },
      { id: 'ms5', name: 'Coconut', price: 7000 },
      { id: 'ms6', name: 'Strawberry', price: 7000 },
      { id: 'ms7', name: 'Mango', price: 7000 },
      { id: 'ms8', name: 'Nutella', price: 7000 },
      { id: 'ms9', name: 'Pistachio', price: 7000 },
      { id: 'ms10', name: 'Oreo', price: 7000 },
      { id: 'ms11', name: 'Lotus', price: 7000 },
      { id: 'ms12', name: 'Cookies', price: 7000 },
      { id: 'ms13', name: 'Kinder', price: 7000 },
      { id: 'ms14', name: 'Pink Coconut', price: 7000 },
    ]
  },
  {
    id: 'smoothie',
    name: 'Smoothie',
    color: '#B35123',
    items: [
      { id: 'sm1', name: 'Strawberry', price: 6500 },
      { id: 'sm2', name: 'Mango', price: 6500 },
      { id: 'sm3', name: 'Passion Fruit', price: 6500 },
      { id: 'sm4', name: 'Blueberry', price: 6500 },
      { id: 'sm5', name: 'Blue Hawaii', price: 6500 },
      { id: 'sm6', name: 'Pink Storm', price: 6500 },
      { id: 'sm7', name: 'Citrus Bloom', price: 6500 },
      { id: 'sm8', name: 'Green Lime', price: 7000 },
    ]
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    color: '#BF711C',
    items: [
      { id: 'it1', name: 'Lemon Tea', price: 5000 },
      { id: 'it2', name: 'Peach Tea', price: 5000 },
      { id: 'it3', name: 'Passion Fruit Tea', price: 5000 },
      { id: 'it4', name: 'Lychee Tea', price: 5000 },
    ]
  },
  {
    id: 'fresh-juice',
    name: 'Fresh Juice',
    color: '#D49B2F',
    items: [
      { id: 'fj1', name: 'Orange', price: 5000 },
      { id: 'fj2', name: 'Mango', price: 6000 },
      { id: 'fj3', name: 'Strawberry', price: 5000 },
      { id: 'fj4', name: 'Pineapple', price: 5000 },
      { id: 'fj5', name: 'Lemon Mint', price: 5000 },
      { id: 'fj6', name: 'Banana Milk', price: 5000 },
      { id: 'fj7', name: 'Avocado Milk', price: 6000 },
      { id: 'fj8', name: 'Mango Pineapple', price: 6000 },
    ]
  },
  {
    id: 'mojito',
    name: 'Mojito',
    color: '#1B4D3E',
    items: [
      { id: 'mo1', name: 'Classic', price: 5000 },
      { id: 'mo2', name: 'Strawberry', price: 5000 },
      { id: 'mo3', name: 'Mango', price: 5000 },
      { id: 'mo4', name: 'Passion Fruit', price: 5000 },
      { id: 'mo5', name: 'Blueberry', price: 5000 },
      { id: 'mo6', name: 'Blue Hawaii', price: 5000 },
      { id: 'mo7', name: 'Cherry', price: 5000 },
      { id: 'mo8', name: 'Bubblegum Watermelon', price: 5000 },
      { id: 'mo9', name: 'Peach Pineapple', price: 5000 },
      { id: 'mo10', name: 'Apple Kiwi', price: 5000 },
    ]
  },
  {
    id: 'energy-drinks',
    name: 'Energy Drinks',
    color: '#153A6B',
    items: [
      { id: 'ed1', name: 'Red Bull Classic', price: 4000 },
      { id: 'ed2', name: 'Red Bull Mojito', price: 5000 },
      { id: 'ed3', name: 'Red Bull Strawberry', price: 5000 },
      { id: 'ed4', name: 'Red Bull Green', price: 5000 },
      { id: 'ed5', name: 'Red Bull Mix', price: 5000 },
    ]
  },
  {
    id: 'chia-refreshers',
    name: 'Chia Refreshers',
    color: '#3B1E54',
    items: [
      { id: 'cr1', name: 'Chia Mango', price: 5500 },
      { id: 'cr2', name: 'Chia Strawberry', price: 5500 },
      { id: 'cr3', name: 'Chia Banana', price: 5500 },
      { id: 'cr4', name: 'Chia Avocado', price: 6000 },
      { id: 'cr5', name: 'Chia Nuts', price: 6500 },
      { id: 'cr6', name: 'Chia Mix', price: 6500 },
    ]
  },
  {
    id: 'protein-power',
    color: '#263238',
    name: 'Protein Power Shakes',
    items: [
      { id: 'pp1', name: 'Coffee', price: 6000 },
      { id: 'pp2', name: 'Banana', price: 6000 },
      { id: 'pp3', name: 'Strawberry', price: 6000 },
      { id: 'pp4', name: 'Avocado', price: 6500 },
      { id: 'pp5', name: 'Desert Beast', price: 6500 },
      { id: 'pp6', name: 'Chocolate Fuel Monster', price: 6500 },
    ]
  },
  {
    id: 'water',
    name: 'Water',
    color: '#1A4F52',
    items: [
      { id: 'w1', name: 'Water', price: 1000 },
      { id: 'w2', name: 'Tonic', price: 2000 },
    ]
  },
];
