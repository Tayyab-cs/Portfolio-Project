import React from 'react'
import mtLogo from '../../assets/logos/MT-logo.png';
import { Box, Flex, Image, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Flex className='justify-between gap-[550px] py-4 fixed top-0 bg-white z-50'>
        <Logo />
        <Nav />
    </Flex>
  )
}

const Logo = () => {
    return(
        <Box>
            <Link to='/home'><Image src={mtLogo} alt='MT LOGO' w={50} className='shadow rounded-full max-w-full h-auto align-middle border-none'/></Link>
        </Box>
    )
}

const Nav = () => {

    return(
        <Box className='flex justify-between gap-5'>
            <Button px={20} colorScheme='teal' variant='link' >Home</Button>
            <Button px={20} colorScheme='teal' variant='link' >About</Button>
            <Button px={20} colorScheme='teal' variant='link' >Tech Stack</Button>
            <Button px={20} colorScheme='teal' variant='link' >Projects</Button>
            <Button px={20} colorScheme='teal' variant='link' >Contact</Button>
        </Box>
    )
}
