import { atomWithQuery } from 'jotai-tanstack-query'
import mock from '../assets/mock.json'
import { z } from 'zod'
import { UserSchema } from '../schemas/UserSchema'
import { atom } from 'jotai'

export type User = z.infer<typeof UserSchema>

export const statusAtom = atom<'all' | User['status']>('active')

export const usersAtomWithQuery = atomWithQuery<User[]>((get) => ({
    queryKey: ['user', get(statusAtom)],
    queryFn: async ({ queryKey: [, status] }) => {
        return new Promise((resolve) => {
            const data = mock as User[]
            const users = status === 'all' ? data : data.filter((user) => user.status === status)

            setTimeout(() => {
                resolve(users)
            }, 0)
        })
    },
}))
