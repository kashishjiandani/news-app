import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'


const HomePage = () => {
    const Url = "https://newsapi.org/v2/everything?q=food&apiKey=9a3f6d5c0311455386c35e778604b558";
    // const Url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9a3f6d5c0311455386c35e778604b558";

    const [data, setData] = useState([]);

    const handleFetchRequests = async () => {

        try {
            const finalRequest = await fetch(Url);
            console.log(finalRequest);
            const response = await finalRequest.json();
            console.log(response.articles[0]);
            setData(response.articles);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        handleFetchRequests();

    }, [])


    // 1. callbacks -- callback hells  
    // 2. .then
    // 3. async await 

    // fetch(Url)           
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch((error) => console.log(error))


    return (
        <>
           
            <div className="news">
                <h1 className='mx-5'>Trending News</h1>
                <div className="cards mx-5 my-5">
                    {data.map((element) => (
                        <Cards image={element.urlToImage} title={element.title} desc={element.description.substring(0, 150)} url={element.url} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default HomePage
