import {FC, useEffect, useReducer} from 'react'
import styled from 'styled-components'
import {Categories, Mockups} from '../../organisms'
import {fetchData, SHOW_ALL_KEY} from './fetch-data'
import type {Category} from '../../../types'

const StyledCategories = styled(Categories)`
  margin-bottom: 20px;
`

type State = {
  loading: boolean
  error?: string
  data?: Map<string, Category>
  activeCategory: string
}

type Action =
  | {type: 'SET_LOADING'}
  | {type: 'SET_ERROR', payload: any}
  | {type: 'SET_DATA', payload: Map<string, Category>}
  | {type: 'CHANGE_CATEGORY', payload: string}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
  case 'SET_DATA':
    return {
      loading: false,
      error: undefined,
      data: action.payload,
      activeCategory: state.activeCategory,
    }
  case 'SET_ERROR':
    return {
      loading: false,
      error: action.payload,
      data: undefined,
      activeCategory: state.activeCategory,
    }
  case 'CHANGE_CATEGORY':
    return {
      loading: state.loading,
      error: state.error,
      data: state.data,
      activeCategory: action.payload,
    }
  default:
    return INITIAL_STATE
  }
}

const INITIAL_STATE = {
  loading: true,
  error: undefined,
  data: undefined,
  activeCategory: SHOW_ALL_KEY,
}

const useHomePage = () => {
  const [{loading, error, data, activeCategory}, dispatch] = useReducer(reducer, INITIAL_STATE)
  const setError = (error: any) => dispatch({type: 'SET_ERROR', payload: error})
  const setData = (data: Map<string, Category>) => dispatch({type: 'SET_DATA', payload: data})
  const changeCategory = (slug: string) => dispatch({type: 'CHANGE_CATEGORY', payload: slug})

  useEffect(() => {
    fetchData().then((data) => setData(data)).catch((error) => setError(error))
  }, [])

  return {
    loading,
    error,
    activeCategory,
    changeCategory,
    categories: (data) ? [...data.values()] : [],
    mockups: (data) ? [...data.get(activeCategory).mockups.values()] : [],
  }
}

export const HomePage: FC = () => {
  const {loading, error, activeCategory, changeCategory, categories, mockups} = useHomePage()

  if (error) {
    return (
      <div>Error: ${error}</div>
    )
  }

  return (
    <>
      <StyledCategories
        loading={loading}
        activeCategory={activeCategory}
        onClick={changeCategory}
        categories={categories}
      />
      <Mockups mockups={mockups} />
    </>
  )
}
