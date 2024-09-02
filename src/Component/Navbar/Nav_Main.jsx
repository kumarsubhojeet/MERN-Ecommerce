import React from 'react'
import PC_Nav from '../Navbar/PC_Nav'
import Mob_Nav from '../Navbar/Mob_Nav'

export default function Nav_Main() {
    return (
        <>
            <div className="Nav-main">
                <div className="nav_pc sm:hidden lg:block">
                    <PC_Nav />
                </div>

                <div className="nav_mobile lg:hidden sm:block">
                    <Mob_Nav />
                </div>

            </div>
        </>
    )
}
