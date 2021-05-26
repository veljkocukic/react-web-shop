import { createContext, useState } from "react";
import React from "react";

export let DataContext = createContext();

export let DataProvider = (props) => {
  let [array, setArray] = useState([]);
  let [items, setItems] = useState([]);
  let [data, setData] = useState([
    {
      name: "Toshiba",
      desc: "Laptop copmuter",
      price: 299,
      url:
        "https://images.pexels.com/photos/3975677/pexels-photo-3975677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      path: "Toshiba",
      type: "laptop",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space",
    },
    {
      name: "Lenovo",
      desc: "Laptop copmuter",
      price: 399,
      url:
        "https://images.pexels.com/photos/3975677/pexels-photo-3975677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      path: "Lenovo",
      type: "laptop",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this spaceSome words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space",
    },
    {
      name: "Asus",
      desc: "Laptop copmuter",
      price: 199,
      url:
        "https://images.pexels.com/photos/3975677/pexels-photo-3975677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      path: "Asus",
      type: "laptop",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space",
    },
    {
      name: "HP",
      desc: "Laptop copmuter",
      price: 299,
      type: "laptop",
      url:
        "https://images.pexels.com/photos/3975677/pexels-photo-3975677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      path: "HP",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space  Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space ",
    },
    {
      name: "Apple",
      desc: "Laptop copmuter",
      price: 299,
      type: "laptop",
      url:
        "https://images.pexels.com/photos/3975677/pexels-photo-3975677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      path: "Apple",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this spaceSome words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space",
    },
    {
      name: "Motorola",
      desc: "Phone",
      price: 299,
      type: "mobile",
      url:
        "https://images.pexels.com/photos/3975677/pexels-photo-3975677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      path: "Motorola",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this spaceSome words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space",
    },
    {
      name: "Huawei",
      desc: "Phone",
      price: 299,
      type: "mobile",
      url:
        "https://images.pexels.com/photos/3975677/pexels-photo-3975677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      path: "Huawei",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this spaceSome words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space",
    },
    {
      name: "Maxtor",
      desc: "PC",
      price: 299,
      type: "PC",
      url:
        "https://images.pexels.com/photos/3975677/pexels-photo-3975677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      path: "Maxtor",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this spaceSome words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space",
    },
    {
      name: "Altos",
      desc: "PC",
      price: 299,
      type: "PC",
      url:
        "https://images.pexels.com/photos/3975677/pexels-photo-3975677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      path: "Altos",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this spaceSome words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space",
    },
  ]);

  return (
    <DataContext.Provider
      value={[data, setData, array, setArray, items, setItems]}
    >
      {props.children}
    </DataContext.Provider>
  );
};
