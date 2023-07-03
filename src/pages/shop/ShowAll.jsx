import { useEffect , useState} from "react";
import NavigationMenu from "../../components/navbar"
// eslint-disable-next-line no-unused-vars
import { Wrap, WrapItem } from '@chakra-ui/react'
import axios from "axios";
import ShopCard from '../../components/ShopCard';
// eslint-disable-next-line no-unused-vars
import { Card, CardHeader, CardBody, CardFooter ,Stack ,Heading ,Divider ,ButtonGroup,Button ,Text,Image ,Center } from '@chakra-ui/react'


const ShowAll = () => {

  const [shop,setShop] = useState([{}]);


  useEffect(()=>{
    axios.get('http://api_oh.udvc.ac.th/shop')
    .then(response =>{
       setShop(response.data.data);
    })

  },[]);

  const warpItem = shop.map((item)=> 
       
  
  <WrapItem    key={item.id}>
    <Center w='420px' h='580px' bg='red.200' borderRadius={12}>
       <ShopCard  id={item.id} name={item.name} photo={item.photo}/>
    </Center>
  </WrapItem>
  
  )




  return (
    <div>
         <NavigationMenu/>

         <Wrap spacing={'30px'} justify={'center'} mt={'85px'}>

               {warpItem}
         </Wrap>

         

    </div>
  )
}

export default ShowAll
