import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useReducer } from "react";
import reducer from "../reducer/ProductReducer";
const AppContext = createContext();

const API = "https://fakestoreapi.com/products";

const initalState = {
  products: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const getProducts = async (url) => {
    try {
        const res = await axios.get(url);
        const products = await res.data;
        dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
        dispatch({type:"API_ERROR"})
        
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
