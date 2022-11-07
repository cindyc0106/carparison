import { FaReact, FaNodeJs, FaDatabase, FaBook } from "react-icons/fa";
import { Stack, Text, Box, Heading, Image, Container } from '@chakra-ui/react';
import './FrameWork.css';

const frontEnd = (
  <>
    <Stack direction='column' width={200}>
      <Container>
        <FaReact /> <Text> &nbsp; React</Text>
      </Container>
      <Container>
        <FaBook /> <Text> &nbsp; Chakra UI</Text>
      </Container>
    </Stack>
  </>
);

const backEnd = (
  <>
    <Stack direction='column' width={200}>
      <Container>
        <FaNodeJs /> <Text> &nbsp; ExpressJS</Text>
      </Container>
      <Container>
        <FaNodeJs /> <Text> &nbsp; NodeJS</Text>
      </Container>
      <Container>
        <FaDatabase /> <Text> &nbsp; PostgreSQL</Text>
      </Container>
    </Stack>
  </>
);

const API = (
  <>
    <Stack width={460}>
      <Container>
        <FaReact /> <Text> &nbsp; React</Text>
      </Container>
    </Stack>
  </>
);


function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

function StackExTop() {
  return (
    <Stack id="first" spacing={4} direction='row'>
      <Feature
        title='Front-End'
        desc={frontEnd}
      />
      <Feature
        title='Back-End'
        desc={backEnd}
      />
    </Stack>
  );
}

function StackExBottom() {
  return (
    <Stack spacing={4} direction='column'>
      <Feature
        title='APIs'
        desc={API}
      />
    </Stack>
  );
}

function FrameWork() {
  return (
    <>
      <div className="framework">
        <StackExTop />
      </div>
      <br></br>
      <div className='API'>
        <StackExBottom />
      </div>
    </>
  );
}

export default FrameWork;