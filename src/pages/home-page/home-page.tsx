import {FC, useEffect, useReducer} from 'react'
import {HomePage as HomePageTemplate} from '../../components/templates'
import {fetchData} from './fetch-data'

type State = {
  loading: boolean
  error?: string
  data: any
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
    }
  case 'SET_ERROR':
    return {
      loading: false,
      error: action.payload,
      data: undefined,
    }
  default:
    return INITIAL_STATE
  }
}

const INITIAL_STATE = {
  loading: true,
  error: undefined,
  data: {},
}

const useHomePage = () => {
  const [{loading, error, data}, dispatch] = useReducer(reducer, INITIAL_STATE)
  const setError = (error: any) => dispatch({type: 'SET_ERROR', payload: error})
  const setData = (data: any) => dispatch({type: 'SET_DATA', payload: data})

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
    data,
  }
}

export const HomePage: FC = () => {
  const {loading, error, data} = useHomePage()

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

  const active = 'desktop'

  const filters = []
  let mockups = []

  for (const [key, value] of data) {
    console.log(value)
    filters.push(value)
    if (key === active) {
      mockups = value.mockups
    }
  }

  console.log(data)
  return (
    <HomePageTemplate
      filters={filters}
      mockups={mockups}
    />
  )
}
