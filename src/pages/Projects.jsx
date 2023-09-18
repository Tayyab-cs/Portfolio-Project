import React from 'react'
import { eStoreImage, gymImage } from '../assets/images/index'
import {AiFillGithub} from 'react-icons/ai'
import { Box, Card, CardBody, CardFooter, Flex, HStack, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'

export default function Projects() {
  return (
    <Flex flexDirection={'column'}>
        <ProjectHeader/>
        <ProjectCards/>
    </Flex>
  )
}

const ProjectHeader = () => {
    return (
        <Box>
            <Heading fontWeight='bold' fontSize={50} className='text-blue-950'>Projects</Heading>
            <Text>Things I've built so far</Text>
        </Box>
    )
}

const ProjectCards = () => {
    return (
        <Box className='flex flex-row my-20 justify-around' maxW={'sm'}>
            <Card boxSize='300px' rounded={'full'} border={'black'}> 
                <CardBody className='border rounded-[20px] shadow-2xl shadow-gray-700'>
                    <Image src={eStoreImage} alt='eStoreImage' boxSize='300px' h='200px' className='rounded-[20px]'/>
                    <Stack className='flex flex-col m-5'>
                        <Heading className='font-bold'>E-Commerce Store</Heading>
                        <Text>Shop online for a wide range of products with ease and security.</Text>
                        <HStack>
                            <Heading className='font-bold text-sm'>Tech Stack:</Heading>
                            <Text className='font-light text-sm'>Node, Express, Sequelize</Text>
                        </HStack>
                        <CardFooter my={5}>
                            <HStack>
                                <AiFillGithub/>
                                <Link href='https://github.com/Tayyab-cs/E-Commerce-Store' target='_blank' textDecoration={'underline'} fontWeight={'bold'}>view code</Link>
                            </HStack>
                        </CardFooter>
                    </Stack>
                </CardBody>
            </Card>

            <Card boxSize='300px' rounded={'full'} border={'black'}> 
                <CardBody className='border rounded-[20px] shadow-2xl shadow-gray-700'>
                    <Image src={gymImage} alt='gymImage' boxSize='300px' h='200px' className='rounded-t-[20px]'/>
                    <Stack className='flex flex-col m-5'>
                        <Heading className='font-bold'>Vikings Fitness and Bodybuilding</Heading>
                        <Text>Vikings Fitness a website for a gym to provide online services.</Text>
                        <HStack>
                            <Heading className='font-bold text-sm'>Tech Stack:</Heading>
                            <Text className='font-light text-sm'>React, Node, MongoDB</Text>
                        </HStack> 
                        <CardFooter my={5} className='flex flex-row justify-around'>
                            <HStack>
                                <AiFillGithub/>
                                <Link href='https://github.com/Tayyab-cs/VFB-Frontend' target='_blank' textDecoration={'underline'} fontWeight={'bold'}>Frontend</Link>
                            </HStack>
                            <HStack>
                                <AiFillGithub/>
                                <Link href='https://github.com/Tayyab-cs/VFB-Backend' target='_blank' textDecoration={'underline'} fontWeight={'bold'}>Backend</Link>
                            </HStack>
                        </CardFooter>
                    </Stack>
                </CardBody>
            </Card>

            <Card boxSize='300px' rounded={'full'} border={'black'}> 
                <CardBody className='border rounded-[20px] shadow-2xl shadow-gray-700'>
                    <Image src={eStoreImage} alt='eStoreImage' boxSize='300px' h='200px' className='rounded-t-[20px]'/>
                    <Stack className='flex flex-col m-5'>
                        <Heading className='font-bold'>Other Repositories</Heading>
                        <Text>You can find other useful content on my github.</Text>
                        <HStack>
                            <Heading className='font-bold text-sm'>Tech Stack:</Heading>
                            <Text className='font-light text-sm'>MERN STACK</Text>
                        </HStack>
                        <CardFooter my={5}>
                            <HStack>
                                <AiFillGithub/>
                                <Link href='https://github.com/Tayyab-cs?tab=repositories' target='_blank' textDecoration={'underline'} fontWeight={'bold'}>view repositories</Link>
                            </HStack>
                        </CardFooter>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    )
}
