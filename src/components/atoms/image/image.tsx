import {FC} from 'react'
import styled from 'styled-components'

const GRAY_PIXEL = 'data:image/gif;base64,R0lGODdhAQABAIABAEpKSv///ywAAAAAAQABAAACAkQBADs='

const StyledImage = styled.img`
  border-radius: 4px;
  width: 100%;
  height: auto;
`

type ImageProps = {
  src?: string
  alt: string
}

export const Image: FC<ImageProps> = ({src, alt}) => {
  return (
    <StyledImage src={(src) ? src : GRAY_PIXEL} alt={alt} />
  )
}
