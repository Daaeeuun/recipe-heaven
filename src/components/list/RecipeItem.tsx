import React from 'react'
import { Link } from 'react-router-dom'
import { IoStar } from 'react-icons/io5'
import { IoIosStar } from 'react-icons/io'
import { GoComment } from 'react-icons/go'

// 레시피 목록에 들어가는 카드 하나하나 -> 클릭시 상세페이지 이동
interface IProps {
  id: string
  title: string
  image: string
  userId: string
  postDate: Date
  avgRating: number
  reviewCnt: number
}

const RecipeItem = ({
  id,
  title,
  image,
  userId,
  avgRating,
  reviewCnt,
}: IProps) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className="flex flex-col group relative overflow-hidden">
        <div className="overflow-hidden rounded w-full h-60">
          <img
            src={image}
            alt={`${title}의 메인이미지`}
            className="object-cover w-full h-60 duration-1000 group-hover:scale-125"
          />
        </div>
        <div>
          <div className="text-base font-medium">{title}</div>
          <div className="text-sm text-gray-600">{userId}</div>
          <div className="flex gap-2">
            <div>
              <IoIosStar className="inline-block mb-0.5 mr-0.5 text-red-600" />
              <span className="text-xs font-bold text-gray-700">
                {avgRating}
              </span>
            </div>
            <div>
              <GoComment className="inline-block mr-0.5" />
              <span className="text-xs font-medium text-gray-600">
                {reviewCnt}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecipeItem