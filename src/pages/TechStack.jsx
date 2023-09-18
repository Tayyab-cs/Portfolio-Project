import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { htmlGif, cssGif, chakraGif, expressGif, gitGif, gitHubGif, jsGif, mongoGif, mySqlGif, nodeGif, postmanGif,reactGif, tailwindGif, vscodeGif } from '../assets/gifs/index.js'

export default function TechStack() {
  return (
    <Flex className='my-10' flexDirection={'column'}>
        <TechInfo/>
        <StackSet/>
    </Flex>
  )
}

const TechInfo = () => {
    return(
        <Box>
            <Heading fontWeight='bold' fontSize={50} className='text-blue-950'>My Tech Stack</Heading>
            <Text>Technologies I've been working with recently</Text>
        </Box>
    )
}

const StackSet = () => {
    return(
        <Box mt={30}>
            <Box className='flex flex-row p-5'>
                <Image src={htmlGif} alt='htmlGif' boxSize={'150px'}/>
                <Image src={cssGif} alt='htmlGif' boxSize={'150px'}/>
                <Image src={jsGif} alt='htmlGif' boxSize={'150px'}/>
                <Image src={reactGif} alt='htmlGif' boxSize={'150px'}/>
                <Image src={nodeGif} alt='htmlGif' boxSize={'150px'}/>
                <Image src={expressGif} alt='htmlGif' boxSize={'150px'}/>
                <Image src={mongoGif} alt='htmlGif' boxSize={'150px'}/>
            </Box>
            <Box className='flex flex-row p-5'>
                <Image src={mySqlGif} alt='htmlGif' boxSize={'150px'}/>
                <Image src={tailwindGif} alt='htmlGif' boxSize={'150px'}/>
                <Image src={chakraGif} alt='htmlGif' boxSize={'150px'}/>
                <Image src={gitGif} alt='htmlGif' boxSize={'150px'}/>
                <Image src={gitHubGif} alt='htmlGif' boxSize={'150px'}/>
                <Image src={postmanGif} alt='htmlGif' boxSize={'150px'}/>
                <Image src={vscodeGif} alt='htmlGif' boxSize={'150px'}/>
            </Box>
        </Box>
    )
}
