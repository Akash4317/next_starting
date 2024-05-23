import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div>
            <Link href='/'>Home</Link>&emsp;&nbsp;
            <Link href='/contact'>contact</Link>&emsp;&nbsp;
            <Link href='/about'>About</Link>&emsp;&nbsp;
            <Link href='/studentlist'>StudentList</Link>
        </div>
    )
}

export default Navigation
