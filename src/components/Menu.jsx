import { Link } from 'react-router-dom'
export default function Menu({ title }) {
    return (
        <nav className='py-5 px-7'>
            <ul className='flex flex-row items-center justify-between p-0 m-0'>
                <li className='items-center'>
                    <Link className='hover:underline' to='/'>
                        Inicio
                    </Link>
                </li>
                <li>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                </li>
                <li></li>
            </ul>
        </nav>
    )
}
