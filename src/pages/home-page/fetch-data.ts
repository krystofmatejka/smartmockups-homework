import {getRequest} from '../../lib'
import type {Category, Mockup} from '../../types'

const SHOW_ALL_KEY = 'show-all'

const serializeSlug = (slug: string) => slug.replace(/_/g, '-')

const isObject = (argument: any) => (argument && typeof argument === 'object')

const isNonEmptyString = (argument: any) => (typeof argument === 'string' && argument.length)

const isCategoryValid = (category: any) => (
  isObject(category)
  && isNonEmptyString(category.slug)
  && isNonEmptyString(category.title)
)

const flattenCategories = (categories: any[], result: Map<string, Category>) => {
  categories.forEach((category) => {
    if (isCategoryValid(category)) {
      const serializedSlug = serializeSlug(category.slug)
      if (!result.has(serializedSlug)) {
        result.set(serializedSlug, {
          slug: category.slug,
          title: category.title,
          mockups: new Set<Mockup>(),
        })
      }
    }

    if (Array.isArray(category.children)) {
      flattenCategories(category.children, result)
    }
  })
}

const fetchCategories = async () => {
  const rawCategories = await getRequest(process.env.NEXT_PUBLIC_API_CATEGORIES)

  const result = new Map<string, Category>()
  result.set(SHOW_ALL_KEY, {
    slug: SHOW_ALL_KEY, title: 'Show all', mockups: new Set<Mockup>(),
  })

  flattenCategories(rawCategories, result)

  return result
}

const isMockupValid = (mockup: any) => (
  isObject(mockup)
  && isNonEmptyString(mockup.id)
  && isNonEmptyString(mockup.title)
  && isNonEmptyString(mockup.thumb)
  && Array.isArray(mockup.category)
)

const fetchMockups = async () => {
  const rawMockups = await getRequest(process.env.NEXT_PUBLIC_API_MOCKUPS)

  console.log(rawMockups)

  return (Array.isArray(rawMockups)) ? rawMockups.filter((mockup) => isMockupValid(mockup)) : [] as Mockup[]
}

const addMockupsToCategories = (mockups: Mockup[], categories: Map<string, Category>) => {
  const showAllCategory = categories.get(SHOW_ALL_KEY)

  mockups.forEach((mockup) => {
    mockup.category.forEach((categorySlug) => {
      const category = categories.get(categorySlug)
      if (category) {
        category.mockups.add(mockup)
      }
    })

    showAllCategory.mockups.add(mockup)
  })
}

const deleteEmptyCategories = (categories: Map<string, Category>) => {
  for (const [key, value] of categories) {
    if (!value.mockups.size) {
      categories.delete(key)
    }
  }
}

export const fetchData = async () => {
  const categories = await fetchCategories()
  const mockups = await fetchMockups()

  addMockupsToCategories(mockups, categories)
  deleteEmptyCategories(categories)

  return categories
}
