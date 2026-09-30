import React, { useState } from "react";

function Forms() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmitEvent(event) {
        event.preventDefault();
        if (name && email && password)
        setSubmitted(true);
    }

    return (
            <div>
                <form onSubmit={handleSubmitEvent}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button id="createButton" type="submit">Create Account</button>
                </form>
                <div>
                    {submitted && (
                        <div>
                            <h1>Account made!</h1>
                            <h2>Name: {name}</h2>
                            <h2>Email: {email}</h2>
                            <h2>Password: {password}</h2>
                        </div>
                    )}
                </div>
            </div>
    );
}

export default Forms;