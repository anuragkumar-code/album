import React, { useState } from "react";

const ForgotPasswordForm = ({ toggleAuthMode }) => {

    const [formData, setFormData] = useState({
        email: '',
    });

    const [errors, setErrors] = useState({});
    
    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Login successful:', formData);
            alert('Login Successful!');
        }
    };

    return (
        <div className="max-w-md w-full mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Forgot Password ?</h3>
            <p className="text-body-tertiary mb-5 text-gray-600 text-sm">
                Enter your email below and we will send you a reset link.
            </p>
            <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-2 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="mb-4 flex justify-between items-center">
                    <span
                        onClick={() => toggleAuthMode('login')}
                        className="text-blue-500 text-sm underline cursor-pointer"
                    >
                        Back to login ?
                    </span>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
                    >
                    Send
                </button>
            </form>
        </div>
    );
};


export default ForgotPasswordForm;