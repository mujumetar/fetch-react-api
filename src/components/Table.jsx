import React from 'react'

export const Table = ({ data }) => {
    return (
        <>

            <div className="container row g-3">
                {
                    data.map((ele) => (
                        <div className="col-3" >
                            <div class="card" >
                                <img src={ele.picture.large} class="card-img-top" alt={ele.picture.large} />
                                <div class="card-body">
                                    <h5 class="card-title"> {ele.name.first} </h5>
                                    <a class="btn btn-primary text-decoration-none">{ele.location.country}</a>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>



        </>
    )
}
