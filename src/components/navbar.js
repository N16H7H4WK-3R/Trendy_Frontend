import React from 'react'

const NavBar = () => {

    return (
        <div>
            <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand mx-2">Trendy</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search for any Product" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )

}

export default NavBar