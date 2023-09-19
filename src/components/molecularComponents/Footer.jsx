import React from 'react'
import { Box, Flex, Image, Text, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import mtLogo from '../../assets/logos/MT-logo.png'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

export default function Footer() {
  return (
    <Flex flexDirection={'column'} mt={100}>
        <Contact/>
        <Spacer className='bg-gray-200 text-white p-0.5 rounded-lg my-6'/>
        <FooterBar/>
    </Flex>
  )
}

const Contact = () => {
    return(
        <Box className='flex flex-row justify-between'>
            <Box >
                <Link to='/home'><Image src={mtLogo} alt='MT LOGO' w={50} ml={5} className='shadow rounded-full max-w-full h-auto align-middle border-none'/></Link>
            </Box>
            <Box className='flex flex-row space-x-5' p={15}>
                <Text>+92-336-5522776</Text>
                <Text>muhammadtayyab.cs@gmail.com</Text>
                <Link href=''><AiFillGithub size={20}/></Link>
                <Link href=''><AiFillLinkedin size={20}/></Link>
            </Box>
        </Box>
    )
}

const FooterBar = () => {
    return(
        <Box className='flex flex-row justify-between'>
            <Box>
                <Link href='' px={20}>Home</Link>
                <Link href='' px={20}>About</Link>
                <Link href='' px={20}>Tech Stack</Link>
                <Link href='' px={20}>Projects</Link>
                <Link href='' px={20}>Contact</Link>
            </Box>
            <Box>
                <Text>Designed and Developed by Muhammad Tayyab</Text>
            </Box>
        </Box>
    )
}