import React, { useState } from 'react';

const RegistrationForm = ({ toggleAuthMode }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
        dobDay: '',
        dobMonth: '',
        dobYear: '',
        gender: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    
    const [errors, setErrors] = useState({});
    
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    
    const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);
    
    const validateForm = () => {
      const newErrors = {};

      if (!formData.firstName) newErrors.firstName = 'First name is required';

      if (!formData.surname) newErrors.surname = 'Surname is required';

      if (!formData.dobDay || !formData.dobMonth || !formData.dobYear) {
        newErrors.dob = 'Complete date of birth is required';
      } else {
        const day = parseInt(formData.dobDay);
        const month = months.indexOf(formData.dobMonth); 
        const year = parseInt(formData.dobYear);
        
        const isValidDate = (d, m, y) => {
          const date = new Date(y, m, d);
          return (
            date.getFullYear() === y &&
            date.getMonth() === m &&
            date.getDate() === d
          );
        };
      
        if (!isValidDate(day, month, year)) {
          newErrors.dob = 'Invalid date of birth';
        }
      }
        
      if (!formData.gender) newErrors.gender = 'Gender is required';

      if (!formData.mobile) {
        newErrors.mobile = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(formData.mobile)) {
        newErrors.mobile = 'Mobile number must be 10 digits';
      }
      
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
        
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Password do not match';
      }

      setErrors(newErrors);
      
      return Object.keys(newErrors).length === 0;
    };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (!validateForm()) return;
    
      const payload = {
        firstName: formData.firstName,
        surname: formData.surname,
        dobDay: formData.dobDay,
        dobMonth: formData.dobMonth,
        dobYear: formData.dobYear,
        gender: formData.gender,
        mobile: formData.mobile,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.password,
      };
    
      try {
        const res = await fetch('http://localhost:4000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
    
        const data = await res.json();
    
        if (!res.ok) {
          if (data.errors) {
            const serverErrors = {};
            for (const key in data.errors) {
              serverErrors[key] = data.errors[key][0];
            }
            setErrors(serverErrors);
          } else {
            alert(data.message || 'Registration failed');
          }
        } else {
          alert('Registration successful!');
          setFormData({
            firstName: '',
            surname: '',
            dobDay: '',
            dobMonth: '',
            dobYear: '',
            gender: '',
            mobile: '',
            email: '',
            password: '',
            confirmPassword: '',
          });
        }
      } catch (error) {
        console.error('Registration error:', error);
        alert('Something went wrong. Please try again later.');
      }
    };
    

  return (
    <div className="max-w-md w-full mx-auto">
      <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Sign Up</h3>

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
              </label>
              <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className={`w-full px-4 py-2 border ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
              Surname <span className="text-red-500">*</span>
              </label>
              <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Enter your surname"
              className={`w-full px-4 py-2 border ${
                  errors.surname ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              />
              {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
            </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center space-x-2">
              <label className="block text-sm font-medium text-gray-700">
              Date of Birth <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
              <button
                  type="button"
                  className="w-5 h-5 flex items-center justify-center bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 hover:text-gray-900 focus:outline-none"
                  aria-label="Help"
              >
                  <i className="fa fa-question text-xs"></i>
              </button>
              <div className="absolute hidden group-hover:block bg-white border border-gray-300 text-gray-700 text-sm rounded-lg p-3 shadow-md w-64 top-6">
                  Providing your birthday helps make sure that you get the right experience for your age.
              </div>
              </div>
          </div>

            <div className="grid grid-cols-3 gap-4 mt-2">
                <select
                  id="dobDay"
                  name="dobDay"
                  value={formData.dobDay}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                      errors.dob ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}
                  >
                  <option value="">Day</option>
                  {days.map((day) => (
                      <option key={day} value={day}>
                      {day}
                      </option>
                  ))}
                </select>

                <select
                  id="dobMonth"
                  name="dobMonth"
                  value={formData.dobMonth}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                      errors.dob ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}
                  >
                  <option value="">Month</option>
                  {months.map((month, index) => (
                      <option key={index} value={month}>
                      {month}
                      </option>
                  ))}
                </select>

                <select
                  id="dobYear"
                  name="dobYear"
                  value={formData.dobYear}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                      errors.dob ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}
                  >
                  <option value="">Year</option>
                  {years.map((year) => (
                      <option key={year} value={year}>
                      {year}
                      </option>
                  ))}
                </select>
            </div>

            {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                className="mr-2"
              />
              Female
            </label>
          </div>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            className={`w-full px-4 py-2 border ${
              errors.mobile ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={`w-full px-4 py-2 border ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
        >
          Sign Up
        </button>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm">
          Already have an account?{' '}
          <span
            onClick={() => toggleAuthMode('login')}
            className="text-blue-500 underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;