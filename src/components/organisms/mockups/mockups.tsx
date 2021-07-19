import {FC} from 'react'
import styled from 'styled-components'
import {LabeledImage} from '../../molecules'
import {BREAKPOINTS} from '../../../theme'
import type {Mockup} from '../../../types'

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

const addMockupsToMinNumber = (mockups: Mockup[]) => {
  const result = [...mockups]

  while (result.length < 8) {
    result.push({
      id: Math.random().toString(),
      title: '',
      thumb: '',
      category: [],
    })
  }

  return result
}

type MockupsProps = {
  mockups: Mockup[]
}

export const Mockups: FC<MockupsProps> = ({mockups}) => {
  const filledMockups = addMockupsToMinNumber(mockups)

  return (
    <Container>
      {filledMockups.map((mockup) => (
        <StyledLabeledImage key={mockup.id} label={mockup.title} image={mockup.thumb} />
      ))}
    </Container>
  )
}
