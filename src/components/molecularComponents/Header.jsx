import React from 'react'
import { Box, Flex, Image, Link, Spacer } from '@chakra-ui/react'
import mtLogo from '../../assets/logos/MT-logo.png';

export default function Header() {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} >
        <Logo/>
        <Spacer/>
        <Nav />
    </Flex>
  )
}

const Logo = () => {
    return(
        <Box>
            <Link href=''><Image src={mtLogo} alt='MT LOGO' w={50} ml={5} className='shadow rounded-full max-w-full h-auto align-middle border-none'/></Link>
        </Box>
    )
}

const Nav = () => {
    return(
        <Box display={'flex'} flex-1 flexDirection={'row'}>
            <Link href='' px={20}>Home</Link>
            <Link href='' px={20}>About</Link>
            <Link href='' px={20}>Tech Stack</Link>
            <Link href='' px={20}>Projects</Link>
            <Link href='' px={20}>Contact</Link>
        </Box>
    )
}
