import React, { memo } from 'react'
import { usersAtom } from '../atoms/usersAtom'
import { useAtom } from 'jotai'

const SaleAdder = memo(() => {
    const [, setUsers] = useAtom(usersAtom)
    const [username, setUsername] = React.useState('')
    const [type, setType] = React.useState<'novel' | 'comic' | 'textbook' | 'finance'>('novel')
    const [value, setValue] = React.useState(10)

    const addSale = (username: string, type: 'novel' | 'comic' | 'textbook' | 'finance', value: number) => {
        setUsers((prevUsers) => {
            return prevUsers.map((user) => {
                if (user.username === username) {
                    return {
                        ...user,
                        sales: {
                            ...user.sales,
                            [type]: {
                                ...user.sales[type],
                                num_sales: user.sales[type].num_sales + 1,
                                num_value: user.sales[type].num_value + value,
                            },
                        },
                    }
                }
                return user
            })
        })
    }

    return (
        <div className="flex flex-col gap-4 p-4">
            <h2 className="text-xl font-bold">Add Sale</h2>
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
                />
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value as 'novel' | 'comic' | 'textbook' | 'finance')}
                    className="border border-gray-300 p-2 rounded"
                >
                    <option value="novel">Novel</option>
                    <option value="comic">Comic</option>
                    <option value="textbook">Textbook</option>
                    <option value="finance">Finance</option>
                </select>
                <input
                    type="number"
                    placeholder="Value"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="border border-gray-300 p-2 rounded"
                />
                <button onClick={() => addSale(username, type, value)} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add Sale
                </button>
            </div>
        </div>
    )
})

export default SaleAdder
