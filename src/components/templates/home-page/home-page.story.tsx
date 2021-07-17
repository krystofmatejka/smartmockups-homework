import {HomePage} from './home-page'

export default {
  title: 'Templates/Home Page',
  component: HomePage,
}

export const HomePageStory = (props) => {
  return <HomePage {...props}/>
}

HomePageStory.bind({})
/*MockupsStory.args = {
  label: 'iphone x',
  image: 'https://smartmockups-web-assets.imgix.net/mockups/tshDnRIQoN1_pr_en.jpg?h=570&w=760&fit=crop',
}*/
