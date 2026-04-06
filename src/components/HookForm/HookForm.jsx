
import UseInputField from '../Hooks/UseInputField';

const HookForm = () => {
  const [name, nameOnChange] = UseInputField('');
  const [email, emailonChange] = UseInputField('');
  const [password, passwordOnChange] = UseInputField('');

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit', name, email, password)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' onChange={nameOnChange} defaultValue={name} placeholder='Name'/>
        <br />
        <input type="email" name="email" onChange={emailonChange} defaultValue={email} placeholder='Email'/>
         <br />
        <input type="password" name="password" defaultValue={password} onChange={passwordOnChange} placeholder='Password'/>
        <br />
        <input type="submit" defaultValue={email} value="Submit" onChange={emailonChange}/>
       
      </form>
    </div>
  );
};

export default HookForm;