import { FaAnglesDown } from "react-icons/fa6";
import { Link, useRouteError } from "react-router-dom";
import { BiCommentError } from 'react-icons/bi';
import Lottie from "lottie-react";
import errorAnimation from '../../assets/errorAnimation.json'
import homeAnimation from '../../assets/homeAnimation.json'
const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="flex items-center  gap-0 max-w-6xl mx-auto">
            <div className="max-w-xl mx-auto hidden lg:block">
                <Lottie animationData={errorAnimation}></Lottie>
            </div>
            <div className="max-w-xl mx-auto ">
                <Link to={'/'}>
                <Lottie animationData={homeAnimation}></Lottie>
                <h3 className="text-3xl text-center text-red-500">Go BACK HOME</h3>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;