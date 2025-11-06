import React from 'react'
import styles from './ProfileList.module.css'
import { useLocation, useNavigate } from 'react-router-dom'

export const ProfileList = () => {
    const navigate = useNavigate()
    
    const location = useLocation()
    const {name, age, email} = location.state || {}

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1>{name}</h1>

                <p>Idade: {age}</p>
                <p>Email: {email}</p>

                <button onClick={() => navigate(-1)}>Voltar</button>
            </div>
            
        </div>
    )
}
