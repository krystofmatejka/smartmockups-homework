import {FC} from 'react'
import styled from 'styled-components'
import {LabeledImage} from '../../molecules'
import {BREAKPOINTS} from '../../../theme'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledLabeledImage = styled(LabeledImage)`
  width: calc(25% - 15px);
  margin-bottom: 20px;

  @media (max-width: ${BREAKPOINTS.M}px) { {
    width: calc(50% - 15px);
  }

  @media (max-width: ${BREAKPOINTS.S}px) {
    width: 100%;
  }
`

type Mockup = {
  id: string
  title: string
  thumb?: string
}

type MockupsProps = {
  mockups: Mockup[]
}

export const Mockups: FC<MockupsProps> = ({mockups}) => {
  const m = [...mockups]
  while (m.length < 8) {
    m.push({
      id: Math.random().toString(),
      title: '',
    })
  }

  return (
    <Container>
      {m.map((mockup) => (
        <StyledLabeledImage key={mockup.id} label={mockup.title} image={mockup.thumb} />
      ))}
    </Container>
  )
}
