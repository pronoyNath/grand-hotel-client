import React from 'react';

const ListCard = ({room}) => {
    console.log(room);
    const {imageURL,roomname,roomview,price} = room
    return (
        <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={imageURL} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{roomname}</div>
                                    <div className="text-sm opacity-50">{roomview}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">{price}</button>
                        </th>
                    </tr>
                </tbody>
    );
};

export default ListCard;