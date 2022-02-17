import React, { useRef } from 'react'
import { TextWindowContainer, TextContainer, Textform } from '../styles'
import { TextField, Button } from '@mui/material'

const TextWindow = () => {
  const textRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(textRef.current.value)
    textRef.current.value = ''
  }

  return (
    <TextWindowContainer>
      <TextContainer>TextWindow</TextContainer>
      <Textform onSubmit={handleSubmit}>
        <TextField fullWidth required inputRef={textRef} />
        <Button variant='contained' type='submit'>
          Send
        </Button>
      </Textform>
    </TextWindowContainer>
  )
}

export default TextWindow
