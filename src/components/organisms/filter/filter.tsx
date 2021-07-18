import {FC} from 'react'
import styled from 'styled-components'
import {Text} from '../../atoms'
import {BREAKPOINTS} from '../../../theme'

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #E1E1E1;
  border-radius: 4px;
  padding: 20px 0;
`

const Column = styled.ul`
  position: relative;
  width: 25%;
  list-style: none;
  margin: 0;
  padding: 0;

  &:not(:last-child):after {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 100%;
    background: #E1E1E1;
    top: 0;
    right: 0;
  }

  @media (max-width: ${BREAKPOINTS.M}px) {
    width: 50%;

    &:nth-child(even):after {
      display: none;
    }
  }

  @media (max-width: ${BREAKPOINTS.S}px) {
    width: 100%;

    &:nth-child(odd):after {
      display: none;
    }
  }
`

const StyledLi = styled.li`
  margin: 15px 20px;
`

type Filter = {
  slug: string
  title: string
}

type FilterProps = {
  filters: Filter[]
  className?: string
}

/*const filters = [
  {
    name: 'Show all',
    active: true,
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
]*/

export const Filter: FC<FilterProps> = ({filters, className}) => {
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
    <StyledContainer className={className}>
      {
        columns.map((column) => {
          return (
            <Column>
              {
                column.map((row) => {
                  return (
                    <StyledLi>
                      <Text weight={(row.active) ? 'bold' : 'normal'}>{row.title}</Text>
                    </StyledLi>
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
