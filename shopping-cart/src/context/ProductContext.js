import { useEffect } from "react";
import { createContext } from "react";
import axios from 'axios'
import { useReducer } from "react";

const AppContext = createContext()

const API = "https://fakestoreapi.com/products";

const initalState= {
    products:[]
}

const AppProvider = ({children})=>{
const [state, dispatch]= useReducer(reducer, initalState)

    const getProducts = async(url)=>{
const res =  await axios.get(url)
const products = await res.data
console.log(products)

    }

    useEffect(()=>{
        getProducts(API);
    },[])
    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}



export {AppProvider, AppContext}