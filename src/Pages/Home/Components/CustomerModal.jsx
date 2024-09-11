import React, { useState } from 'react';

const CustomerModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // Optional phone number

  return (
    <div className="flex flex-col gap-5 items-center">
      {/* First Name (名) */}
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="名"
        className="p-2 border border-gray-300 rounded-md w-[250px]"
        required
      />

      {/* Last Name (姓) */}
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="姓"
        className="p-2 border border-gray-300 rounded-md w-[250px]"
        required
      />

      {/* Email (メールアドレス) */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="メールアドレス"
        className="p-2 border border-gray-300 rounded-md w-[250px]"
        required
      />

      {/* Phone Number (電話番号) - Optional */}
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="電話番号 (任意)"
        className="p-2 border border-gray-300 rounded-md w-[250px]"
      />
    </div>
  );
};

export default CustomerModal;
