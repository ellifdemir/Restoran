import axios from "axios";
export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer x4rdME7wAW3xYn3b61-nJn9pQpyIRZc-fK2urumFrXHhIkpmoWHqGOGHab8sqreyznT4tIEeUOXOFl0p1OVioHwvPBr-ItTmTaEj8Br2HO87xA-x--J54Ci221T9ZXYx",
        
    },
})