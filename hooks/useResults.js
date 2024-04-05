import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default()=>{
    const [results, setResults] = useState([])

    const searchApi=async(searchTerm)=>{
      const response=  await yelp.get("/search",{
            params:{
                limit:20,
                location:"Elazığ",
                term: searchTerm,
            },
        });

        setResults(response.data.businesses);
    };

    useEffect(()=>{
        searchApi("Pizza");
    },[]);

    return[searchApi,results];
};