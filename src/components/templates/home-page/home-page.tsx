import {FC, useState} from 'react'
import styled from 'styled-components'
import {Filter, Mockups} from '../../organisms'
import {BREAKPOINTS} from '../../../theme'

const StyledFilter = styled(Filter)`
  margin-bottom: 20px;
`

const Container = styled.div`
  max-width: 1055px;
  margin: 30px;

  @media (max-width: ${BREAKPOINTS.M}px) { {
    margin: 15px;
  }
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
