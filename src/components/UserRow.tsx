import { PrimitiveAtom, useAtom } from 'jotai';
import { User as UserType } from '../atoms/usersAtomWithQuery'
import { memo } from 'react';

export const UserRow = memo(({ num, userAtom }: { num: number; userAtom: PrimitiveAtom<UserType> }) => {
    const [user, setUser] = useAtom(userAtom)
    
    const toggleStatus = () => {
        setUser((prevUser) => ({
            ...prevUser,
            status: prevUser.status === 'active' ? 'hiatus' : 'active',
        }))
    }
    
    const addSale = (type: 'novel' | 'comic' | 'textbook' | 'finance', value: number) => {
        setUser((prevUser) => ({
            ...prevUser,
            sales: {
                ...prevUser.sales,
                [type]: {
                    ...prevUser.sales[type],
                    num_sales: prevUser.sales[type].num_sales + 1,
                    num_value: prevUser.sales[type].num_value + value,
                },
            },
        }))
    }

    return (
        <tr className="border border-gray-200">
            <td className="border border-gray-200 p-2">{num}</td>
            <td className="border border-gray-200 p-2">
                <ul>
                    <li>{user.profile.name} ({user.username})</li>
                    <li>{user.email}</li>
                    <li>
                        {user.profile.address.street}, {user.profile.address.city}
                    </li>
                    <li>{user.status}</li>
                </ul>
            </td>
            <td className="border border-gray-200 p-2">
                <ul>
                    {user.novels.map((novel, index) => (
                        <li key={index}>
                            {novel.title} - {novel.price}
                        </li>
                    ))}
                </ul>
            </td>
            <td className="border border-gray-200 p-2">
                <ul>
                    {user.comics.map((comic, index) => (
                        <li key={index}>
                            {comic.title} - {comic.price}
                        </li>
                    ))}
                </ul>
            </td>
            <td className="border border-gray-200 p-2">
                <ul>
                    {user.textbooks.map((textbook, index) => (
                        <li key={index}>
                            {textbook.title} - {textbook.price}
                        </li>
                    ))}
                </ul>
            </td>
            <td className="border border-gray-200 p-2">
                <ul>
                    {user.finances.map((finance, index) => (
                        <li key={index}>
                            {finance.title} - {finance.price}
                        </li>
                    ))}
                </ul>
            </td>
            <td className="border border-gray-200 p-2">
                <ul>
                    <li>
                        Novel: {user.sales.novel.num_value} ({user.sales.novel.num_sales})

                        <button className="bg-green-500 p-1 rounded" onClick={() => addSale('novel', 50)}>
                            Add Sale
                        </button>
                    </li>

                    <li>
                        Comic: {user.sales.comic.num_value} ({user.sales.comic.num_sales})
                        
                        <button className="bg-green-500 p-1 rounded" onClick={() => addSale('comic', 30)}>
                            Add Sale
                        </button>
                    </li>

                    <li>
                        Textbook: {user.sales.textbook.num_value} ({user.sales.textbook.num_sales})
                        
                        <button className="bg-green-500 p-1 rounded" onClick={() => addSale('textbook', 20)}>
                            Add Sale
                        </button>
                    </li>

                    <li>
                        Finance: {user.sales.finance.num_value} ({user.sales.finance.num_sales})
                        
                        <button className="bg-green-500 p-1 rounded" onClick={() => addSale('finance', 10)}>
                            Add Sale
                        </button>
                    </li>
                </ul>
            </td>
            <td className="border border-gray-200 p-2">
                {/* toggle status, currently does not update anything */}
                <button className="bg-blue-500 p-1 rounded" onClick={toggleStatus}>
                    {user.status}
                </button>
            </td>
        </tr>
    )
})
