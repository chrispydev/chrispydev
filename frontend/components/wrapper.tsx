import React from 'react'

interface Props {
  children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <section className='w-[60%] mx-auto py-5'>
      {children}
    </section>
  )
}

export default Wrapper
