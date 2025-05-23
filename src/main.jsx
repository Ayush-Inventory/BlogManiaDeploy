import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {  AuthLayout} from './components/index.js'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/Signup.jsx'
import AllPosts from './pages/AllPosts.jsx'
import MyPosts from './pages/MyPosts.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import AddPost from './pages/AddPost.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
        {
        path: '/',
        element: <Home/>
        },
        {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <SignUp />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/my-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <MyPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ]
  }
])

createRoot(document.getElementById('root')).render(

   
   <Provider store={store}>
    <RouterProvider router={router} />
   </Provider>
   
  
)
