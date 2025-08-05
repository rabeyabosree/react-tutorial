import React from 'react'
import useForm from '../hooks/customHook/useForm'

function SignUpForm() {
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }
    const validate = values => {
        const errors = {}
        if (!values.name.trim()) errors.name = "name required"
        if (!values.email) errors.email = "email is required"
        else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "invalid email"
        if (!values.password || values.password.length < 6)
            errors.password = "password must be 6+ charts"

        return errors
    }
    const onSubmit = (data) =>{
        console.log("registation succses" , data)

    }

    const { values, errors, handleChange, handleSubmit } = useForm({ initialValues, onSubmit, validate })

    

    return (
        <div>

            <h1>SignUpForm</h1>
<form onSubmit={handleSubmit}>
  <input
    type="text"
    name="name"
    autoComplete="name"
    placeholder="Name"
    value={values.name}
    onChange={handleChange}
  />
  {errors.name && <p>{errors.name}</p>}

  <input
    type="email"
    name="email"
    autoComplete="email"
    placeholder="Email"
    value={values.email}
    onChange={handleChange}
  />
  {errors.email && <p>{errors.email}</p>}

  <input
    type="password"
    name="password"
    autoComplete="new-password"
    placeholder="Password"
    value={values.password}
    onChange={handleChange}
  />
  {errors.password && <p>{errors.password}</p>}

  <button type="submit">Sign up</button>
</form>

            <form onSubmit={handleSubmit}>
                <input type="text" value={values.name} onChange={handleChange} />
                {errors.name && <p>{errors.name}</p>}
                <input type="email" value={values.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
                <input type="password" value={values.password} onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}
                <button type='submit'>sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm