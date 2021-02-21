# Login Form
<br>

```js
import Login from "mela-store";
```

### Example:


<LoginDocs>

```vue
<login 
  ref='melastoreLogin'
  @login='login'
  @show-register-form='showRegisterForm'
  @show-forgot-password-form='showForgotPasswordForm'
/>
```

<br />

### Validation
The current validations in place check to ensure that:
<br />
1. All fields are required
2. A valid email is used

Adding custom errors/validations can be done using the following in the login event:
<br/>
```js
this.$refs.melastoreRegister.setEmailError(error)

this.$refs.melastoreRegister.setPasswordError(error)
```

</LoginDocs>