import ShowAll from "../pages/shop/ShowAll";
import Shop from '../pages/shop/Shop';
import { getProfileFX } from "../service/AuthenService";
import { redirect } from "react-router-dom";




const routeShop = [
    {
        path:'shop',
        loader: async() =>{
          const res = await getProfileFX();
          if (!res) {
             throw redirect('/letmein');
          }
          localStorage.setItem('userdata',JSON.stringify(res.data.user))
          return res.data.user
        },
        children:[
           {
            path:'',
            element:<ShowAll/>,
           } ,
           {
            path:'shopone',
            element:<Shop/>,
           } ,
        ]
    }
]
export default routeShop;