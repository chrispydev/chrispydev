import React, { useState } from 'react';

import axios from 'axios';

const FormSection: React.FC = () => {
  const [fullName, setFullName] = useState<React.HTMLInputTypeAttribute>();
  const [email, setEmail] = useState<React.HTMLInputTypeAttribute>();
  const [message, setMessage] = useState<React.HTMLInputTypeAttribute>();

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: false },
  });

  const handleOnSubmiting = (code: number) => {
    if (code == 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: true },
      });
      setFullName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: false },
        });
      }, 2000);
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: false },
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: false },
    });

    axios
      .post(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
        data: { fullName, email, message },
      })
      .then((_response) => {
        handleOnSubmiting(_response.status);
      });
  };

  return (
    <form className='py-3'>
      {status.info.error && (
        <div
          className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
          role='alert'
        >
          <strong className='font-bold'>Error</strong>:
          <span className='block sm:inline'>Message not sent????</span>
        </div>
      )}
      {status.info.msg && (
        <div
          className='bg-red-100 border border-dColor text-dColor px-4 py-3 rounded relative'
          role='alert'
        >
          <span className='block sm:inline'>Message sent 👍</span>
        </div>
      )}
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-6'>
          <input
            required
            placeholder='Full Name'
            type='text'
            name='Full Name'
            autoComplete='given-name'
            className='mt-1 focus:ring-sColor focus:border-sColor  block w-full shadow-md sm:text-sm border-dColor rounded-md'
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </div>
        <div className='col-span-12 md:col-span-6'>
          <input
            required
            placeholder='Email Address'
            type='Email'
            name='email'
            autoComplete='email'
            className='mt-1 focus:ring-sColor focus:border-sColor  block w-full shadow-md sm:text-sm border-dColor rounded-md'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='col-span-12'>
          <textarea
            required
            placeholder='Enter your message'
            name='first-name'
            autoComplete='given-name'
            className='mt-1 focus:ring-sColor focus:border-sColor  block w-full shadow-md sm:text-sm border-dColor rounded-md'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
      </div>
      <button
        type='submit'
        className='bg-dColor py-2 px-4 my-2 text-white rounded-md'
        onClick={(e) => handleSubmit(e)}
      >
        {!status.submitting
          ? !status.submitted
            ? 'Send message'
            : 'Submitted'
          : 'Submitting...'}
      </button>
    </form>
  );
};

export default FormSection;
