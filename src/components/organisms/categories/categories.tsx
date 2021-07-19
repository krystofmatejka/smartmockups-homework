import {FC} from 'react'
import styled from 'styled-components'
import {Text} from '../../atoms'
import {BREAKPOINTS} from '../../../theme'
import type {Category} from '../../../types'

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

const StyledLi = styled.li<{showZeroState?: boolean}>`
  margin: 15px 20px;
  height: 19px;

  background: ${(p) => (p.showZeroState) ? 'linear-gradient(270deg, #eee, #dcdcdc)' : 'none'};
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

const StyledText = styled(Text)`
  cursor: pointer;
`

const group = (categories: Category[]) => {
  const columns = []
  const perColumn = Math.round(categories.length / 4)
  let counter = 0

  categories.forEach((filter, index) => {
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

const generateZeroState = () => {
  const emptyArray = new Array(11).fill(false)

  return group(emptyArray)
}

type CategoriesProps = {
  loading: boolean
  activeCategory: string
  categories: Category[]
  className?: string
  onClick: (slug: string) => void
}

export const Categories: FC<CategoriesProps> = ({loading, activeCategory, categories, className, onClick}) => {
  const columns = (loading) ? generateZeroState() : group(categories)

  return (
    <StyledContainer className={className}>
      {
        columns.map((column, index) => {
          return (
            <Column key={index}>
              {
                column.map((row, index) => (row) ? (
                  <StyledLi key={row.slug}>
                    <StyledText
                      weight={(row.slug === activeCategory) ? 'bold' : 'normal'}
                      onClick={() => onClick(row.slug)}
                    >
                      {row.title}
                    </StyledText>
                  </StyledLi>
                ) : (
                  <StyledLi key={index} showZeroState={loading}/>
                ))
              }
            </Column>
          )
        })
      }
    </StyledContainer>
  )
}
