import React from 'react'
import Card from "./components/Card"

export default function App() {
    return (
        <div className="py-4">
            <div className="container">
                <div className="row">
                    <h4>The Posts</h4>
                    <hr/>
                    <div className="col-md-4">
                        <Card content ={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "The First Post",
                            published: "26 feb, 2020",
                        }}
                        />
                    </div>
                    
                    <div className="col-md-4">
                        <Card content ={{
                            imageUrl: "http://placekitten.com/300/200",
                            title: "The First Post",
                            published: "06 feb, 2019",
                        }}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card content ={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "The First Post",
                            published: "02 march, 2018",
                        }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
