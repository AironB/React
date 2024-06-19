import {useForm} from 'react-hook-form';

export const RegisterForm = () => {
    const {register}=useForm()

    
return (
    <div>
        <form>
            <section>
                <label htmlFor="email">Email</label>
                <input id='email' type="mail" placeholder="Ingresa tu email"{...register('email')}/>
            </section>
            <section>
                <label>Password</label>
                <input type="Password" placeholder="Ingresa tu password" {...register('password')}/>
            </section>
            <section>
                <label>Confirm Password</label>
                <input type="Password" placeholder="Ingresa nuevamente tu password" {...register('confirmPassword')}/>
            </section>
            <button type="submit">Registrarse</button>
        </form>

    </div>
  )
}
