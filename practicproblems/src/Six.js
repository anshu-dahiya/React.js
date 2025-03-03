//Component That fetches API and displays it
import React, { useEffect, useState } from "react";

export default function Six(){

    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => setData(json))
    },[])
    return(
        <div>
            {
                data? (
                    <div>
                        <h2>ID : {data.id}</h2>
                        <h2>Title : {data.title}</h2>
                        <h2>Body : {data.body}</h2>
                    </div>
                ) : (
                    <p>
                        Loading...
                    </p>
                )
            }
        </div>
    )
}