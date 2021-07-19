import {FC} from 'react'
import styled from 'styled-components'
import {Categories, Mockups} from '../../organisms'
import type {Category, Mockup} from '../../../types'

const StyledCategories = styled(Categories)`
  margin-bottom: 20px;
`

type HomePageProps = {
  loading: boolean
  activeCategory: string
  handleClickFilter: (slug: string) => void
  categories: Category[]
  mockups: Mockup[]
}

export const HomePage: FC<HomePageProps> = ({loading, activeCategory, handleClickFilter, categories, mockups }) => {
  return (
    <>
      <StyledCategories
        loading={loading}
        activeCategory={activeCategory}
        handleClickFilter={handleClickFilter}
        categories={categories}
      />
      <Mockups mockups={mockups} />
    </>
  )
}
