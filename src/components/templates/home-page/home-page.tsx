import {FC} from 'react'
import styled from 'styled-components'
import {Filter, Mockups} from '../../organisms'
import type {Category, Mockup} from '../../../types'

const StyledFilter = styled(Filter)`
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
      <StyledFilter loading={loading} activeCategory={activeCategory} handleClickFilter={handleClickFilter} filters={categories} />
      <Mockups mockups={mockups} />
    </>
  )
}
