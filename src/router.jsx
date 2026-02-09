import  { createBrowserRouter} from 'react-router-dom'
import App from './App'
import { SignIn } from './components/SignIn.jsx'
import { SignUp } from './components/SignUp.jsx'
import { Dashboard } from './components/Dashboard.jsx'


// Another way of routing insead of using <BrowserRouter> in main.jsx, 
// we can create a router and pass it to the RouterProvider component. 
// This way we can define our routes in a separate file and keep our main.jsx clean.
export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/signup", element: <SignUp />},
    {path: "/signin", element: <SignIn />},
    {path: "/dashboard", element: <Dashboard />},
])