import React from 'react'

interface Props {
  children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <section className='lg:w-[60%] md:w-[80%] mx-auto py-5'>
      {children}
    </section>
  )
}

export default Wrapper
