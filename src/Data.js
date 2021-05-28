import { createContext, useState } from "react";
import React from "react";

export let DataContext = createContext();

export let DataProvider = (props) => {
  let [array, setArray] = useState([]);
  let [items, setItems] = useState([]);
  let [data, setData] = useState([
    {
      name: "Toshiba",
      desc: "Laptop computer",
      price: 299,
      url:
        "https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      path: "Toshiba",
      type: "laptop",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space",
    },
    {
      name: "Lenovo",
      desc: "Laptop computer",
      price: 399,
      url:
        "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      path: "Lenovo",
      type: "laptop",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this spaceSome words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space",
    },
    {
      name: "Asus",
      desc: "Laptop computer",
      price: 199,
      url:
        "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      path: "Asus",
      type: "laptop",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space",
    },
    {
      name: "HP",
      desc: "Laptop computer",
      price: 299,
      type: "laptop",
      url:
        "https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      path: "HP",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space  Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space ",
    },
    {
      name: "Apple",
      desc: "Laptop computer",
      price: 299,
      type: "laptop",
      url:
        "https://images.pexels.com/photos/374720/pexels-photo-374720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
        "https://images.pexels.com/photos/3944403/pexels-photo-3944403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
        "https://images.pexels.com/photos/6140979/pexels-photo-6140979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
        "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
        "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      path: "Altos",
      details:
        "Some words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this spaceSome words just to fill this space Some words just to fill this space Some words just to fill this space Some words just to fill this space",
    },
  ]);

  return (
    <DataContext.Provider
      value={{data, setData, array, setArray, items, setItems}}
    >
      {props.children}
    </DataContext.Provider>
  );
};
