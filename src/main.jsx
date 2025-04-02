import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Authprovider from './Authprovider.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Profile from './Profile.jsx'
import DonationEvents from './DonationEvents.jsx'
import Error from './Error.jsx'
import Privateroute from './Privateroute.jsx'
import Donate from './Donate.jsx'
import Details from './Details.jsx'
import DonationCampaign from './DonationCampaign.jsx'
import HowToHelpUs from './HowToHelpUs.jsx'
import UpdateProfile from './UpdateProfile.jsx'

const router=createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/",
        element: <DonationEvents></DonationEvents>
      },
      {
        path:"login",
        element: <Login></Login>
      },
      {
        path:"signup",
        element: <Signup></Signup>
      },
      {
        path:"profile",
        element: <Privateroute><Profile></Profile></Privateroute>
      },
      {
        path:"donate/:id",
   
        element: <Privateroute><Donate></Donate></Privateroute>
      },
      {
        path:"viewmore/:id",
        element: <Privateroute><Details></Details></Privateroute>
      },
      {
        path:"donation-campaigns",
        element: <DonationCampaign></DonationCampaign>
      },
      {
        path:"how-to-help-us",
        element: <HowToHelpUs></HowToHelpUs>
      },
      {
        path:"update-profile",
        element: <Privateroute> 
          <UpdateProfile></UpdateProfile>
        </Privateroute>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </StrictMode>,
)
