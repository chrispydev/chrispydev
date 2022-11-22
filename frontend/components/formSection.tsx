import React, { useState } from 'react';

const FormSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Enter your message');
  const [show, setShow] = useState(false);
  const subject = `From ${fullName} ${message}`;

  function clearState() {
    setFullName('');
    setEmail('');
    setMessage('');
  }

  const sendMail = async (e: any) => {
    setShow(true);
    e.preventDefault();
    try {
      let res = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData.message === 'Email sent!!!!!') {
        setShow(false);
        alert('Message Sent thank you.');
        clearState();
      } else {
        setTimeout(() => {
          setShow(false);
          alert(
            'took too long to send check internet connection and resend message'
          );
        }, 8000);
      }
    } catch (error) {
      setShow(false);
      alert('Please refreshPage and resend your message');
    }
  };

  const text = `From ${fullName} about ${subject} \n ${message}`;

  const data = { subject, email, message };

  return (
    <form className='py-3'>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-6'>
          <input
            required
            placeholder='Full Name'
            type='text'
            name='Full Name'
            autoComplete='given-name'
            className='mt-1 focus:ring-sColor focus:border-sColor  block w-full shadow-md sm:text-sm border-dColor rounded-md'
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
          />
        </div>
        <div className='col-span-12'>
          <textarea
            required
            placeholder='Enter your message'
            name='first-name'
            autoComplete='given-name'
            className='mt-1 focus:ring-sColor focus:border-sColor  block w-full shadow-md sm:text-sm border-dColor rounded-md'
          />
        </div>
      </div>
      <button className='bg-dColor py-2 px-4 my-2 text-white rounded-md'>
        Send Message
      </button>
    </form>
  );
};

export default FormSection;
