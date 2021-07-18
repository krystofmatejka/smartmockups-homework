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
  max-width: calc(25% - 15px);
  margin-bottom: 20px;

  @media (max-width: ${BREAKPOINTS.M}px) { {
    max-width: calc(50% - 15px);
  }

  @media (max-width: ${BREAKPOINTS.S}px) {
    max-width: 100%;
  }
`

/*const mockups = [
  {
    id: 'Ao3176YQZE',
    title: 'Branding near the notepad and a duck tape',
    image: 'https://smartmockups-web-assets.imgix.net/mockups/Ao3176YQZE_pr_en.jpg?h=570&w=760&fit=crop',
  },
  {
    id: '5mrGHiisy',
    title: 'iMac on the wooden desk with Magic Keyboard, Magic Mouse and iPad',
    image: 'https://smartmockups-web-assets.imgix.net/mockups/5mrGHiisy_pr_en.jpg?h=570&w=760&fit=crop',
  },
  {
    id: 'tshDnRIQoN1',
    title: 'iPhone 11 in the hands of a woman with decorated nails',
    image: 'https://smartmockups-web-assets.imgix.net/mockups/tshDnRIQoN1_pr_en.jpg?h=570&w=760&fit=crop',
  },
  {
    id: 'FmB4UDqU0g',
    title: 'MacBook Pro with iPhone 11 Pro in the hands of a man',
    image: 'https://smartmockups-web-assets.imgix.net/mockups/FmB4UDqU0g_pr_en.jpg?h=570&w=760&fit=crop',
  },
  {
    id: 'FmB4UDqU0g',
    title: 'MacBook Pro with iPhone 11 Pro in the hands of a man',
    image: 'https://smartmockups-web-assets.imgix.net/mockups/FmB4UDqU0g_pr_en.jpg?h=570&w=760&fit=crop',
  },
]*/

type Mockup = {
  id: string
  title: string
  thumb: string
}

type MockupsProps = {
  mockups: Mockup[]
}

export const Mockups: FC<MockupsProps> = ({mockups}) => {
  return (
    <Container>
      {mockups.map((mockup) => (
        <StyledLabeledImage key={mockup.id} label={mockup.title} image={mockup.thumb} />
      ))}
    </Container>
  )
}
