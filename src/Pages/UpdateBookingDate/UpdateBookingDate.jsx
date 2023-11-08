import { useState } from 'react';
import { DatePicker, Space } from 'antd';
import { FaRightLong } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
const { RangePicker } = DatePicker;
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const UpdateBookingDate = () => {
    const { id } = useParams();
    const [fromDate, setFormDate] = useState("");
    const [toDate, setToDate] = useState("");

    const filterByDate = (dates) => {

        const fromDate = new Date(dates[0].$d);
        const toDate = new Date(dates[1].$d);

        const formattedFromDate = `${fromDate.getDate().toString().padStart(2, '0')}-${(fromDate.getMonth() + 1).toString().padStart(2, '0')}-${fromDate.getFullYear()}`;

        const formattedToDate = `${toDate.getDate().toString().padStart(2, '0')}-${(toDate.getMonth() + 1).toString().padStart(2, '0')}-${toDate.getFullYear()}`;

        setFormDate(formattedFromDate);
        setToDate(formattedToDate);
    }
    // console.log(fromDate, toDate);


    const updateDate = { fromDate, toDate };
    // console.log(updateDate);

    const handleUpdate = (id) => {
        fetch(`https://grand-hotel-sand.vercel.app/bookingconfirm/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateDate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Booking Date Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }



    return (
        <div className=' flex items-center justify-center gap-20 min-h-[700px] bg-gray-800'>
            <h2 className='text-3xl flex gap-5 text-[#dbb878] text-center'>UPDATE BOOKING DATE
                <FaRightLong></FaRightLong>
            </h2>
            <div className=''>
                <h3 className='text-xl mb-3 text-[#dbb878] font-semibold'>Check in & Check out date*</h3>
                <div className='text-black'>
                    <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
                </div>
            </div>
            {
                toDate ? <div className='text-center my-10 '>
                    <button onClick={() => handleUpdate(id)} className='btn btn-lg bg-[#dbb878] border-none'>update confirm</button>
                </div> : <div className='text-center my-10 '>
                    <button className='btn btn-lg bg-[#dbb878] border-none'>select new date</button>
                </div>

            }
        </div>
    );
};

export default UpdateBookingDate;