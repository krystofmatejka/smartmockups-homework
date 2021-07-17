import {FC} from 'react'
import styled from 'styled-components'
import {Text, Image} from '../../atoms'

const Container = styled.div`
  position: relative;
  display: inline-flex;
`

const HoverArea = styled.div`
  display: flex;
  align-items: end;

  transition: opacity 0.3s ease;
  opacity: 0;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid rgba(17, 190, 255, 0);

  background: linear-gradient(180deg, rgba(74, 74, 74, 0) 0%, rgba(0, 0, 0, 0.69) 100%);

  &:hover {
    opacity: 1;
    border: 1px solid rgba(17, 190, 255, 1);
  }
`

const StyledText = styled(Text)`
  margin: 13px;
`

type LabeledImageProps = {
  label?: string
  image?: string
  className?: string
}

export const LabeledImage: FC<LabeledImageProps> = ({label, image, className}) => {
  return (
    <Container className={className}>
      <HoverArea>
        <StyledText color='neutral-100'>{label}</StyledText>
      </HoverArea>
      <Image src={image} alt={label}  />
    </Container>
  )
}
