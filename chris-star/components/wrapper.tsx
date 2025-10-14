import React from 'react'

interface Props {
  children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <section className='lg:w-[45%] md:w-[65%] mx-auto py-5 px-4'>
      {children}
    </section>
  )
}

export default Wrapper
