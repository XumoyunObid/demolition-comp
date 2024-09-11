import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setContact } from '../../../Redux/Slices/FormSlice'; // Import the action to store customer data

const CustomerModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // Optional phone number

  const dispatch = useDispatch(); // Initialize Redux dispatch

  // Function to handle form changes and dispatch the data to Redux
  const handleInputChange = (field, value) => {
    if (field === 'firstName') setFirstName(value);
    if (field === 'lastName') setLastName(value);
    if (field === 'email') setEmail(value);
    if (field === 'phone') setPhone(value);

    // Dispatch customer info to Redux when any field is updated
    dispatch(setContact({
      firstName: field === 'firstName' ? value : firstName,
      lastName: field === 'lastName' ? value : lastName,
      email: field === 'email' ? value : email,
      phone: field === 'phone' ? value : phone,
    }));
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      {/* First Name (名) */}
      <input
        type="text"
        value={firstName}
        onChange={(e) => handleInputChange('firstName', e.target.value)}
        placeholder="名"
        className="p-2 border border-gray-300 rounded-md w-[250px]"
        required
      />

      {/* Last Name (姓) */}
      <input
        type="text"
        value={lastName}
        onChange={(e) => handleInputChange('lastName', e.target.value)}
        placeholder="姓"
        className="p-2 border border-gray-300 rounded-md w-[250px]"
        required
      />

      {/* Email (メールアドレス) */}
      <input
        type="email"
        value={email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        placeholder="メールアドレス"
        className="p-2 border border-gray-300 rounded-md w-[250px]"
        required
      />

      {/* Phone Number (電話番号) - Optional */}
      <input
        type="tel"
        value={phone}
        onChange={(e) => handleInputChange('phone', e.target.value)}
        placeholder="電話番号 (任意)"
        className="p-2 border border-gray-300 rounded-md w-[250px]"
      />
    </div>
  );
};

export default CustomerModal;
