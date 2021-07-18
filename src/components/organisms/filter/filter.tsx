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

const StyledLi = styled.li<{loading?: boolean}>`
  margin: 15px 20px;
  height: 19px;

  background: ${(p) => (p.loading) ? 'linear-gradient(270deg, #eee, #dcdcdc)' : 'none'};
  background-size: 400% 400%;
  animation: AnimationName 2s ease infinite;

  @keyframes AnimationName {
    0% {
      background-position: 0 51%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0 51%
    }
  }
`

type Filter = {
  slug: string
  title: string
}

type FilterProps = {
  loading: boolean
  activeCategory: string
  filters: Filter[]
  className?: string
  handleClickFilter: (slug: string) => void
}

const groupFilters = (filters: any[]) => {
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

  return columns
}

const generateZeroStateFilters = () => {
  const emptyArray = new Array(11).fill(false)

  return groupFilters(emptyArray)
}

export const Filter: FC<FilterProps> = ({loading, activeCategory, filters, className, handleClickFilter}) => {
  const columns = (loading) ? generateZeroStateFilters() : groupFilters(filters)

  return (
    <StyledContainer className={className}>
      {
        columns.map((column, index) => {
          return (
            <Column key={index}>
              {
                column.map((row, index) => {
                  return (row) ? (
                    <StyledLi key={row.slug}>
                      <Text weight={(row.slug === activeCategory) ? 'bold' : 'normal'}
                        onClick={() => handleClickFilter(row.slug)}>{row.title}</Text>
                    </StyledLi>
                  ) : (<StyledLi key={index} loading={loading}/>)
                })
              }
            </Column>
          )
        })
      }
    </StyledContainer>
  )
}
