import './styles/About.css';
import { Divider, Stack, Text } from '@chakra-ui/react';
import { FaLinkedin } from "react-icons/fa";


const display1 = (
  <>
    <Stack direction='column' h='100px' p={4}>
      <Divider orientation='vertical' />
      <Text>Cindy Chen</Text>
      <FaLinkedin />
    </Stack>
  </>
);

const display2 = (
  <>
    <Stack direction='row' h='100px' p={4}>
      <Divider orientation='vertical' />
      <Text>Omid Ghahramani</Text>
      <FaLinkedin />
    </Stack>
  </>
);

const display3 = (
  <>
    <Stack direction='row' h='100px' p={4}>
      <Divider orientation='vertical' />
      <Text>Kevin Ly</Text>
      <FaLinkedin />
    </Stack>
  </>
);


function About() {
  return (
    <div className="about">
      {display1}
      {display2}
      {display3}
    </div>
  );
}

export default About;