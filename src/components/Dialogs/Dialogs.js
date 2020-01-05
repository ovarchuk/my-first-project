import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = () => {
    return(
<div className={s.dialogs}>
    <div className={s.dialogsItem}>
        <div className={s.dialog + ' ' + s.active}>
        <NavLink to='/dialogs/1'>1</NavLink> 
        </div>
        <div className={s.dialog}>
        <NavLink to='/dialogs/2'>2</NavLink> 
        </div>
        <div className={s.dialog}>
        <NavLink to='/dialogs/3'>3</NavLink> 
        </div>
        <div className={s.dialog}>
        <NavLink to='/dialogs/4'>4</NavLink> 
        </div>
    </div>
    <div className={s.messages}>
      <div className={s.message}>
        msg1
      </div>
    <div className={s.message}>
        msg2
    </div>
    <div className={s.message}>
        msg3
    </div>
    </div>
</div>
    )
}

export default Dialogs;