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
  filters: Filter[]
  mockups: Mockup[]
}

export const HomePage: FC<HomePageProps> = ({filters, mockups}) => {
  return (
    <Container>
      <StyledFilter filters={filters} />
      <Mockups mockups={mockups} />
    </Container>
  )
}
