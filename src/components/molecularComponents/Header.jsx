import React from 'react'
import mtLogo from '../../assets/logos/MT-logo.png';
import { Box, Flex, Image, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Flex className='flex flex-row justify-between'>
        <Logo />
        <Nav />
    </Flex>
  )
}

function handleClickScroll(id) {
    const element = document.getElementById(id)
    if(element) element.scrollIntoView({ behavior: 'smooth' })
}

const Logo = () => {
    return(
        <Box>
            <Link onClick={handleClickScroll('homeId')}><Image src={mtLogo} alt='MT LOGO' w={50} className='shadow rounded-full max-w-full h-auto align-middle border-none'/></Link>
        </Box>
    )
}

const Nav = () => {
    return(
        <Box className='flex justify-between gap-5'>
            <Button px={20} className= 'text-black hover:text-opacity-50 focus:bg-teal-200 rounded-full' onClick={() => handleClickScroll('homeId')} >Home</Button>
            <Button px={20} className= 'text-black hover:text-opacity-50 focus:bg-teal-200 rounded-full' onClick={() => handleClickScroll('aboutId')} >About</Button>
            <Button px={20} className= 'text-black hover:text-opacity-50 focus:bg-teal-200 rounded-full' onClick={() => handleClickScroll('techStackId')} >Tech Stack</Button>
            <Button px={20} className= 'text-black hover:text-opacity-50 focus:bg-teal-200 rounded-full' onClick={() => handleClickScroll('projectsId')} >Projects</Button>
            <Button px={20} className= 'text-black hover:text-opacity-50 focus:bg-teal-200 rounded-full' onClick={() => handleClickScroll('contactId')} >Contact</Button>
        </Box>
    )
}
