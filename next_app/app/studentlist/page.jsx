import Link from 'next/link'
import React from 'react'


const page = () => {
    return (
        <div>
            <h1>StudentList</h1>
            <ul className='list-item text-white'>
                <li><Link href='/studentlist/Akash'>Akash</Link></li>
                <li><Link href='/studentlist/Pratham'>Pratham</Link></li>
                <li><Link href='/studentlist/Bhawesh'>Bhawesh</Link></li>
                <li><Link href='/studentlist/shlok'>shlok</Link></li>
                <li><Link href='/studentlist/Yuvraj'>Yuvraj</Link></li>
            </ul>
        </div>
    )
}

export default page
