import { Box, styled } from "@mui/material";
import Sunset from "../assets/images/bg (1).jpg";
import { Form } from "../components/Form";
import { Result } from "../components/Result";
const Component = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  width: "65%",
});

const Image = styled(Box)({
  backgroundImage: `url('${Sunset}')`,
  width: "27%",
  height: "80%",
  backgroundSize: "cover",
  borderRadius: "20px 0px 0px 20px",
});

const Home = () => {
  return (
    <Component>
      <Image></Image>
      <Box style={{ width: "73%", height: "80%" }}>
        <Form />
        <Result />
      </Box>
    </Component>
  );
};
export default Home;
