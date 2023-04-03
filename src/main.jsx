import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FirstPage from './Components/FirstPage/FirstPage';
import Friends from './Components/Friends/Friends';
import SingleFriend from './Components/SingleFriend/SingleFriend';
import Posts from './Components/Posts/Posts';
import SinglePost from './Components/SinglePost/SinglePost';
import ToDos from './Components/ToDo/ToDos';
import SingleWork from './Components/ToDo/SingleWork';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:"/",
        element: <FirstPage></FirstPage>
      },
      {
        path: "/friends",
        element: <Friends></Friends>,
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path: "/friend/:friendID",
        element: <SingleFriend></SingleFriend>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
      },
      {
        path: "/posts",
        element: <Posts></Posts>,
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/posts")
      },
      {
        path: "/post/:postID",
        element: <SinglePost></SinglePost>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/toDoos",
        element: <ToDos></ToDos>,
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/todos")
      },
      {
        path: "/toDo/:workID",
        element: <SingleWork></SingleWork>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/todos/${params.workID}`)
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
