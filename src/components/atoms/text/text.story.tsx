import {Text} from './text'

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text',
    },
  },
}

export const TextStory = (props) => {
  return <Text {...props}/>
}

TextStory.bind({})
TextStory.args = {
  children: 'Lorem Ipsum is simply dummy text',
}
