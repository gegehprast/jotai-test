import { PrimitiveAtom } from 'jotai'
import { useAtom } from 'jotai'
import { User } from '../schemas/UserSchema'

const UserStatusToggler = ({ userAtom }: { userAtom: PrimitiveAtom<User>}) => {
    const [user, setUser] = useAtom(userAtom)

    const toggleStatus = () => {
        setUser((prevUser) => ({
            ...prevUser,
            status: prevUser.status === 'active' ? 'hiatus' : 'active',
        }))
    }

    return (
        <button className="bg-blue-500 p-1 rounded" onClick={toggleStatus}>
            {user.status}
        </button>
    )
}

export default UserStatusToggler
