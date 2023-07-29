import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
          < img className='row-span-3 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='/'  />
          < img className='row-span-2 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1606820854416-439b3305ff39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='/'/>
          < img className='row-span-2 object-cover w-full h-full p-2' src='https://plus.unsplash.com/premium_photo-1676550901098-ef91a54010af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='/'/>
          < img className='row-span-3 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1564594736624-def7a10ab047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRvdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='/'/>
          < img className='row-span-2 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1541300613939-71366b37c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='/'/>
        </div>
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>You lose sight of things…and when you travel, everything balances out.</p>
            <p className='pb-6'>
            It seems that the more places I see and experience, the bigger I realize the world to be. The more I become aware of, the more I realize how relatively little I know of it, how many places I have still to go, how much more there is to learn. 
            </p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan