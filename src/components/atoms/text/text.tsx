import React, {FC} from 'react'
import styled from 'styled-components'

type Color = 'neutral-100' | 'neutral-0'
type Size = 'S' | 'M'
type Weight = 'normal' | 'bold'

type StyledSpanProps = {
  textColor: Color
  textSize: Size
  textWeight: Weight
}

const translateColor = (color: Color) => {
  switch (color) {
  case 'neutral-0':
    return '#000000'
  case 'neutral-100':
    return '#ffffff'
  }
}

const translateSize = (size: Size) => {
  switch (size) {
  case 'S':
    return '12px'
  case 'M':
    return '15px'
  }
}

const translateWeight = (weight: Weight) => {
  switch (weight) {
  case 'normal':
    return 500
  case 'bold':
    return 700
  }
}

const StyledSpan = styled.span.attrs<StyledSpanProps>(({textColor, textSize, textWeight}) => {
  return {
    textColor: translateColor(textColor),
    textSize: translateSize(textSize),
    textWeight: translateWeight(textWeight),
  }
})<StyledSpanProps>`
  color: ${(p) => p.textColor};
  font-size: ${(p) => p.textSize};
  font-weight: ${(p) => p.textWeight};
  font-family: 'Montserrat', sans-serif;
`

type TextProps = {
  color?: Color
  size?: Size
  weight?: Weight
}

export const Text: FC<TextProps> = ({color = 'neutral-0', size = 'M', weight = 'normal', children}) => {
  return (
    <StyledSpan textSize={size} textColor={color} textWeight={weight}>
      {children}
    </StyledSpan>
  )
}
