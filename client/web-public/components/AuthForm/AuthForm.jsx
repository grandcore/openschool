
import {
    Box,
    Button,
    chakra,
    Flex,
    FormControl,
    FormLabel, IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    useDisclosure,
    useMergeRefs,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

import {useHttp} from "../../context/http.hook";

import {HiEye, HiEyeOff} from "react-icons/hi";
import {useState} from "react";
import {REQUEST_ROUTE} from "../../utils/consts";

export const AuthForm = () => {

    const {request} = useHttp()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { isOpen, onToggle } = useDisclosure()
    const inputRef = React.useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)

    const onClickReveal = () => {
        onToggle()
        const input = inputRef.current

        if (input) {
            input.focus({
                preventScroll: true,
            })
            const length = input.value.length * 2
            requestAnimationFrame(() => {
                input.setSelectionRange(length, length)
            })
        }
    }
   
    return(
        <chakra.form
            onSubmit={(e) => {
            onSubmit= async (e) => {
            e.preventDefault() // your login logic here
                const data = await request(REQUEST_ROUTE + "/api/auth/auth", "POST" ,  {email: email, password: password})
                console.log(data)
            }}}
            
        >
            <Stack spacing="6">
            <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input name="email" type="email" autoComplete="email" required />
                <Input name="email" id="email" type="email" autoComplete="email" onChange={e => setEmail(e.target.value)} required />
            </FormControl>
            <FormControl id="password">
                <Flex justify="space-between">
                    <FormLabel>Пароль</FormLabel>
                    <Box as="a" color={mode('blue.600', 'blue.200')} fontWeight="semibold" fontSize="sm">
                        Забыли пароль?
                    </Box>
                </Flex>
                <InputGroup>
                    <InputRightElement>
                        <IconButton
                            bg="transparent !important"
                            variant="ghost"
                            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                            icon={isOpen ? <HiEyeOff /> : <HiEye />}
                            onClick={onClickReveal}
                        />
                    </InputRightElement>
                    <Input
                        ref={mergeRef}
                        name="password"
                        type={isOpen ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                </InputGroup>
            </FormControl>

            <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                Войти
            </Button>
            </Stack>
        </chakra.form>
        )
        }