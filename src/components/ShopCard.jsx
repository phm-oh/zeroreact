// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import {
  Card,
//   CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ShopCard = (props) => {
  // eslint-disable-next-line react/prop-types
  let { id, name, photo } = props;
  const navi = useNavigate();

  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image
            crossorigin="anonymous"  //เพื่อให้โหลดรูปข้าม api
            src={photo}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            height={180}
            width={350}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md"> {name} </Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2" >
            <Button variant="solid" colorScheme="blue"  onClick={() => {
                navi("shopone",{state:{id:{id}}});
              }}>
              Show ME!
            </Button>
            
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShopCard;
