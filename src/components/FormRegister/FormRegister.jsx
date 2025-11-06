import { useState } from 'react'
import styles from './FormRegister.module.css'
import { useNavigate } from 'react-router-dom'

const FormRegister = ({ setUser }) => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        setUser({
            name: username,
            age: age,
            email: email
        })

        setUsername('')
        setAge('')
        setEmail('')

        navigate('/profilelist',{
            state: {
                name: username,
                age: age,
                email: email
            }
        })
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" value={username} placeholder='Nome' required onChange={(e) => setUsername(e.target.value)} />
            <input type="number" value={age} placeholder='Idade' required onChange={(e) => setAge(e.target.value)} />
            <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <button type='submit' className={styles.button}>Salvar</button>
        </form>

    )
}

export default FormRegister