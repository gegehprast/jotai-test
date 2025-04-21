
import { z } from 'zod'
import { UserSchema } from '../schemas/UserSchema'
import { atom } from 'jotai'
import { splitAtom } from 'jotai/utils'

export type User = z.infer<typeof UserSchema>

export const usersAtom = atom<User[]>([])

export const userAtomsAtom = splitAtom(usersAtom)
