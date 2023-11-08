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

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>,
                loader: ()=>fetch('http://localhost:5000/rooms')
            },
            {
                path: '/mybookings',
                element: <PrivateRouter><MyBookings></MyBookings></PrivateRouter>
            },
            {
                path: '/testimonial',
                element:<Testimonial></Testimonial>
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
                path: '/slider',
                element: <HomeSlider></HomeSlider>
            },
            {
                path: '/roomdetails/:id',
                element: <RoomDetails></RoomDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path: '/bookingconfirm/:id/:fromdate/:todate',
                element: <BookingConfirm></BookingConfirm>,
                loader: ({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path: `/updatebookingdate/:id`,
                element: <UpdateBookingDate></UpdateBookingDate>,
                loader: ({params})=>fetch(`http://localhost:5000/updatebookingdate/${params.id}`)
            }
        ]
    }
])

export default router;