import { FaGithubSquare, FaLinkedin, FaReact } from "react-icons/fa";
import { Stack, Text, Box, Heading, Image, Container } from '@chakra-ui/react';


const frontEnd = (
  <>
    <Stack>

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

function StackEx() {
  return (
    <Stack spacing={8} direction='column'>
      <Feature
        title='Front-End'
        desc={frontEnd}
      />
      <Feature
        title='Back-End'
        desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
      />
      <Feature
        title='APIs'
        desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
      />
    </Stack>
  );
}

function FrameWork() {
  return (
    <div className="framework">
      <StackEx />
    </div>
  );
}

export default FrameWork;