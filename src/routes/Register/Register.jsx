import styles from './Register.module.css'
import FormRegister from '../../components/FormRegister/FormRegister'
import { useState } from 'react'

const Register = () => {
    const [user, setUser] = useState('')

    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <h1>Crie sua conta</h1>
                <FormRegister setUser={setUser}/>
            </div>
        </div>
    )
}

export default Register