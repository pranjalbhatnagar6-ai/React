import Home from '../54_Basic Example of React Router/Home'
import About from '../54_Basic Example of React Router/About'
import Login from '../54_Basic Example of React Router/Login'
import './header.css'
import { Link, Routes, Route } from 'react-router'
import PageNotFound from '../56 Page not found/404'

export default function HeaderNav() {
    return (
        <>
            <div className='header' >
                <div className='link' >
                    <Link to='/'><h2>Logo</h2></Link>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </>
    )
}