import React from 'react'

const Header = () => {
    return (
        <header className='w-full border-b border-[#D1D1D1]'>
            <div className='flex py-3 px-5 items-center gap-4'>
                <img src='https://i.ibb.co/RYyH1TN/monk-logo.png' className='rounded' width={30} height={30} alt='Monk Logo' />
                <h1 className='text-[#7E8185] text-[16px] font-semibold'>Monk Upsell & Cross-sell</h1>
            </div>
        </header>
    )
}

export default Header
