import './styles/About.css';
import {Stack, Text, Box, Heading, Image, Container } from '@chakra-ui/react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";




const cindy = (
  <>
    <Stack direction='column' h='100px' p={1.5}>
      <Container>
        <Image
          borderRadius='full'
          boxSize='75px'
          objectFit='cover'
          src='https://media-exp1.licdn.com/dms/image/C5603AQH1y641UuxySw/profile-displayphoto-shrink_800_800/0/1654640285145?e=1672876800&v=beta&t=G4_GHIEj7TZvEzB8Yoqa5G8loyDElV3PWtrU2TfZyQs'
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
          src='https://media-exp1.licdn.com/dms/image/D5603AQHsV5c4xwzpyw/profile-displayphoto-shrink_200_200/0/1666390014857?e=1672876800&v=beta&t=-w9JRMTluZl5Coy984oJ5-URG-M4muMO35O01rQjKHA'
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
          src='https://media-exp1.licdn.com/dms/image/C5603AQE-oTf-g_a9TA/profile-displayphoto-shrink_800_800/0/1660105273985?e=1672876800&v=beta&t=JQ4XFf6lvb79jREHgwCNyNEZGPsa-8gXbZf2x_YExVg'
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
      <Heading as='u' fontSize='xs'>{title}</Heading>
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