import { createContext } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Header from './components/Home/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';
import SignInForm from './components/Login/LoginMain/SignInForm';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AppointMent from './components/AppointMent/AppointMent/AppointMent';
import AddReview from './components/Dashboard/My Review/AddReview';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

// import PageNotFound from './components/Shared/PageNotFound/PageNotFound.jsx';
// import PreLoad from './components/Shared/Preload/PreLoad';

// const Home = lazy(() => import('./components/Home/Home/Home'))

export const UserContext = createContext();

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <SignInForm /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/auth/review', element: <AddReview /> },
  {
    path: '/appointment',
    element: <PrivateRoute><AppointMent/></PrivateRoute>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    // <Suspense fallback={<PreLoad />}>
    // <Route exact path="*">
    // <PageNotFound />
  );
}
export default App;
