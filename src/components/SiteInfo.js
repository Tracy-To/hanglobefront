import React from 'react'

const SiteInfo = (props) => {
  return (
    <div className="container mx-auto max-w-5xl text-center p-12 border-4 border-black rounded-lg mt-20 mb-20 bg-white">
      <h1 className="text-3xl font-bold mb-10">Welcome to HanGlobe!</h1>
      <p className="text-2xl mb-5">Discover and share insights about living in Korea.</p>
      <p className="text-2xl mb-10">Read articles from others and post your own to contribute to our community!</p>
      <img src="https://i.imgur.com/E15prnf.png" alt="Hello, there!" className="mx-auto px-4 rounded-lg" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  )
}

export default SiteInfo