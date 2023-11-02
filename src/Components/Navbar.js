import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='left'>
                    Welcome to the National Institute of Fine Arts
                </div>
                <div className='right'>
                    <div className='call'>
                        <span><i class="ri-phone-fill"></i>9555112200</span>
                        <span><i class="ri-phone-fill"></i>9810130552</span>
                    </div>
                    <div className='email'>
                        <i class="ri-mail-fill"></i>admission@nifafinearts.com
                    </div>
                    <ul>
                        <li><i class="ri-facebook-fill"></i></li>
                        <li><i class="ri-twitter-fill"></i></li>
                        <li><i class="ri-instagram-fill"></i></li>
                        <li><i class="ri-youtube-fill"></i></li>

                    </ul>
                </div>

            </div>
            <div className='navbar2'>
                <img src='https://www.nifafinearts.com/images/nifa-new-logo.png' alt='logo'></img>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Activities</li>
                    <li>Admission</li>
                    <li>Art Gallery</li>
                    <li>Franchise</li>
                    <li>Online Classes</li>
                    <li>Videos</li>
                    <li>PayFee</li>
                    <li>Contact</li>


                </ul>
            </div>
        </>
    )
}

export default Navbar