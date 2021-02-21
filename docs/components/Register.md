# Registration Form
<br>

```js
import Register from "mela-store";
```

### Example:


<RegisterDocs>

```vue
<register 
  ref='melastoreRegister'
  @register='register'
  @show-login-form='showLoginForm'
/>
```

<br />

### Validation
The current validations in place check to ensure that:
<br />
1. All fields are required
2. A valid email is used
3. The password is at least 6 characters

Adding custom errors/validations can be done using the following in the register event:
<br/>
```js
this.$refs.melastoreRegister.setFirstNameError(error)

this.$refs.melastoreRegister.setLastNameError(error)

this.$refs.melastoreRegister.setPhoneError(error)

this.$refs.melastoreRegister.setEmailError(error)

this.$refs.melastoreRegister.setPasswordError(error)
```

</RegisterDocs>