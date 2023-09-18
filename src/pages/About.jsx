import React from 'react'
import { BsFillBuildingFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendarDate } from "react-icons/bs";
import { Box, Heading, Text, HStack, Flex, Spacer } from '@chakra-ui/react'

export default function About() {
  return (
    <Flex mt={50} mr={400} flexDirection={'column'}>
        <AboutMe/>
        <Experience/>
        <Education/>
    </Flex>
  )
}

const AboutMe = () => {
    return(
        <Box>
            <Heading fontWeight='bold' fontSize={50} className='text-blue-950'>About Me</Heading>
            <Text mt={10} fontSize={20}>NodeJS Backend Developer with hands-on experience in creating 
                efficient and scalable server-side applications. Proficient in utilizing 
                Node with Express and Nest JS to build RESTful API's and implementing 
                data storage with databases like MySQL andMongoDB. Possess a good understanding 
                of React JS, enabling seamless integration of frontend and backend functionalities.
                Committed to delivering reliable and optimized code to enhance the overall 
                performance and user experience.</Text>
        </Box>
    )
}

const Experience = () => {
    return(
        <Box className='flex flex-col items-start justify-start mt-7'>
            <Heading fontWeight='bold' fontSize={50} className='text-blue-950'>Work Experience</Heading>
            <Box className='w-full'>
                <HStack justifyContent={'space-between'} mt={30}>
                    <Text fontWeight='hairline' fontSize={'larger'}>NodeJS Developer</Text>
                    <Text fontSize={'small'} px={10} className=' bg-green-300 rounded-lg'>Full Time</Text>
                </HStack>
                <HStack justifyContent={'space-between'}>
                    <HStack>
                        <BsFillBuildingFill size={15} color='lightgray' /><Text fontWeight='hairline' fontSize={'small'} textColor={'lightgray'}>Infinity Bits</Text>
                    </HStack>
                    <HStack>
                        <CiLocationOn size={15} color='lightgray' /><Text fontWeight='hairline' fontSize={'small'} textColor={'lightgray'}>Islamabad</Text>
                    </HStack>
                    <HStack>
                        <BsCalendarDate size={15} color='lightgray' /><Text fontWeight='hairline' fontSize={'small'} textColor={'lightgray'}>Mar 2022 - Present</Text>
                    </HStack>
                </HStack>
            </Box>

            <Spacer className='bg-gray-100 text-white p-0.5 rounded-lg my-6'/>

            <Box className='w-full'>
                <HStack justifyContent={'space-between'}>
                    <Text fontWeight='hairline' fontSize={'larger'}>Frontend Intern</Text>
                    <Text fontSize={'small'} px={10} className=' bg-green-300 rounded-lg'>Full Time</Text>
                </HStack>
                <HStack justifyContent={'space-between'}>
                    <HStack>
                        <BsFillBuildingFill size={15} color='lightgray' /><Text fontWeight='hairline' fontSize={'small'} textColor={'lightgray'}>Interns Pakistan</Text>
                    </HStack>
                    <HStack>
                        <CiLocationOn size={15} color='lightgray' /><Text fontWeight='hairline' fontSize={'small'} textColor={'lightgray'}>Rawalpindi</Text>
                    </HStack>
                    <HStack>
                        <BsCalendarDate size={15} color='lightgray' /><Text fontWeight='hairline' fontSize={'small'} textColor={'lightgray'}>Aug 2022 - Sep 2022</Text>
                    </HStack>
                </HStack>
            </Box>
        </Box>
    )
}

const Education = () => {
    return (
        <Box className='mt-7'> 
            <Heading fontWeight='bold' fontSize={50} className='text-blue-950'>Education</Heading>
            <Box className='w-full'>
                <HStack justifyContent={'space-between'} mt={30}>
                    <Text fontWeight='hairline' fontSize={'larger'}>Bacholar of Science in Computer Science</Text>
                    <Text fontSize={'small'} px={10} className=' bg-green-300 rounded-lg'>Full Time</Text>
                </HStack>
                <HStack justifyContent={'space-between'}>
                    <HStack>
                        <BsFillBuildingFill size={15} color='lightgray' /><Text fontWeight='hairline' fontSize={'small'} textColor={'lightgray'}>Air University</Text>
                    </HStack>
                    <HStack>
                        <CiLocationOn size={15} color='lightgray' /><Text fontWeight='hairline' fontSize={'small'} textColor={'lightgray'}>Islamabad</Text>
                    </HStack>
                    <HStack>
                        <BsCalendarDate size={15} color='lightgray' /><Text fontWeight='hairline' fontSize={'small'} textColor={'lightgray'}>2017 - 2021</Text>
                    </HStack>
                </HStack>
            </Box>

            <Spacer className='bg-gray-100 text-white p-0.5 rounded-lg my-6'/>

            <Box className='w-full'>
                <HStack justifyContent={'space-between'}>
                    <Text fontWeight='hairline' fontSize={'larger'}>Intermediate of Computer Science</Text>
                    <Text fontSize={'small'} px={10} className=' bg-green-300 rounded-lg'>Full Time</Text>
                </HStack>
                <HStack justifyContent={'space-between'}>
                    <HStack>
                        <BsFillBuildingFill size={15} color='lightgray' /><Text fontWeight='hairline' fontSize={'small'} textColor={'lightgray'}>Gov. Gordon College</Text>
                    </HStack>
                    <HStack>
                        <CiLocationOn size={15} color='lightgray' /><Text fontWeight='hairline' fontSize={'small'} textColor={'lightgray'}>Rawalpindi</Text>
                    </HStack>
                    <HStack>
                        <BsCalendarDate size={15} color='lightgray' /><Text fontWeight='hairline' fontSize={'small'} textColor={'lightgray'}>2015 - Sep 2017</Text>
                    </HStack>
                </HStack>
            </Box>
        </Box>

        
    )
}
