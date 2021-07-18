import {FC} from 'react'
import styled from 'styled-components'
import {Filter, Mockups} from '../../organisms'

const StyledFilter = styled(Filter)`
  margin-bottom: 20px;
`

type Filter = {
  slug: string
  title: string
}

type Mockup = {
  id: string
  title: string
  thumb: string
}

type HomePageProps = {
  loading: boolean
  activeCategory: string
  handleClickFilter: (slug: string) => void
  filters: Filter[]
  mockups: Mockup[]
}

export const HomePage: FC<HomePageProps> = ({loading, activeCategory, handleClickFilter, filters, mockups }) => {
  return (
    <>
      <StyledFilter loading={loading} activeCategory={activeCategory} handleClickFilter={handleClickFilter} filters={filters} />
      <Mockups mockups={mockups} />
    </>
  )
}
