import { PrimitiveAtom } from 'jotai'
import { useAtom } from 'jotai'
import { User } from '../schemas/UserSchema'

type BookType = 'novel' | 'comic' | 'textbook' | 'finance'

const AddSaleButton = ({ userAtom, bookType }: { userAtom: PrimitiveAtom<User>; bookType: BookType }) => {
    const [, setUser] = useAtom(userAtom)

    const addSale = (value: number) => {
        setUser((prevUser) => ({
            ...prevUser,
            sales: {
                ...prevUser.sales,
                [bookType]: {
                    ...prevUser.sales[bookType],
                    num_sales: prevUser.sales[bookType].num_sales + 1,
                    num_value: prevUser.sales[bookType].num_value + value,
                },
            },
        }))
    }
    return (
        <button className="bg-green-500 p-1 rounded" onClick={() => addSale(10)}>
            Add Sale
        </button>
    )
}

export default AddSaleButton
