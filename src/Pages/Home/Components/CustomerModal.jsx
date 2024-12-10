import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setContact } from '../../../Redux/Slices/FormSlice'; 

const CustomerModal = ({ setContactFilled }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); 

  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    if (field === 'firstName') setFirstName(value);
    if (field === 'lastName') setLastName(value);
    if (field === 'email') setEmail(value);
    if (field === 'phone') setPhone(value);

    dispatch(
      setContact({
        firstName: field === 'firstName' ? value : firstName,
        lastName: field === 'lastName' ? value : lastName,
        email: field === 'email' ? value : email,
        phone: field === 'phone' ? value : phone,
      })
    );
  };

  // Effect to check if required fields are filled
  useEffect(() => {
    if (firstName && lastName && email) {
      setContactFilled(true); // Enable "Next" button when all required fields are filled
    } else {
      setContactFilled(false); // Disable "Next" button when required fields are not filled
    }
  }, [firstName, lastName, email, setContactFilled]);

  return (
    <div className="flex flex-col gap-5 items-center">
      <input
        type="text"
        value={firstName}
        onChange={(e) => handleInputChange('firstName', e.target.value)}
        placeholder="名"
        className="p-2 border border-gray-300 rounded-md w-[250px]"
        required
      />

      <input
        type="text"
        value={lastName}
        onChange={(e) => handleInputChange('lastName', e.target.value)}
        placeholder="姓"
        className="p-2 border border-gray-300 rounded-md w-[250px]"
        required
      />

      <input
        type="email"
        value={email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        placeholder="メールアドレス"
        className="p-2 border border-gray-300 rounded-md w-[250px]"
        required
      />

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
