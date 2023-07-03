

import axios from "axios"


export async function GetMenuFX(id){
    return await axios.get('http://api_oh.udvc.ac.th/shop/5d53b8dabb8d365b8073d1ae'+id)
}