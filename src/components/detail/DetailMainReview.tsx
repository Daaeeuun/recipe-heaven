import React from 'react'

function DetailMainReview({ review }) {
  return (
    <div className="w-full min-w-[10rem] p-10">
      <p
        className="text-3xl font-bold py-2"
        style={{ borderBottom: '1px solid black' }}
      >
        댓글 <span style={{ color: 'orange' }}>{review.length}</span>
      </p>
      {review.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full py-5 px-1 border-zinc-950"
            style={{ borderBottom: '1px solid black' }}
          >
            <div className="flex">
              <div style={{ color: 'orange' }}>{item.reviewId}</div>
              <div className="px-3">{item.time}</div>
            </div>
            <div>{item.comment}</div>
          </div>
        )
      })}
    </div>
  )
}

export default DetailMainReview