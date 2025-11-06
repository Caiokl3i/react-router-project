import { useState } from 'react'
import styles from './FormRegister.module.css'

const FormRegister = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        // const newUser = {
        //     name: username,
        //     age: age,
        //     email: email
        // }

        setUser({
            name: username,
            age: age,
            email: email
        })

        setUsername('')
        setAge('')
        setEmail('')
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" value={username} placeholder='Nome' required onChange={(e) => setUsername(e.target.value)} />
            <input type="number" value={age} placeholder='Idade' required onChange={(e) => setAge(e.target.value)} />
            <input type="text" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <button type='submit' className={styles.button}>Salvar</button>
        </form>

    )
}

export default FormRegister