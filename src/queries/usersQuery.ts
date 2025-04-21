import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import mock from '../assets/mock.json'
import { User } from '../schemas/UserSchema'

const initialData = (mock as User[]).slice(0, 500)

export function useUsersQuery({ status }: { status: 'all' | User['status'] }) {
    return useQuery({
        queryKey: ['users', status],
        queryFn: async ({ queryKey: [, status] }) => {
            return new Promise<User[]>((resolve) => {
                const data = initialData as User[]
                const users = status === 'all' ? data : data.filter((user) => user.status === status)

                setTimeout(() => {
                    resolve(users)
                }, 500)
            })
        },
    })
}

export function useUpdateUser() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (user) =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(user)
                }, 1000)
            }),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
    })
}
