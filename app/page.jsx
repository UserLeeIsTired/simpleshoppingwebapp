"use client"

import Banner from "../components/Banner";
import TopMenu from "../components/TopMenu";
import React, { useState, useEffect } from "react";
import { fetchList } from "@/_services/firebase-service";
import Product from "@/components/Product";
import { useCategoryContext } from "@/_utils/category-context";
import { getUserItems } from "@/_services/firebase-service";
import { useUserAuth } from "@/_utils/auth-context";


export default function Page() {
  const [ items, setItems ] = useState([]);
  const [ sortedItems, setSortedItems ] = useState([]);
  const [ userData, setUserData] = useState([]);
  const { sortMethod } = useCategoryContext();
  const { user } = useUserAuth();

  
  useEffect(() => {
    const fetchData = async () => {
        const itemsData = await fetchList();
        setItems(itemsData);
        setSortedItems(itemsData);
    };
    fetchData();
    }, [sortMethod]
  );

  useEffect(() => {
    const getUserData = async () => {
        if (user){
          const itemsData = await getUserItems(user.uid);
          setUserData(itemsData);
        }
    };
    getUserData();
  }, [user]);

  useEffect(() => {
    if (sortMethod == "All"){
      setSortedItems(items);
    }else if (sortMethod == "Code"){
      setSortedItems(items.filter(item => item.type === "Code"));
    }else if (sortMethod == "Music"){
      setSortedItems(items.filter(item => item.type === "Music"));
    }
  }, [sortMethod]);

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
            sortedItems.map((item) => {
              const foundElement = userData.find(element => element.id === item.id);
              return(
                <Product key={item.id} productId={item.id} imageURL={item.imageURL} cost={item.cost} name={item.name} storedAmount={foundElement ? foundElement.amount : 0}/>
              )
            })
          }
        </div>
      </div>
    </main>
  );
}
