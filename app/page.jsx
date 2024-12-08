"use client"

import Banner from "../components/Banner";
import TopMenu from "../components/TopMenu";
import React, { useState, useEffect } from "react";
import { fetchList } from "@/_services/firebase-service";
import Product from "@/components/Product";


export default function Page() {
  const [items, setItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [sortMethod, setSortMethod] = useState('All');
  useEffect(() => {
    const fetchData = async () => {
        const itemsData = await fetchList();
        setItems(itemsData);
        setSortedItems(itemsData);
    };
    fetchData();
    }, []);
    console.log(items);
  return (
    <main>
      <Banner content="Black Friday Points Madness! Earn up to 400 points per item on selected products! | Ends 11/28"/>
      <TopMenu/>
      <div className="bg-gray-200 w-full min-h-[700px] px-5">
        <div className="pt-5">
          <p className="text-green-800 text-2xl ml-4 font-mono font-semibold">Item: {sortMethod}</p>
        </div>
        <div className="flex flex-row w-[90%]">
          {
            sortedItems.map((item) => <Product key={item.id} imageURL={item.imageURL} cost={item.cost} name={item.name}/>)
          }
        </div>
      </div>
    </main>
  );
}
