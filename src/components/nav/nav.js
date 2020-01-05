import React from 'react';
import css from './nav.module.css';

const Nav = () => {
    return <nav className={css.nav}>
    <div className={css.item}>
      Profile
    </div>
    <div className={css.item}> 
     Messages 
    </div>
    <div className={css.item}> 
     Feed 
    </div>
    <div className={`${css.item} ${css.active}`}> 
     History 
    </div>
    <div className={css.item}> 
     Settings 
    </div>
  </nav> 
}

export default Nav;
