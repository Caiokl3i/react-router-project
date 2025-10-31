import styles from './Register.module.css'
import FormRegister from '../../components/FormRegister/FormRegister'

const Register = () => {
    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <h1>Crie sua conta</h1>
                <FormRegister />
            </div>
        </div>
    )
}

export default Register