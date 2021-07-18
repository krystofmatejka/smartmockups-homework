import {FC, useEffect, useReducer} from 'react'
import {HomePage as HomePageTemplate} from '../../components/templates'
import {fetchData} from './fetch-data'

type State = {
  loading: boolean
  error?: string
  data: any
  activeCategory: string
}

type Action =
  | {type: 'SET_LOADING'}
  | {type: 'SET_ERROR', payload: any}
  | {type: 'SET_DATA', payload: any}
  | {type: 'CHANGE_CATEGORY', payload: any}

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
  data: null,
  activeCategory: 'show-all',
}

const useHomePage = () => {
  const [{loading, error, data, activeCategory}, dispatch] = useReducer(reducer, INITIAL_STATE)
  const setError = (error: any) => dispatch({type: 'SET_ERROR', payload: error})
  const setData = (data: any) => dispatch({type: 'SET_DATA', payload: data})
  const changeCategory = (slug: string) => dispatch({type: 'CHANGE_CATEGORY', payload: slug})

  useEffect(() => {
    fetchData().then((data) => {
      setData(data)
    }).catch((error) => {
      setError(error)
    })
  }, [])

  return {
    loading,
    error,
    activeCategory,
    changeCategory,
    filters: data ? [...data.values()] : [],
    mockups: (data) ? [...data.get(activeCategory).mockups.values()] : [],
  }
}

export const HomePage: FC = () => {
  const {loading, error, activeCategory, changeCategory, filters, mockups} = useHomePage()

  if (loading) {
    return (
      <div>loading...</div>
    )
  }

  if (error) {
    return (
      <div>Error: ${error}</div>
    )
  }

  return (
    <HomePageTemplate
      activeCategory={activeCategory}
      handleClickFilter={changeCategory}
      filters={filters}
      mockups={mockups}
    />
  )
}
