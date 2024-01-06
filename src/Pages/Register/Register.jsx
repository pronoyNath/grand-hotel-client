import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaCircleCheck } from 'react-icons/fa6';
import registerAnimation from '../../assets/registerAnimation.json'
import Lottie from 'lottie-react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import axios from 'axios';
import { ImSpinner9 } from "react-icons/im";
import { imageUpload } from '../../api/ImageUploadApi';
import axiosSecure from '../../hooks/useAxiosSecure';

const Register = () => {

    const { user, createUser, updateUserProfile, loading } = useContext(AuthContext);

    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');

        //image uploading using hosting side (imgbb api)
        // const img = form.get('img');
        const img = e.target.img.files[0]
        const imageData = await imageUpload(img) //must use await cz outside api using
        //    console.log(imageData.data.display_url);
        const imageURL = imageData?.data?.display_url

        const email = form.get('email');
        const password = form.get('password');
        setRegisterError('');
        // console.log(img);
        if (password.length < 6) {
            setRegisterError('Password is less than 6 characters');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError("Password should have at least one capital letter");
            return;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setRegisterError("Password should have at least one special character (#,*,&...etc)");
            return;
        }

        //creating user
        createUser(email, password)
            .then(async (res) => {
                const currentUser = {
                    email: res?.user?.email,
                    role: 'guest',
                    status: 'Verified',
                }
                const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)
                console.log("responseee", data);
                // Registration successful, update user profile
                return updateUserProfile(name, imageURL);
            })
            .then(() => {
                //  toast pop-up

                toast.custom((t) => (
                    <div
                        className={`${t.visible ? 'animate-enter' : 'animate-leave'
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="flex pt-0.5 items-center">
                                    <FaCircleCheck className=' h-[40px] w-[40px] text-green-500'></FaCircleCheck>
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        WoW!!!
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Account Create Successfully!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex border-l border-blue-200">
                            <Link to={'/'}>
                                <button
                                    onClick={() =>
                                        toast.dismiss(t.id)
                                    }
                                    className="w-full h-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    Close
                                </button>
                            </Link>
                        </div>

                    </div>
                ))

                navigate('/');

            })
            .catch((err) => {
                console.error(err);
                setRegisterError(err.message);
            });
    }

    return (
        <>

            <PageTitle title={"Register | Grand Hotel"}></PageTitle>

            <div className="hero min-h-[900px] overflow-x-hidden" style={{ backgroundImage: 'url(https://th.bing.com/th/id/R.ce43f7e8e0571c21e762b8924aad874d?rik=Lgf1H0ETLLyrWA&pid=ImgRaw&r=0)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-6xl flex items-center">
                        <div className="hidden md:block">
                            <Lottie animationData={registerAnimation}></Lottie>
                        </div>

                        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-[#1c1c1c] dark:text-gray-100" >
                            <h2 className="mb-3 text-3xl font-semibold text-center">Register to your account</h2>
                            <p className="text-sm text-center dark:text-gray-400">Already have account?
                                <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline ml-5 text-[#dbb878]">Sign in here</Link>
                            </p>
                            <form onSubmit={handleRegister} action="" className="space-y-8 mt-10">
                                <div className="space-y-4" >
                                    <div className="space-y-2" >
                                        <label className="block text-sm text-left">Your name</label>
                                        <input required type="text" name="name" id="name" placeholder="your name" className="w-full px-3 py-2 border rounded-md dark:border-[#dbb878] dark:bg-[#1c1c1c] dark:text-gray-100 focus:dark:border-violet-400" />
                                    </div>
                                    <div className="space-y-2" >

                                        <label className="block text-sm text-left">Upload Profile Image*</label>
                                        <input type="file" id="img" name="img" accept="image/*" className="file-input file-input-bordered w-full bg-[#1c1c1c] border-[#dbb878]" required />
                                    </div>
                                    <div className="space-y-2" >
                                        <label className="block text-sm text-left">Email address</label>
                                        <input required type="email" name="email" id="email" placeholder="xyz@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-[#dbb878] dark:bg-[#1c1c1c] dark:text-gray-100 focus:dark:border-violet-400" />
                                    </div>
                                    <div className="space-y-2" >
                                        <div className="flex justify-between" >
                                            <label name="password" className="text-sm">Password</label>
                                        </div>
                                        <input required type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-[#dbb878] dark:bg-[#1c1c1c] dark:text-gray-100 focus:dark:border-violet-400" />
                                    </div>
                                    <p className='text-red-500'>{registerError}</p>
                                </div>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-[#dbb878] dark:text-white">
                                    {
                                        loading ? <ImSpinner9 className='mx-auto animate-spin text-xl'></ImSpinner9> : 'Sign Up'
                                    }
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;