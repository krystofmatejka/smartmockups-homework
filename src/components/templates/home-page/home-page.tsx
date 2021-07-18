import {FC, useState} from 'react'
import styled from 'styled-components'
import {Filter, Mockups} from '../../organisms'

const StyledFilter = styled(Filter)`
  margin-bottom: 20px;
`

const Container = styled.div`

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
  activeCategory: string
  handleClickFilter: (slug: string) => void
  filters: Filter[]
  mockups: Mockup[]
}

export const HomePage: FC<HomePageProps> = ({activeCategory, handleClickFilter, filters, mockups }) => {
  return (
    <Container>
      <StyledFilter activeCategory={activeCategory} handleClickFilter={handleClickFilter} filters={filters} />
      <Mockups mockups={mockups} />
    </Container>
  )
}
