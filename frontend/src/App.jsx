import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Root from './components/pages/Root';
import Hero from './components/Hero';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      children:[
        {
          index:true,
          element:<Hero/>
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
