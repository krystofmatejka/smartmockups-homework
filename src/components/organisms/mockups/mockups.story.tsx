import {Mockups} from './mockups'

export default {
  title: 'Organisms/Mockups',
  component: Mockups,
}

export const MockupsStory = (props) => {
  return <Mockups {...props}/>
}

MockupsStory.bind({})
/*MockupsStory.args = {
  label: 'iphone x',
  image: 'https://smartmockups-web-assets.imgix.net/mockups/tshDnRIQoN1_pr_en.jpg?h=570&w=760&fit=crop',
}*/
