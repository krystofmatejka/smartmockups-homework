import {Image} from './image'

export default {
  title: 'Atoms/Image',
  component: Image,
}

export const ImageStory = (props) => {
  return <Image {...props}/>
}

ImageStory.bind({})
ImageStory.args = {
  src: 'https://smartmockups-web-assets.imgix.net/mockups/tshDnRIQoN1_pr_en.jpg?h=570&w=760&fit=crop',
  alt: 'iphone x',
}
