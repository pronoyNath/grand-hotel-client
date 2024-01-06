import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MainLayout from "../Layouts/MainLayout";
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Register from "../Pages/Register/Register";
import Gallery from "../Pages/Home/Gallery/Gallery";
import Map from "../Components/Map/Map";
import Testimonial from "../Components/Testimonial/Testimonial";
import HomeSlider from "../Pages/Home/Banner/HomeSlider/HomeSlider";
import RoomDetails from "../Pages/Rooms/RoomDetails/RoomDetails";
import BookingConfirm from "../Pages/BookingConfirm/BookingConfirm";
import UpdateBookingDate from "../Pages/UpdateBookingDate/UpdateBookingDate";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddRoom from "../Pages/Dashboard/AddRoom/AddRoom";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyListing from "../Pages/Dashboard/MyListing/MyListing";
import HostRoute from "./HostRoute";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>,
                loader: () => fetch('https://grand-hotel-sand.vercel.app/rooms')
            },
            {
                path: '/mybookings',
                element: <PrivateRouter><MyBookings></MyBookings></PrivateRouter>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/roomdetails/:id',
                element: <PrivateRouter><RoomDetails></RoomDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`https://grand-hotel-sand.vercel.app/rooms/${params.id}`)
            },
            {
                path: '/bookingconfirm/:id/:fromdate/:todate',
                element: <BookingConfirm></BookingConfirm>,
                loader: ({ params }) => fetch(`https://grand-hotel-sand.vercel.app/rooms/${params.id}`)
            },
            {
                path: `/updatebookingdate/:id`,
                element: <UpdateBookingDate></UpdateBookingDate>,
                loader: ({ params }) => fetch(`https://grand-hotel-sand.vercel.app/updatebookingdate/${params.id}`)
            },
            // {
            //     path: '/dashboard',
            //     element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
            //     children: ([
            //         {
            //             path: '/dashboard/add-room',
            //             element: <PrivateRouter><HostRoute><AddRoom></AddRoom></HostRoute></PrivateRouter>
            //         },
            //         {
            //             path: '/dashboard/my-listing',
            //             element: <MyListing></MyListing>
            //         },
            //         {
            //             path: '/dashboard/manage-user',
            //             element: <PrivateRouter><AdminRoute><ManageUser></ManageUser></AdminRoute></PrivateRouter>
            //         }
            //     ])
            // },
        ]
    },
])

export default router;