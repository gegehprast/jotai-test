import { PrimitiveAtom, useAtom } from 'jotai'
import { User as UserType } from '../atoms/usersAtomWithQuery'
import { memo } from 'react'
import AddSaleButton from './AddSaleButton'
import UserStatusToggler from './UserStatusToggler'
import AddBookButton from './AddBookButton'

const UserRow = ({ num, userAtom }: { num: number; userAtom: PrimitiveAtom<UserType> }) => {
    const [user] = useAtom(userAtom)

    return (
        <tr className="border border-gray-200">
            <td className="border border-gray-200 p-2">{num}</td>
            <td className="border border-gray-200 p-2">
                <ul>
                    <li>
                        {user.profile.name} ({user.username})
                    </li>
                    <li>{user.email}</li>
                    <li>
                        {user.profile.address.street}, {user.profile.address.city}
                    </li>
                    <li>{user.status}</li>
                </ul>
            </td>
            <td className="border border-gray-200 p-2">
                <AddBookButton userAtom={userAtom} bookType="novel" />
                <ul>
                    {user.novels.map((novel, index) => (
                        <li key={index}>
                            {novel.title} - {novel.price}
                        </li>
                    ))}
                </ul>
            </td>
            <td className="border border-gray-200 p-2">
                <AddBookButton userAtom={userAtom} bookType="comic" />
                <ul>
                    {user.comics.map((comic, index) => (
                        <li key={index}>
                            {comic.title} - {comic.price}
                        </li>
                    ))}
                </ul>
            </td>
            <td className="border border-gray-200 p-2">
                <AddBookButton userAtom={userAtom} bookType="textbook" />
                <ul>
                    {user.textbooks.map((textbook, index) => (
                        <li key={index}>
                            {textbook.title} - {textbook.price}
                        </li>
                    ))}
                </ul>
            </td>
            <td className="border border-gray-200 p-2">
                <AddBookButton userAtom={userAtom} bookType="finance" />
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
                        <AddSaleButton userAtom={userAtom} bookType="novel" />
                    </li>

                    <li>
                        Comic: {user.sales.comic.num_value} ({user.sales.comic.num_sales})
                        <AddSaleButton userAtom={userAtom} bookType="comic" />
                    </li>

                    <li>
                        Textbook: {user.sales.textbook.num_value} ({user.sales.textbook.num_sales})
                        <AddSaleButton userAtom={userAtom} bookType="textbook" />
                    </li>

                    <li>
                        Finance: {user.sales.finance.num_value} ({user.sales.finance.num_sales})
                        <AddSaleButton userAtom={userAtom} bookType="finance" />
                    </li>
                </ul>
            </td>
            <td className="border border-gray-200 p-2">
                <UserStatusToggler userAtom={userAtom} />
            </td>
        </tr>
    )
}

export default memo(UserRow)
