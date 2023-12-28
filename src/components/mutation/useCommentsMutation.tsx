import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import {
  fetchDeleteComment,
  fetchDeleteComments,
} from '../../fetch/fetchDeleteComments'
import { useQueryClient } from '@tanstack/react-query'
import { Comment } from '../../fetch/APIResponsesTypes'
import { fetchPostComment } from '../../fetch/fetchPostComment'

export const usePostCommentMutation = () => {
  const queryClient = useQueryClient()
  const { mutate: postComment, isPending: isPosting } = useMutation<
    void,
    Error
  >({
    mutationFn: (postData: Comment) => fetchPostComment('postData'),
    onMutate: async (postData: Comment) => {
      await queryClient.cancelQueries({ queryKey: ['comments'] })
      const previousComments = queryClient.getQueriesData(['comments'])
      queryClient.setQueriesData(['comments'], (old) => [...old, postData])
      return { previousComments }
    },
    onSuccess: () => {
      toast.success('댓글 추가 완료')
    },
    onError: (error, variables, context) => {
      toast.error('잠시 후 다시 시도해주세요')
      queryClient.setQueriesData(['comments'], context.previousComments)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })
  return { postComment, isPosting }
}

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient()
  const { mutate: deleteComment, isPending: isDeleting } = useMutation<
    void,
    Error,
    number
  >({
    mutationFn: (id: number) => fetchDeleteComment(id),
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: ['comments'] })
      const previousComments = queryClient.getQueriesData<Comment[]>([
        'comments',
      ])
      queryClient.setQueriesData<Comment[]>(
        ['comments'],
        previousComments[0][1].filter((comment) => comment.id !== id),
      )
      return { previousComments }
    },
    onSuccess: () => {
      toast.success('댓글 삭제 완료')
    },
    onError: (error, variables, context) => {
      toast.error('잠시 후 다시 시도해주세요')
      queryClient.setQueriesData<Comment[]>(
        ['comments'],
        context.previousComments,
      )
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })

  return { deleteComment, isDeleting }
}

export const useUpdateCommentMutation = () => {
  const queryClient = useQueryClient()
  const { mutate: updateComment, isPending: isUpdating } = useMutation<
    void,
    Error,
    Comment
  >({
    mutationFn: (updatedComment: Comment) => fetchPostComment('postData'),
    onMutate: async (updatedComment: Comment) => {
      await queryClient.cancelQueries({ queryKey: ['comments'] })
      const previousComments = queryClient.getQueryData<Comment[]>(['comments'])
      const updatedComments = previousComments.map((comment) =>
        comment.id === updatedComment.id ? updatedComment : comment,
      )
      queryClient.setQueryData<Comment[]>(['comments'], updatedComments)
      return { previousComments }
    },
    onSuccess: () => {
      toast.success('댓글 수정 완료')
    },
    onError: (error, variables, context) => {
      toast.error('잠시 후 다시 시도해주세요')
      queryClient.setQueryData<Comment[]>(
        ['comments'],
        context.previousComments,
      )
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })

  return { updateComment, isUpdating }
}
