import {Categories} from './categories'

export default {
  title: 'Organisms/Categories',
  component: Categories,
}

export const CategoriesStory = (props) => {
  return <Categories {...props}/>
}

CategoriesStory.bind({})
CategoriesStory.args = {
  loading: false,
  activeCategory: 'show-all',
  categories: [
    {
      slug: 'a',
      title: 'A',
    },
    {
      slug: 'b',
      title: 'B',
    },
    {
      slug: 'c',
      title: 'C',
    },
    {
      slug: 'd',
      title: 'D',
    },
  ],
  handleClickFilter: () => null,
}
