import React, { useState } from "react";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/react-hooks";

function Signup() {
    const [formState, setFormState] = useState(
        { email: '', password: ''});
        const [addUser] = useMutation(ADD_USER);

        // submit event listener
        const handleFormSubmit = async event => {
            event.preventDefault();
            const mutationResponse = await addUser({
                variables: {
                    email: formState.email,
                    password: formState.password,
                    firstName: formState.firstName,
                    lastName: formState.lastName
                },
            });
        };

        const handleChange = event => {
            const { name, value } = event.target;
            setFormState({
                ...formState,
                [name]: value
            });
        };
}