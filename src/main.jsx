import React from 'react';
import ReactDOM from 'react-dom';
import { createRef } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useLocation, useOutlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import 'bootstrap/dist/css/bootstrap.css';
import './reset.css';
import './App.css'

//pages: home, about, shopping

import Home from './pages/Home';
import About from './pages/About';
import Shopping from './pages/Shopping';

import Books from './pages/Shopping/Books'; 
// import Flora from './pages/Shopping/Flora';
import Ingredients from './pages/Shopping/Ingredients';
// import Oils from './pages/Shopping/Oils';
// import Stones from './pages/Shopping/Stones';

import Footer from './components/Footer';
import Navigation from './components/Navigation';

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    nodeRef: createRef()
  },
  {
    path: '/about',
    name: 'About',
    element: <About />,
    nodeRef: createRef()
  },
  {
    path: '/shopping',
    name: 'Shopping',
    element: <Shopping />,
    nodeRef: createRef()
  },
  {
    path: '/shopping/books',
    element: <Books />,
    nodeRef: createRef()
  },
  // {
  //   path: '/shopping/flora',
  //   element: <Flora />,
  //   nodeRef: createRef()
  // },
  {
    path: '/shopping/ingredients',
    element: <Ingredients />,
    nodeRef: createRef()
  },
  // {
  //   path: '/shopping/oils',
  //   element: <Oils />,
  //   nodeRef: createRef()
  // },
  // {
  //   path: '/shopping/stones',
  //   element: <Stones />,
  //   nodeRef: createRef()
  // },
    // {
    //   path: '/menu',
    //   name: 'Menu',
    //   element: <Menu />,
    //   nodeRef: createRef()
    // },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <>
    <Navigation routes={routes} />
    <main className="application">
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames="page"
          unmountOnExit>
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
        </CSSTransition>
      </SwitchTransition>
    </main>
    <Footer />
    </>
  )
}

const application = document.getElementById('root')
const root = createRoot(application)
root.render(<RouterProvider router={router} />)



