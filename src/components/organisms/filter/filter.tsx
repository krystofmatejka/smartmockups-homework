import {FC} from 'react'
import styled from 'styled-components'
import {Text} from '../../atoms'

const StyledContainer = styled.div`
  display: flex;
`

const Column = styled.ul`
  position: relative;
  width: 25%;
  list-style: none;
  margin: 0 0 0 40px;
  padding: 0;

  &:not(:last-child):after {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 100%;
    background: #E1E1E1;
    top: 0;
    right: 0;
  }
  
  & > li {
    padding: 0;
    margin: 0;
  }

  @media (max-width: 640px) { {
    margin: 0 0 0 20px;
  }
`

type Filter = {
  name: string
}

type FilterProps = {
  filters: Filter[]
}

const filters = [
  {
    name: 'Show all',
  },
  {
    name: 'Branding',
  },
  {
    name: 'Desktop',
  },
  {
    name: 'E-learning bundles',
  },
  {
    name: 'Frames',
  },
  {
    name: 'Garmet-only T-shirts',
  },
  {
    name: 'Iphone X',
  },
  {
    name: 'Multiple devices',
  },
  {
    name: 'Posters',
  },
  {
    name: 'Sweatshirts',
  },
  {
    name: 'T-shirts',
  },
]

export const Filter: FC<FilterProps> = () => {
  const columns = []
  const perColumn = Math.round(filters.length / 4)
  let counter = 0

  filters.forEach((filter, index) => {
    if (!columns[counter]) {
      columns[counter] = []
    }
    columns[counter].push(filter)

    if ((index + 1) % perColumn === 0) {
      counter++
    }
  })

  return (
    <StyledContainer>
      {
        columns.map((column) => {
          return (
            <Column>
              {
                column.map((row) => {
                  return (
                    <li>
                      <Text>{row.name}</Text>
                    </li>
                  )
                })
              }
            </Column>
          )
        })
      }
    </StyledContainer>
  )
}
