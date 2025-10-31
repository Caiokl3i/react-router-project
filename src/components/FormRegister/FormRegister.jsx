import styles from './FormRegister.module.css'

const FormRegister = () => {
    return (
        <form className={styles.form}>
            <input type="text" placeholder='Nome' required />
            <input type="number" placeholder='Idade' required />
            <input type="text" placeholder='Email' />
            <button className={styles.button}>Salvar</button>
        </form>

    )
}

export default FormRegister