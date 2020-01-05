import React from 'react';
import css from './nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return <nav className={css.nav}>
    <div className={css.item}>
      
      <NavLink to='/profile' activeClassName={css.active} >Profile</NavLink>
    </div>
    <div className={css.item}> 
    <NavLink to='/dialogs' activeClassName={css.active}>Messages</NavLink> 
    </div>
    <div className={css.item}> 
     Feed 
    </div>
    <div className={`${css.item} ${css.active}`}>  {/* {`${css.item} ${css.active}`} - это пример формирования строки из нескольких элементов  */} 
     History 
    </div>
    <div className={css.item}> 
     Settings 
    </div>
  </nav> 
}

export default Nav;
