import { createContext, useState } from "react";
const baseUrl = 0;


export const AppContext = createContext();

export default function AppContextProvider({childern}){
    const [loading , setLoading] = useState(true);
    const [posts , setPosts] = useState("Laluaa");

    async function fetchBlogPost(page = 1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
        } catch (error) {
            
        }
    }


    const value ={
        loading,
        setLoading,
        posts,
        setPosts
    };

    return <AppContext.Provider value={value} >
        {childern}
    </AppContext.Provider>


}