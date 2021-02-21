# Forgot Password Form
<br>

```js
import ForgotPassword from "mela-store";
```

### Example:


<ForgotPasswordDocs>

```vue
<login 
  ref='melastoreForgotPassword'
  @send-password-reset-link='sendPasswordResetLink'
  @show-login-form='showLoginForm'
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
```

</ForgotPasswordDocs>