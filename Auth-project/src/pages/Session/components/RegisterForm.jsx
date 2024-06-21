import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../../firebase/config';
//solo valida el formulario
const schema=yup.object().shape({
    email: yup.string().email('Correo no valido. Ejemplo nombre@correo.com').required('El correo es obligatorio'),
    password: yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('El password es obligatorio'),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null],'Las contraseñas deben ser iguales entre si').required('La confirmacion de contraseña es obligatoria')
})


export const RegisterForm = () => {
   // const {register}=useForm()
    const {register,watch,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })
    
        const onSubmitForm = data =>{
         console.log(data);
         console.log(data.email);
        
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message);
          // ..
        });
    }
    

    
return (
    <div>
        <form onSubmit={handleSubmit(onSubmitForm)}>
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
            <section>
                <label>Confirm Password</label>
                <input id='confirmPassword' type="Password" placeholder="Ingresa nuevamente tu password" {...register('confirmPassword')}/>
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </section>
            <button type="submit">Registrarse</button>
        </form>

    </div>
    )
}
