import React from 'react';

export default function BookInfo(props)  {
        return (
            <div className="bookInfo">
                <div>{props.image}</div>
                <a 
                href={props.url}
                target="_blank"
                rel="noopener noreferrer">
                    {props.title}
                </a>
            <h4>{props.price}</h4>
            <p>{props.desc}</p>
            </div>
        )
    }

BookInfo.defaultProps = {
    image: "IMAGE",
    title: "Book Title",
    price: "Too Much",
    desc: "Blahblahblah"
}

