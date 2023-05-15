import React from 'react'
import './header.css'
import './cta'
import CTA from './cta' //here we import the CTA component inside our header
import me from '..//assets/BD10890_ (2).jpg'
import HeaderSocial from './HeaderSection'

export const Header = () => {
return (
<header>
<div className='container header__container'>
<h5>Hello I'm</h5>
<h1>Atsafac Agafina</h1>
<h5 className='text-light'>Software Engineer </h5>
<CTA/>
<HeaderSocial />
<div className='my_image'>
<img src={me} alt='myimage'/>
</div>
<a href='#contact' className='scroll__down'>Scroll down</a>
</div>
</header>
)
}
export default Header;