import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Icon,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {  EnrollFX } from "../service/AuthenService";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/327917985_1146887909333627_2461980382096663534_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFN7WDcqNXoefOTc29aKJ1-znteIKPeorrOe14go96iuhfDN6Mjxus7QKq3bjxIegDZRMszOG_nynHGyuuIxWWI&_nc_ohc=Qj3R4jEWJPEAX9SzqkL&_nc_ht=scontent.fbkk12-3.fna&oh=00_AfBxEkra8dAPtqLsCVNTvpdF71w6_jEPYX9bgQxZnt_oQQ&oe=648FAF68",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/327917985_1146887909333627_2461980382096663534_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFN7WDcqNXoefOTc29aKJ1-znteIKPeorrOe14go96iuhfDN6Mjxus7QKq3bjxIegDZRMszOG_nynHGyuuIxWWI&_nc_ohc=Qj3R4jEWJPEAX9SzqkL&_nc_ht=scontent.fbkk12-3.fna&oh=00_AfBxEkra8dAPtqLsCVNTvpdF71w6_jEPYX9bgQxZnt_oQQ&oe=648FAF68",
  },
];

export default function EnrollPage() {
  const navi = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required('ป้อนข้อมูลอีเมล์ด้วย').email('รูปแบบอีเมลไม่ถูกต้อง'),
    password: yup.string().required('ป้อนข้อมูลรหัสผ่านด้วย').min(4, 'รหัสผ่านต้องอย่างน้อย 4 อักษรขึ้นไป'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data) => {

    console.log(data)
    try {
      const result = await EnrollFX(data);
      console.log(result.data);
      if(result.data){
        navi('/shop')
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Senior web designers{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              &
            </Text>{" "}
            Full-Stack Developers
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, red.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>

        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Enroll Your Account
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              We’re looking for amazing engineers just like you! Become a part
              of our rockstar engineering team and skyrocket your career!
            </Text>
          </Stack>



          <Box as={"form"} onSubmit={handleSubmit(onSubmit)}  noValidate   mt={3}>
            <Stack spacing={4}>
              <FormControl   isInvalid={errors.name ? true : false}>
                <Input
                  {...register("name")}
                  placeholder="Firstname"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <FormErrorMessage>
                     {errors.name && errors.name?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl  isInvalid={errors.email ? true : false}>
                <Input
                  {...register("email")}
                  placeholder="firstname@lastname.io"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <FormErrorMessage>
                    {errors.email && errors.email?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl   isInvalid={errors.password ? true : false}>
                <Input
                  {...register("password")}
                  placeholder="Password"
                  type="password"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />

                <FormErrorMessage>
                {errors.password && errors.password?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <Button
              type='submit'
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
            >
              E N R O L L
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
