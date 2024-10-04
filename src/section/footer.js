import React from 'react'

export const Footer = (props) => {
  const { lang } = props
  return (
    <footer className=' p-4 h-fit md:p-16 content-end grid'
    style= {{background: "linear-gradient(to bottom, #4169e1, #5a9bd4)", 
  }}>
      <p className="text-center text-lg mt-4">
    <span className="text-yellow-400">Copyright</span> 
    <span className="text-black"> @2024</span>
</p>

      </footer>
  )
}
