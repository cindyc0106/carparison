import './styles/About.css';
import {Stack, Text, Box, Heading, Image, Container } from '@chakra-ui/react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import cindyphoto from './image/cindyphoto.jpeg'
import omidphoto from './image/omidphoto.jpeg'
import kevinphoto from './image/kevinphoto.jpeg'




const cindy = (
  <>
    <Stack direction='column' h='100px' p={1.5}>
      <Container>
        <Image
          borderRadius='full'
          boxSize='75px'
          objectFit='cover'
          src={cindyphoto}
          alt='Cindy Chen'
        />
      </Container>
      <Text fontSize='xs' as='b'>Cindy Chen</Text>
      <div className="icon">
        <a href="https://www.linkedin.com/in/cindychen0106/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/cindyc0106" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare />
        </a>
      </div>
    </Stack>
  </>
);

const omid = (
  <>
    <Stack direction='column' h='100px' p={1.5}>
      <Container>
        <Image
          borderRadius='full'
          boxSize='75px'
          objectFit='cover'
          src={omidphoto}
          alt='Omid Ghahramani'
        />
      </Container>
      <Text fontSize='xs' as='b'>Omid Ghahramani</Text>
      <div className="icon">
        <a href="https://linkedin.com/in/omid-ghahramani-ba55b2251" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Omid-G12" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare />
        </a>
      </div>
    </Stack>
  </>
);

const kevin = (
  <>
    <Stack direction='column' h='100px' p={1.5}>
      <Container>
        <Image
          borderRadius='full'
          boxSize='75px'
          objectFit='cover'
          src={kevinphoto}
          alt='Kevin Ly'
        />
      </Container>
      <Text fontSize='xs' as='b'>Kevin Ly</Text>
      <div className="icon">
        <a href="https://linkedin.com/in/kevin-ly-yeg" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/originallykevin" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare />
        </a>
      </div>
    </Stack>
  </>
);

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={4} height="200px" shadow='md' borderWidth='1px' {...rest}>
      <Heading as='u' color='#a9b4a4' fontSize='xs'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

function StackEx() {
  return (
    <Stack spacing={5} direction='row'>
      <Feature 
        title='Full Stack Developer'
        desc={cindy}
      />
      <Feature
        title='Full Stack Developer'
        desc={omid}
      />
      <Feature
        title='Full Stack Developer'
        desc={kevin}
      />
    </Stack>
  );
}

function About() {
  return (
    <div className="about">
      <StackEx />
    </div>
  );
}

export default About;