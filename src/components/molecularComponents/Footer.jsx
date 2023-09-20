import React from 'react'
import { Box, Flex, Image, Text, Spacer, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import mtLogo from '../../assets/logos/MT-logo.png'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

export default function Footer() {
  return (
    <Flex id='contactId' flexDirection={'column'} mt={100}>
        <Contact/>
        <Spacer className='bg-gray-200 text-white p-0.5 rounded-lg my-6'/>
        <FooterBar/>
    </Flex>
  )
}

function handleClickScroll(id) {
    const element = document.getElementById(id)
    if(element) element.scrollIntoView({ behavior: 'smooth' })
}

const Contact = () => {
    return(
        <Box className='flex flex-row justify-between'>
            <Box >
                <Link onClick={handleClickScroll('homeId')}><Image src={mtLogo} alt='MT LOGO' w={50} ml={5} className='shadow rounded-full max-w-full h-auto align-middle border-none'/></Link>
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
            <Box className='flex justify-between gap-5'>
                <Button px={20} className= 'text-black hover:text-opacity-50 active:bg-teal-200 rounded-full' onClick={() => handleClickScroll('homeId')} >Home</Button>
                <Button px={20} className= 'text-black hover:text-opacity-50 active:bg-teal-200 rounded-full' onClick={() => handleClickScroll('aboutId')} >About</Button>
                <Button px={20} className= 'text-black hover:text-opacity-50 active:bg-teal-200 rounded-full' onClick={() => handleClickScroll('techStackId')} >Tech Stack</Button>
                <Button px={20} className= 'text-black hover:text-opacity-50 active:bg-teal-200 rounded-full' onClick={() => handleClickScroll('projectsId')} >Projects</Button>
                <Button px={20} className= 'text-black hover:text-opacity-50 active:bg-teal-200 rounded-full' onClick={() => handleClickScroll('contactId')} >Contact</Button>
            </Box>
            <Box>
                <Text>Designed and Developed by Muhammad Tayyab</Text>
            </Box>
        </Box>
    )
}