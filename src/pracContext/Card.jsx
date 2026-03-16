import { useContext, useEffect } from "react";
import { AppContext } from "./appContext";

const {fetchBlogPost} = useContext(AppContext);

useEffect(()=>{

fetchBlogPost();

},[])