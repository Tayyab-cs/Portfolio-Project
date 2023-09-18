import React from 'react'
import { myImage } from '../assets/images/index'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import waveIcon from '../assets/icons/wave.png'
import Header from '../components/molecularComponents/Header'
import About from './About';
import TechStack from './TechStack';
import Projects from './Projects';
import Footer from '../components/molecularComponents/Footer'

export default function Home() {
  return (
    <Box mx={100} my={50}>
      <Header/>
      <Body/>
      <About/>
      <TechStack/>
      <Projects/>
      <Footer/>
    </Box>
  )
}

const Body = () => {
  return(
    <Flex justifyContent={'space-around'}>
      <Box className='w-50 h-50 overflow-hidden'>
        <Image src={myImage} alt='mtImage' className='object-cover w-full h-full rounded-lg'/>
      </Box>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} fontSize={50}>
        <Text display={'flex'} flexDirection={'row'} fontWeight={'bold'} className='text-blue-950'>Hi <Image src={waveIcon} w={60} ml={5}/>, </Text>
        <Text fontWeight={'bold'} className='text-blue-950'>My name is </Text>
        <Text fontWeight={'bold'} >Muhammad Tayyab</Text>
        <Text fontWeight={'bold'} className='text-blue-950'>I build things for web</Text>        
      </Box>
    </Flex>
  )
}
