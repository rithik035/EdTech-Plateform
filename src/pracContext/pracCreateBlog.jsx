import { useContext } from "react";
import { AppContext } from "./appContext";

const Blog = ()=>{

    const {loading,posts} = useContext(AppContext);

    return (
        <div>
            {
                loading ?( <Spinner></Spinner> ) : (
                    posts.length === 0 ? (<div> Blog not found </div>) : ( posts.map((post)=>(
                        <Card/>
                    )) )
                )
            }
        </div>
    )

}

export default Blog;
