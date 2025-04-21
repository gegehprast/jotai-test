import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UserList from './pages/UserList'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <UserList />
        </QueryClientProvider>
    )
}

export default App
