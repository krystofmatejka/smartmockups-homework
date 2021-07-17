import {FC, useState} from 'react'
import styled from 'styled-components'
import {Filter, Mockups} from '../../organisms'

const StyledFilter = styled(Filter)`
  margin-bottom: 20px;
`

const Container = styled.div`

`

type HomePageProps = {

}

export const HomePage: FC<HomePageProps> = () => {
  //

  return (
    <Container>
      <StyledFilter filters={[]} />
      <Mockups />
    </Container>
  )
}
