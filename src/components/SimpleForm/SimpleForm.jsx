

const SimpleForm = () => {

    const handleSubmit = (even) => {
        even.preventDefault();
        console.log(even.target.name.value)
        console.log(even.target.email.value)

        even.target.reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name'/>
                <br />
                <input type="text" name='email' placeholder='Your Email'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;