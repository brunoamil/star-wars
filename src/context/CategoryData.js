import React, { createContext, useState, useContext } from 'react';

const DEFAULT_VALUE = {
  name: '',
  title: '',
  setName: () => { },
  setTitle: () => { }
};

const categoryDataContext = createContext(DEFAULT_VALUE)

const CategoryDataProvider = ({ children }) => {
  const [name, setName] = useState(DEFAULT_VALUE.name);
  const [title, setTitle] = useState(DEFAULT_VALUE.title);

  return (
    <categoryDataContext.Provider value={{ name, setName, title, setTitle }}>
      {children}
    </categoryDataContext.Provider>
  )
}

export default CategoryDataProvider;

export const useCategory = () => {
  const context = useContext(categoryDataContext);
  const { name, title, setName, setTitle } = context;
  return { name, title, setName, setTitle };
}
