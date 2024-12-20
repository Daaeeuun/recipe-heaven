const dummyData = {
  recipeid: 0,
  subCategoryId: 0,
  recipeName: '파티용 케이크',
  img: '../public/다운로드.png',
  portion: 30,
  leadTime: '서른마흔 다섯시간',
  level: '지옥',
  ingredient: ['수박', '당근', '참외', '메론', '토끼', '고추가루', '쌀'],
  sequenceExplain: [
    '닭에게 계란을 뺴앗아간다... 눈가가 붉어지며 안된다고 소리치는 닭에게서 계란을 기어코 뻇어간다...',
    '그 계란을 풀고 미리 혼내준 버터에 넣는다... ',
    '또 거기에 설탕을 넣고 잘 녹인다.',
    '미리 조사놓은 박력분 그걸또 패대기를 친다.. 크흑 무자비한놈들...'
  ],
  sequenceImg: [
    'data:image/jpeg;base64,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',
    'data:image/jpeg;base64,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',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkzcQXwz_GIt1xA0cPT1DjI5QDasjWXVqtA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGMJeBvlJzrlmjnXgmTfAOIXcrzACII7CG2A&usqp=CAU',
  ],
  aveStar: 3,
  Like: 23,
}

const reviewModel = [
  {
    reviewId: 'ceads',
    recipeId: 4,
    id: 1,
    start: 4,
    comment: "It's so delicious",
    time: 'October 22, 2022',
  },
  {
    reviewId: 'asdjf',
    recipeId: 5,
    id: 2,
    start: 5,
    comment: 'Amazing recipe!',
    time: 'November 5, 2022',
  },
  {
    reviewId: 'qwery',
    recipeId: 0,
    id: 3,
    start: 3,
    comment: 'Not bad, but could be better',
    time: 'December 12, 2022',
  },
  {
    reviewId: 'zxcvb',
    recipeId: 0,
    id: 4,
    start: 5,
    comment: 'Absolutely loved it!',
    time: 'January 8, 2023',
  },
  {
    reviewId: 'plmok',
    recipeId: 9,
    id: 5,
    start: 4,
    comment: 'Good taste, easy to make',
    time: 'February 14, 2023',
  },
  {
    reviewId: 'uytre',
    recipeId: 6,
    id: 6,
    start: 4,
    comment: 'Delicious and satisfying',
    time: 'March 3, 2023',
  },
  {
    reviewId: 'nbvcs',
    recipeId: 8,
    id: 7,
    start: 2,
    comment: 'Could use more flavor',
    time: 'April 19, 2023',
  },
  {
    reviewId: 'hgfds',
    recipeId: 3,
    id: 8,
    start: 5,
    comment: 'Perfect recipe, will make again!',
    time: 'May 7, 2023',
  },
  {
    reviewId: 'lkjhg',
    recipeId: 1,
    id: 9,
    start: 3,
    comment: 'Decent, but not my favorite',
    time: 'June 25, 2023',
  },
  {
    reviewId: 'mnbvc',
    recipeId: 10,
    id: 10,
    start: 4,
    comment: 'Tasty and quick to prepare',
    time: 'July 11, 2023',
  },
]

//헤더 카테고리 navbar 관련
interface Category {
  categoryId: number
  categoryName: string
  categoryParent: string
}

const dummyCategoriesData: Category[] = [
  {
    "categoryId": 1,
    "categoryName": "재료별",
    "categoryParent": "null"
    },
    {
    "categoryId": 2,
    "categoryName": "육류",
    "categoryParent": "재료별"
    },
    {
      "categoryId": 3,
      "categoryName": "상황별",
      "categoryParent": "null"
      },
      {
      "categoryId": 4,
      "categoryName": "특별한날",
      "categoryParent": "상황별"
      },
      {
      "categoryId": 5,
      "categoryName": "해산물",
      "categoryParent": "재료별"
      },
      {
      "categoryId": 6,
      "categoryName": "크리스마스",
      "categoryParent": "상황별"
      }
]


const dummyCategorList = [
  {
    id: 1,
    name: 'Ingredient',
    children: [
      { id: 11, name: 'Pork' },
      { id: 12, name: 'Chicken' },
      { id: 13, name: 'Vegetables' },
    ],
  },
  {
    id: 2,
    name: 'Situation',
    children: [
      { id: 1, name: 'Breakfast' },
      { id: 2, name: 'Lunch' },
      { id: 3, name: 'Dinner' },
    ],
  }
]

const previousData = [
  {
    recipeName: '케이크',
    img: 'hi',
    portion: '3',
    leadTime: '12',
    setCgIngredient: '채소',
    setCgSituation: '일상',
    level: '123',
    ingredient: [
      {
        item: '닭',
        unit: '토끼',
      },
      {
        item: '계란',
        unit: '수박',
      },
    ],
    step: [
      {
        stepNum: 1,
        des: '바위',
        imgUrl:
          'data:image/jpeg;base64,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',
      },
      {
        stepNum: 2,
        des: 'ㅇㄴㄹㅇㄴㄹㄴㅇㄹ',
        imgUrl:
          'data:image/jpeg;base64,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',
      },
    ],
  }
]

export {
  dummyData,
  reviewModel,
  dummyCategoriesData,
  previousData,
  dummyCategorList,
}
