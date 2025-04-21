import { atom, useAtom } from 'jotai'
import { useUsersQuery } from '../queries/usersQuery'
import { User } from '../schemas/UserSchema'
import { usersAtom } from '../atoms/usersAtom'
import { useEffect } from 'react'
import UserTable from '../components/UserTable'
import SaleAdder from '../components/SaleAdder'

const statusAtom = atom<'all' | User['status']>('active')

function UserList() {
    const [status, setStatus] = useAtom(statusAtom)
    const { data, isLoading, error, isFetching } = useUsersQuery({ status })
    const [, setUsers] = useAtom(usersAtom)

    useEffect(() => {
        console.log('rerendering UserList')
        if (data) {
            setUsers(data)
        }
    }, [data, setUsers])

    return (
        <div className='w-full'>
            <h1>Users</h1>

            <div className="flex gap-2 mb-4">
                <button className={`text-white px-2 text-center rounded ${status === 'all' ? 'bg-blue-500' : 'bg-gray-500'}`} onClick={() => setStatus('all')}>
                    All
                </button>
                <button
                    className={`text-white px-2 text-center rounded ${status === 'active' ? 'bg-blue-500' : 'bg-gray-500'}`}
                    onClick={() => setStatus('active')}
                >
                    Active
                </button>
                <button
                    className={`text-white px-2 text-center rounded ${status === 'hiatus' ? 'bg-blue-500' : 'bg-gray-500'}`}
                    onClick={() => setStatus('hiatus')}
                >
                    Hiatus
                </button>
            </div>
            
            <div className="flex gap-2 mb-4">
                <SaleAdder />
            </div>

            {isLoading && <p>Loading...</p>}
            {isFetching && <p>Fetching...</p>}
            {error && <p>Error: {error.message}</p>}
            <UserTable />
        </div>
    )
}

export default UserList
