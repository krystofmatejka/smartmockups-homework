import {LabeledImage} from './labeled-image'

export default {
  title: 'Molecules/Labeled Image',
  component: LabeledImage,
}

export const LabeledImageStory = (props) => {
  return <LabeledImage {...props}/>
}

LabeledImageStory.bind({})
/*LabeledImageStory.args = {
  src: 'https://smartmockups-web-assets.imgix.net/mockups/tshDnRIQoN1_pr_en.jpg?h=570&w=760&fit=crop',
  alt: 'iphone x',
}*/
