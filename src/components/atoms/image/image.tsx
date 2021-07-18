import {FC} from 'react'
import styled from 'styled-components'

const GRAY_PIXEL = 'data:image/gif;base64,R0lGODdhAQABAIABAEpKSv///ywAAAAAAQABAAACAkQBADs='

const StyledImage = styled.img`
  border-radius: 4px;
  width: 100%;
  height: auto;
`

const ZeroState = styled.div`
  background: url('${GRAY_PIXEL}');
  width: 100%;
  border-radius: 4px;
  padding-bottom: 75%;
  height: auto;
`

type ImageProps = {
  src?: string
  alt: string
}

export const Image: FC<ImageProps> = ({src, alt}) => {
  return (src) ? (
    <StyledImage src={src} alt={alt} />
  ) : (
    <ZeroState />
  )
}
