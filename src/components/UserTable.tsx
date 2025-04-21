import { useAtom } from 'jotai'
import { userAtomsAtom } from '../atoms/usersAtom'
import UserRow from './UserRow'
import { memo } from 'react'

const UserTable = () => {
    const [userAtoms] = useAtom(userAtomsAtom)
    
    return (
        <table className="table-auto border-collapse border border-gray-200 w-full">
            <thead>
                <tr>
                    <th className="border border-gray-200 p-2">#</th>
                    <th className="border border-gray-200 p-2">User</th>
                    <th className="border border-gray-200 p-2">Novels</th>
                    <th className="border border-gray-200 p-2">Comics</th>
                    <th className="border border-gray-200 p-2">Textbooks</th>
                    <th className="border border-gray-200 p-2">Finances</th>
                    <th className="border border-gray-200 p-2">Sales</th>
                    <th className="border border-gray-200 p-2">Status</th>
                </tr>
            </thead>

            <tbody>
                {userAtoms.map((userAtom, index) => (
                    <UserRow key={index} num={index + 1} userAtom={userAtom} />
                ))}
            </tbody>
        </table>
    )
}

export default memo(UserTable)
