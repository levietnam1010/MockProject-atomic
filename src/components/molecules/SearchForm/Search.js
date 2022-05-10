import React from 'react'
import './Search.css'

const Search = () => {
    return (
        <div >

            <form className="d-flex div-parent" >
                <div>

                    <i className="fas fa-search icon"></i>

                    <input className="form-control search" placeholder="Search" />
                </div>
            </form>
        </div>
    )
}

export default Search