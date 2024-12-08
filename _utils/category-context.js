"use client";
import { useContext, createContext, useState } from "react";

const CategoryContext = createContext();
 
export const CategoryContextProvider = ({ children }) => {
  const [sortMethod, setSortMethod] = useState('All');
 
  return (
    <CategoryContext.Provider value={{ sortMethod, setSortMethod }}>
      {children}
    </CategoryContext.Provider>
  );
};
 
export const useCategoryContext = () => {
  return useContext(CategoryContext);
};