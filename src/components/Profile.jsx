import React from 'react'
import Style from "./Profile.module.css";

const profile = () => {

  return (
    <div className={Style.profile}>
        <ul className='flex flex-col gap-4'>
            <li>
                Profile
            </li>
            <li>
            Activity
            </li>
            <li>
            LogOut
            </li>

        </ul>
    </div>
  )
}

export default profile