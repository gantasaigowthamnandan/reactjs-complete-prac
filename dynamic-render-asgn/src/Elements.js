import styles from './App.module.css';
export const H3 = ({className,children}) => {
    return <h3 className={styles[className]}>{children}</h3>
}
export const Div = ({className,children}) => {
    return <div className={styles[className]}>{children}</div> 
}
export const Form = ({className,children}) =>{
    return <form className={styles[className]}>{children}</form>
}
export const Input = ({type,className,value,placeholder}) => {
    return <input className={styles[className]} type={type} value={value} placeholder={placeholder}/>
}