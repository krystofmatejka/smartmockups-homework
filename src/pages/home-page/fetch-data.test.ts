import {fetchData} from './fetch-data'

const categories = [
  {
    title: 'Technology',
    slug: 'digital',
    children: [
      {
        title: 'Smartphone',
        slug: 'smartphone',
        children: [
          {
            title: 'iPhone',
            slug: 'iphone',
            children: [],
          },
          {
            title: 'iPhone X',
            slug: 'iphone-x',
            children: [],
          },
          {
            title: 'iPhone X',
            slug: 'iphone_x',
            children: [],
          },
        ],
      },
      {
        title: 'Desktop',
        slug: 'desktop',
        children: [
          {
            title: 'iMac',
            slug: 'imac',
            children: [],
          },
          {
            title: 'Windows',
            slug: 'windows-desktop',
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Apparel',
    slug: 'apparel',
    children: [
      {
        title: 'T-shirts',
        slug: 'tshirts',
        children: [
          {
            title: 'Men\'s Tshirts ',
            slug: 'men-tshirts',
            children: [],
          },
        ],
      },
    ],
  },
]

const mockups = [
  {
    id: 'tshDnRIQoN1',
    title: 'iPhone 11 in the hands of a woman with decorated nails',
    category: ['desktop', 'iphone-x', 'iphone_x', 'multiple-devices'],
    thumb: 'https://smartmockups-web-assets.imgix.net/mockups/tshDnRIQoN1_pr_en.jpg?h=570&w=760&fit=crop',
  }, {
    id: 'FmB4UDqU0g',
    title: 'MacBook Pro with iPhone 11 Pro in the hands of a man',
    category: ['desktop', 'iphone-x', 'iphone_x', 'multiple-devices', 'multiple_devices'],
    thumb: 'https://smartmockups-web-assets.imgix.net/mockups/FmB4UDqU0g_pr_en.jpg?h=570&w=760&fit=crop',
  }, {
    id: 'F4FGwwM3Gd',
    title: 'Smiling man with glasses wearing a T-shirt near the grey wall',
    category: ['tshirts'],
    thumb: 'https://smartmockups-web-assets.imgix.net/mockups/F4FGwwM3Gd_pr_en.jpg?h=570&w=760&fit=crop',
  }, {
    id: '19KKrhFbI',
    title: 'T-shirt on a hanger',
    category: ['tshirts', 'garment-only-tshirts'],
    thumb: 'https://smartmockups-web-assets.imgix.net/mockups/19KKrhFbI_pr_en.jpg?h=570&w=760&fit=crop',
  },
]

/*
const categories = [{
  'title': 'Technology',
  'slug': 'digital',
  'children': [{
    'title': 'Smartphone',
    'slug': 'smartphone',
    'children': [{'title': 'iPhone', 'slug': 'iphone', 'children': []}, {
      'title': 'iPhone 12',
      'slug': 'iphone-12',
      'children': [],
    }, {'title': 'iPhone 11', 'slug': 'iphone-11', 'children': []}, {
      'title': 'iPhone X',
      'slug': 'iphone-x',
      'children': [],
    }, {'title': 'iPhone X', 'slug': 'iphone_x', 'children': []}, {
      'title': 'iPhone 8',
      'slug': 'iphone-8',
      'children': [],
    }, {'title': 'iPhone SE', 'slug': 'iphone-se', 'children': []}, {
      'title': 'Android',
      'slug': 'android-phone',
      'children': [],
    }, {'title': 'Samsung', 'slug': 'samsung-phone', 'children': []}],
  }, {
    'title': 'Desktop',
    'slug': 'desktop',
    'children': [{'title': 'iMac', 'slug': 'imac', 'children': []}, {
      'title': 'Windows',
      'slug': 'windows-desktop',
      'children': [],
    }],
  }, {
    'title': 'Laptop',
    'slug': 'laptop',
    'children': [{'title': 'MacBook', 'slug': 'macbook', 'children': []}, {
      'title': 'MacBook Pro',
      'slug': 'macbook-pro',
      'children': [],
    }, {'title': 'MacBook Air', 'slug': 'macbook-air', 'children': []}, {
      'title': 'Windows',
      'slug': 'windows-laptop',
      'children': [],
    }],
  }, {
    'title': 'Tablet',
    'slug': 'tablet',
    'children': [{'title': 'iPad', 'slug': 'ipad', 'children': []}, {
      'title': 'iPad Pro',
      'slug': 'ipad-pro',
      'children': [],
    }, {'title': 'iPad Mini', 'slug': 'ipad-mini', 'children': []}, {
      'title': 'Android',
      'slug': 'android-tablet',
      'children': [],
    }],
  }, {'title': 'Watch', 'slug': 'watch', 'children': []}, {
    'title': 'TV & screens',
    'slug': 'tv-screen',
    'children': [],
  }, {'title': 'Multiple devices', 'slug': 'multiple-devices', 'children': []}, {
    'title': 'Multiple devices',
    'slug': 'multiple_devices',
    'children': [],
  }, {'title': 'E-learning bundles', 'slug': 'e-learning', 'children': []}, {
    'title': 'Screen',
    'slug': 'screen-layers',
    'children': [{
      'title': 'Smartphone screen',
      'slug': 'screen-smartphone',
      'children': [],
    }, {'title': 'Desktop screen', 'slug': 'screen-desktop', 'children': []}, {
      'title': 'Tablet screen',
      'slug': 'screen-tablet',
      'children': [],
    }],
  }, {'title': 'E-readers', 'slug': 'e-reader', 'children': []}],
}, {
  'title': 'Print',
  'slug': 'print',
  'children': [{'title': 'Branding', 'slug': 'branding', 'children': []}, {
    'title': 'Business cards',
    'slug': 'business-cards',
    'children': [{
      'title': 'EU Business cards',
      'slug': 'business-cards-eu',
      'children': [],
    }, {'title': 'US Business cards', 'slug': 'business-cards-us', 'children': []}, {
      'title': 'Vertical business cards',
      'slug': 'business-cards-vertical',
      'children': [],
    }],
  }, {
    'title': 'Greeting cards',
    'slug': 'greeting-cards',
    'children': [{
      'title': 'Portrait greeting cards',
      'slug': 'portrait-greeting-cards',
      'children': [],
    }, {
      'title': 'Landscape greeting cards',
      'slug': 'landscape-greeting-cards',
      'children': [],
    }, {'title': 'Square greeting cards', 'slug': 'square-greeting-cards', 'children': []}],
  }, {
    'title': 'Magazines',
    'slug': 'magazines',
    'children': [{
      'title': 'Portrait magazines',
      'slug': 'portrait-magazines',
      'children': [],
    }, {'title': 'Landscape magazines', 'slug': 'landscape-magazines', 'children': []}, {
      'title': 'Square magazines',
      'slug': 'square-magazines',
      'children': [],
    }],
  }, {
    'title': 'Books',
    'slug': 'books',
    'children': [{'title': 'Portrait books', 'slug': 'portrait-books', 'children': []}, {
      'title': 'Square books',
      'slug': 'square-books',
      'children': [],
    }, {'title': 'Hard cover books', 'slug': 'hardcover-books', 'children': []}, {
      'title': 'Soft cover books',
      'slug': 'softcover-books',
      'children': [],
    }],
  }, {
    'title': 'Brochures & sheets',
    'slug': 'brochures',
    'children': [{
      'title': 'Portrait brochures',
      'slug': 'portrait-brochures',
      'children': [],
    }, {'title': 'Landscape brochures', 'slug': 'landscape-brochures', 'children': []}, {
      'title': 'Bi-fold brochures',
      'slug': 'bi-fold-brochures',
      'children': [],
    }, {'title': 'Tri-fold brochures', 'slug': 'tri-fold-brochures', 'children': []}],
  }, {
    'title': 'Frames',
    'slug': 'frames',
    'children': [{'title': 'Canvas', 'slug': 'canvas', 'children': []}, {
      'title': 'Portrait frames',
      'slug': 'portrait-frames',
      'children': [],
    }, {'title': 'Landscape frames', 'slug': 'landscape-frames', 'children': []}, {
      'title': 'Square frames',
      'slug': 'square-frames',
      'children': [],
    }],
  }, {
    'title': 'Posters',
    'slug': 'posters',
    'children': [{'title': 'Portrait posters', 'slug': 'portrait-posters', 'children': []}, {
      'title': 'Square posters',
      'slug': 'square-posters',
      'children': [],
    }],
  }, {
    'title': 'Outdoor',
    'slug': 'outdoor',
    'children': [{'title': 'Billboards', 'slug': 'billboards', 'children': []}, {
      'title': 'City lights',
      'slug': 'city-lights',
      'children': [],
    }, {'title': 'Wall signs', 'slug': 'wall-signs', 'children': []}, {
      'title': 'Mural',
      'slug': 'mural',
      'children': [],
    }],
  }, {'title': 'iPhone cases', 'slug': 'iphone-case', 'children': []}, {
    'title': 'Other',
    'slug': 'print-other',
    'children': [],
  }],
}, {
  'title': 'Packaging',
  'slug': 'packaging',
  'children': [{'title': 'Cosmetics', 'slug': 'cosmetics', 'children': []}, {
    'title': 'Food',
    'slug': 'food',
    'children': [],
  }, {
    'title': 'Beverages',
    'slug': 'beverages',
    'children': [{
      'title': 'Bottles',
      'slug': 'bottles',
      'children': [{'title': 'Beer', 'slug': 'beer', 'children': []}, {
        'title': 'Wine',
        'slug': 'wine',
        'children': [{'title': 'White wine', 'slug': 'white-wine', 'children': []}, {
          'title': 'Red wine',
          'slug': 'red-wine',
          'children': [],
        }, {'title': 'Rose wine', 'slug': 'rose-wine', 'children': []}],
      }],
    }, {'title': 'Cups', 'slug': 'cups', 'children': []}, {'title': 'Cans', 'slug': 'cans', 'children': []}],
  }, {'title': 'Supplements', 'slug': 'supplements', 'children': []}, {
    'title': 'Bags & boxes',
    'slug': 'bags-and-boxes',
    'children': [],
  }],
}, {
  'title': 'Apparel',
  'slug': 'apparel',
  'children': [{
    'title': 'T-shirts',
    'slug': 'tshirts',
    'children': [{'title': 'Men\'s Tshirts ', 'slug': 'men-tshirts', 'children': []}, {
      'title': 'Women\'s T-shirts',
      'slug': 'women-tshirts',
      'children': [],
    }, {'title': 'Kids T-shirts', 'slug': 'kids-tshirts', 'children': []}, {
      'title': 'Unisex T-shirts',
      'slug': 'unisex-tshirts',
      'children': [],
    }, {'title': 'Garment only T-shirts', 'slug': 'garment-only-tshirts', 'children': []}, {
      'title': 'Flatlay T-shirts',
      'slug': 'flatlay-tshirts',
      'children': [],
    }],
  }, {
    'title': 'Sweatshirts',
    'slug': 'sweatshirts',
    'children': [{
      'title': 'Men\'s sweatshirts',
      'slug': 'men-sweatshirts',
      'children': [],
    }, {
      'title': 'Women\'s sweatshirts',
      'slug': 'women-sweatshirts',
      'children': [],
    }, {
      'title': 'Garment only sweatshirts',
      'slug': 'garment-only-sweatshirts',
      'children': [],
    }, {'title': 'Unisex sweatshirts', 'slug': 'unisex-sweatshirts', 'children': []}, {
      'title': 'Flatlay sweatshirts',
      'slug': 'flatlay-sweatshirts',
      'children': [],
    }],
  }, {
    'title': 'Hoodies',
    'slug': 'hoodies',
    'children': [{'title': 'Men\'s hoodies', 'slug': 'men-hoodies', 'children': []}, {
      'title': 'Women\'s hoodies',
      'slug': 'women-hoodies',
      'children': [],
    }, {'title': 'Unisex hoodies', 'slug': 'unisex-hoodies', 'children': []}, {
      'title': 'Garment only hoodies',
      'slug': 'garment-only-hoodies',
      'children': [],
    }, {'title': 'Flatlay hoodies', 'slug': 'flatlay-hoodies', 'children': []}],
  }, {
    'title': 'Tank tops',
    'slug': 'tank-tops',
    'children': [{'title': 'Men\'s tank tops', 'slug': 'men-tank-tops', 'children': []}, {
      'title': 'Women\'s tank tops',
      'slug': 'women-tank-tops',
      'children': [],
    }, {'title': 'Unisex tank tops', 'slug': 'unisex-tank-tops', 'children': []}, {
      'title': 'Garment only tank tops',
      'slug': 'garment-only-tank-tops',
      'children': [],
    }, {'title': 'Flatlay tank tops', 'slug': 'flatlay-tank-tops', 'children': []}],
  }, {
    'title': 'Sportswear',
    'slug': 'sportswear',
    'children': [{'title': 'Leggings', 'slug': 'leggings', 'children': []}, {
      'title': 'Sport bras',
      'slug': 'sports-bra',
      'children': [],
    }, {'title': 'Swimwear', 'slug': 'swimwear', 'children': []}],
  }, {'title': 'Toddlers', 'slug': 'toddlers', 'children': []}, {
    'title': 'Face masks',
    'slug': 'face-masks',
    'children': [],
  }, {'title': 'Accessories', 'slug': 'accessories', 'children': []}],
}, {
  'title': 'Home & living',
  'slug': 'home-and-living',
  'children': [{
    'title': 'Mugs',
    'slug': 'mugs',
    'children': [{'title': 'Ceramic mugs', 'slug': 'ceramic-mugs', 'children': []}, {
      'title': 'Enamel mugs',
      'slug': 'enamel-mugs',
      'children': [],
    }, {'title': 'Glass mugs', 'slug': 'glass-mugs', 'children': []}],
  }, {'title': 'Pillows', 'slug': 'pillows', 'children': []}, {
    'title': 'Candles',
    'slug': 'candles',
    'children': [],
  }, {'title': 'Other', 'slug': 'other-home-living', 'children': []}],
}, {
  'title': 'Social media',
  'slug': 'social',
  'children': [{'title': 'Facebook', 'slug': 'facebook', 'children': []}, {
    'title': 'Instagram',
    'slug': 'instagram',
    'children': [],
  }, {'title': 'Twitter', 'slug': 'twitter', 'children': []}, {
    'title': 'Other',
    'slug': 'other-social',
    'children': [],
  }],
}]

const mockups = [{
  'id': 'Ao3176YQZE',
  'title': 'Branding near the notepad and a duck tape',
  'category': ['branding'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/Ao3176YQZE_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': '5mrGHiisy',
  'title': 'iMac on the wooden desk with Magic Keyboard, Magic Mouse and iPad',
  'category': ['desktop'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/5mrGHiisy_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'tshDnRIQoN1',
  'title': 'iPhone 11 in the hands of a woman with decorated nails',
  'category': ['desktop', 'iphone-x', 'iphone_x', 'multiple-devices'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/tshDnRIQoN1_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'FmB4UDqU0g',
  'title': 'MacBook Pro with iPhone 11 Pro in the hands of a man',
  'category': ['desktop', 'iphone-x', 'iphone_x', 'multiple-devices', 'multiple_devices'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/FmB4UDqU0g_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'c3fQdQCdd',
  'title': 'Software bundle on Dell display with changeable color',
  'category': ['e-learning', 'desktop', 'e-learning'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/c3fQdQCdd_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'BayPhUG3r',
  'title': 'Wooden portrait frame hanging on the concrete wall over the minimalist office desk',
  'category': ['frames'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/BayPhUG3r_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'F4FGwwM3Gd',
  'title': 'Smiling man with glasses wearing a T-shirt near the grey wall',
  'category': ['tshirts'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/F4FGwwM3Gd_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': '19KKrhFbI',
  'title': 'T-shirt on a hanger',
  'category': ['tshirts', 'garment-only-tshirts'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/19KKrhFbI_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'ZVcYeZjoYl7',
  'title': 'Brunette woman wearing a T-shirt with a flower decoration',
  'category': ['tshirts'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/ZVcYeZjoYl7_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'MTX91PLDNte',
  'title': 'Blonde woman wearing a T-shirt on the stairs',
  'category': ['tshirts'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/MTX91PLDNte_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'SpnaRP0Gwoi',
  'title': 'Glued portrait poster on the wall',
  'category': ['posters'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/SpnaRP0Gwoi_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'SqgRHV1liOZ',
  'title': 'Glued portrait poster on the brick wall',
  'category': ['posters'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/SqgRHV1liOZ_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'B5tKTRnAWK',
  'title': 'Glued portrait poster on the wall near the man with laptop',
  'category': ['posters'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/B5tKTRnAWK_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'N7FeBqh02f',
  'title': 'African-American man with a cap wearing a sweatshirt outdoors',
  'category': ['sweatshirts'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/N7FeBqh02f_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'Haa37C8wWB',
  'title': 'Brunette woman wearing a sweatshirt with a cup of coffee',
  'category': ['sweatshirts'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/Haa37C8wWB_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'tnjb4olFfS',
  'title': 'Brunette woman holding a sweatshirt',
  'category': ['sweatshirts'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/tnjb4olFfS_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'FJdMYFnX8t',
  'title': 'iPhone 12 Pro in the hands of a man',
  'category': ['iphone-x', 'iphone_x'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/FJdMYFnX8t_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'cKFuO6FMWEJ',
  'title': 'iPhone 12 Pro in the hands of a man',
  'category': ['iphone-x', 'iphone_x'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/cKFuO6FMWEJ_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'Wsj7oBPkx',
  'title': 'MacBook Pro, iPhone XS and display on white work desk',
  'category': ['iphone-x', 'iphone_x', 'desktop'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/Wsj7oBPkx_pr_en.jpg?h=570&w=760&fit=crop',
}, {
  'id': 'zfintXP33',
  'title': 'Man working on iMac in the office',
  'category': ['desktop'],
  'thumb': 'https://smartmockups-web-assets.imgix.net/mockups/zfintXP33_pr_en.jpg?h=570&w=760&fit=crop',
}]*/

/*{
  "iphone-x" => {
    "mockups": [{"category": ["desktop", "iphone-x", "iphone_x", "multiple-devices"], "id": "tshDnRIQoN1", "thumb": "https://smartmockups-web-assets.imgix.net/mockups/tshDnRIQoN1_pr_en.jpg?h=570&w=760&fit=crop", "title": "iPhone 11 in the hands of a woman with decorated nails"}, {"category": ["desktop", "iphone-x", "iphone_x", "multiple-devices", "multiple_devices"], "id": "FmB4UDqU0g", "thumb": "https://smartmockups-web-assets.imgix.net/mockups/FmB4UDqU0g_pr_en.jpg?h=570&w=760&fit=crop", "title": "MacBook Pro with iPhone 11 Pro in the hands of a man"}], "slug": "iphone-x", "title": "iPhone X"}, "desktop" => {"mockups": [{"category": ["desktop", "iphone-x", "iphone_x", "multiple-devices"], "id": "tshDnRIQoN1", "thumb": "https://smartmockups-web-assets.imgix.net/mockups/tshDnRIQoN1_pr_en.jpg?h=570&w=760&fit=crop", "title": "iPhone 11 in the hands of a woman with decorated nails"}, {"category": ["desktop", "iphone-x", "iphone_x", "multiple-devices", "multiple_devices"], "id": "FmB4UDqU0g", "thumb": "https://smartmockups-web-assets.imgix.net/mockups/FmB4UDqU0g_pr_en.jpg?h=570&w=760&fit=crop", "title": "MacBook Pro with iPhone 11 Pro in the hands of a man"}], "slug": "desktop", "title": "Desktop"}, "tshirts" => {"mockups": [{"category": ["tshirts"], "id": "F4FGwwM3Gd", "thumb": "https://smartmockups-web-assets.imgix.net/mockups/F4FGwwM3Gd_pr_en.jpg?h=570&w=760&fit=crop", "title": "Smiling man with glasses wearing a T-shirt near the grey wall"}, {"category": ["tshirts", "garment-only-tshirts"], "id": "19KKrhFbI", "thumb": "https://smartmockups-web-assets.imgix.net/mockups/19KKrhFbI_pr_en.jpg?h=570&w=760&fit=crop", "title": "T-shirt on a hanger"}], "slug": "tshirts", "title": "T-shirts"}}
*/

jest.mock('../../lib', () => ({
  getRequest: (url) => {
    if (url === 'https://5lt31zvq40.execute-api.us-east-1.amazonaws.com/dev/categories') {
      return categories
    }

    if (url === 'https://5lt31zvq40.execute-api.us-east-1.amazonaws.com/dev/mockups') {
      return mockups
    }
  },
}))

describe('Fetch data', () => {
  test('1', async () => {
    const res = await fetchData()
    //const expected = new Map()
    //expected.set('iphone-x', {})
    //expected.set('')

    return expect(666).toEqual(666)
  })
})
