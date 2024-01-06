import { useContext } from "react";
import { imageUpload } from "../../../api/ImageUploadApi";
import axiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddRoom = () => {
    const {user} = useContext(AuthContext);
    
    const handleAddRoom = async (e) => {
        e.preventDefault();
        const form = e.target;
        const roomname = form.roomName.value;
        const roomview = form.roomview.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const img = e.target.img.files[0]
        const imageData = await imageUpload(img) //must use await cz outside api using
        //    console.log(imageData.data.display_url);
        const imageURL = imageData?.data?.display_url

        const host = {
            name : user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }

        const newRoom = { roomname, roomview, price, shortDescription,imageURL,host };
        console.table(newRoom);

        const {data} = await axiosSecure.post('/room',newRoom)
        console.log(data);
        // const { data } = await axiosSecure.get('/rooms')
        // console.log(data);
    }
    return (
        <div className='bg-[#dbb878] p-24 mb-10 m-10 text-black'>
            <h3 className='text-2xl lg:text-3xl font-extrabold mb-10 text-center'>Add a Room</h3>

            <form onSubmit={handleAddRoom} className='space-y-10'>
                <div className='md:flex justify-center gap-5'>
                    <div className="md:w-1/2">
                        <label htmlFor="">Room Name</label> <br />
                        <input className="input input-bordered w-full" name='roomName' placeholder="Room Name" required />
                    </div>
                    <div className="md:w-1/2">
                        <label className="block text-sm text-left">Upload Profile Image*</label>
                        <input type="file" id="img" name="img" accept="image/*" className="file-input file-input-bordered w-full bg-white border-[#dbb878]" required />
                    </div>
                </div>

                <div className='md:flex justify-center gap-5'>
                    <div className="md:w-1/2">
                        <label htmlFor="">Room View</label> <br />
                        <input className="input input-bordered w-full" name='roomview' placeholder="Room View" required />
                    </div>
                   
                    <div className="md:w-1/2">
                        <label htmlFor="">Price</label>  <br />
                        <input className="input input-bordered w-full" name='price' placeholder="Price" required />
                    </div>
                </div>

                <div className='md:flex justify-center gap-5'>
                    <div className="md:w-1/2">
                        <label htmlFor="">Short Description</label> <br />
                        <input className="input input-bordered w-full" name='shortDescription' required placeholder="Short Description" />
                        
                    </div>


                </div>

                <input className='btn bg-[#0f172b] text-white w-full border-none' type="submit" value="Add Room" />
            </form>
        </div>
    );
};

export default AddRoom;