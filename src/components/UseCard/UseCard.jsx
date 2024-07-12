import React from "react";
import './UseCard.css'

export const UseCard = ({data}) => {
    return(
        <div className="container">
            {data.map(info => (
                <div key={info.id} className="container-int">
                    <img src={`https://picsum.photos/seed/${info.id}/300/300`} alt="Random Image" />
                    <div className="container-int1">
                        <h2>{info.name}</h2>
                        <p>{info.username}</p>
                        <p>{info.email}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}