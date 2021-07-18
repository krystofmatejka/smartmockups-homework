import {getRequest} from '../../lib'

const serializeSlug = (slug: string) => slug.replace(/_/g, '-')

export const fetchData = async () => {
  const categories = await getRequest('https://5lt31zvq40.execute-api.us-east-1.amazonaws.com/dev/categories')
  console.log(categories)

  const result = new Map()

  const flattenCategories = (categories, result: Map<string, any>) => {
    categories.forEach((category) => {
      const serializedSlug = serializeSlug(category.slug)
      if (!result.has(serializedSlug)) {
        result.set(serializedSlug, {slug: serializedSlug, title: category.title, mockups: []})
      }

      if (category.children) {
        flattenCategories(category.children, result)
      }
    })
  }

  flattenCategories(categories, result)

  const mockups = await getRequest('https://5lt31zvq40.execute-api.us-east-1.amazonaws.com/dev/mockups')

  mockups.forEach((mockup) => {
    mockup.category.forEach((category) => {
      if (result.has(category)) {
        const c = result.get(category)
        c.mockups.push(mockup)
      }
    })
  })

  for (const [key, value] of result) {
    if (!value.mockups.length) {
      result.delete(key)
    }
  }

  return result
}
