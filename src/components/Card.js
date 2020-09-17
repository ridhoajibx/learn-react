import React from 'react'

export default function Card(props) {
    // console.log(props);
    return (
        <div className="card">
            <img src={props.content.imageUrl} alt="cat" className="card-img-top" />
            <div className="card-body">
                <h5>{ props.content.title }</h5>
                <div className="text-muted">Published { props.content.published }</div>
            </div>
        </div>
    )
}
