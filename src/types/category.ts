import type {Mockup} from './mockup'

export type Category = {
  slug: string
  title: string
  mockups: Set<Mockup>
}
