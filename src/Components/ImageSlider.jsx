import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight }
    from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const ImageSlider = () => {
    const slider = [
        {
            url: 'https://plus.unsplash.com/premium_photo-1677192448752-ca770afef3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            title: 'momos'
        },
        {
            url: 'https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            title: 'fries'
        },
        {
            url: 'https://images.unsplash.com/photo-1609167830220-7164aa360951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            title: 'burger'
        },
        {
            url: 'https://images.unsplash.com/photo-1564759077036-3def242e69c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            title: 'pasta'
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slider.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${slider[currentIndex].url})` }}>
            </div>
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  group-hover:bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slider.map((slide, slideIndex) => (
                    <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                        <RxDotFilled />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ImageSlider