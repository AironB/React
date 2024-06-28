import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "../../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../../context/userDataContext";
import { useNavigate } from "react-router";


const schema = yup.object().shape({
    email: yup.string().email('Correo no valido').required('El correo electronico es obligatorio'),
    password: yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres')
    
})

export const LoginForm = () => {
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: yupResolver(schema)
    })
    const navigate = useNavigate();
    const {data,setData}=useContext(UserContext)

    const onSubmitForm= data =>{
        console.log(data);
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);

            //Guardamos el usuario en el context
            setData(user);
            navigate('/')
            
        })
    }
    return (
        <div>
        <form >
            <section >
                <label htmlFor="email">Email</label>
                <input id='email' type="email" placeholder="Ingresa tu email"{...register('email')}/>
                {errors.email && <p>{errors.email.message}</p>}
            </section>
            <section>
                <label>Password</label>
                <input id='password' type="Password" placeholder="Ingresa tu password" {...register('password')}/>
                {errors.password && <p>{errors.password.message}</p>}
            </section>
            
            <button type="button"  />Iniciar sesion
        </form>
        </div>
    )
}