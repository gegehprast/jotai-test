
import { PrimitiveAtom } from 'jotai'
import { useAtom } from 'jotai'
import { User } from '../schemas/UserSchema'
import { useState } from 'react'

type BookType = 'novel' | 'comic' | 'textbook' | 'finance'

const AddBookButton = ({ userAtom, bookType }: { userAtom: PrimitiveAtom<User>; bookType: BookType }) => {
    const [, setUser] = useAtom(userAtom)
    const [title, setTitile] = useState('')
    const [price, setPrice] = useState(50)

    const addBook = () => {
        setUser((prevUser) => ({
            ...prevUser,
            [bookType + 's']: [
                ...prevUser[(bookType + 's') as 'novels' | 'comics' | 'textbooks' | 'finances'],
                {
                    id: Math.random().toString(36).substring(2, 15),
                    title: title,
                    price: price,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                },
            ],
        }))
    }
    return (
        <div className="flex flex-row gap-x-2">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitile(e.target.value)}
                className="border border-gray-300 rounded px-1"
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="border border-gray-300 rounded px-1"
            />
            <button className="bg-green-500 p-1 rounded whitespace-nowrap" onClick={() => addBook()}>
                Add Book
            </button>
        </div>
    )
}

export default AddBookButton
