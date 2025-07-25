import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling } from 'react-icons/fa'
import { FaShield } from 'react-icons/fa6'
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {

    const leftValues = value.slice(0,2).map(item => {
        return(
           <div key={item.id} className='flex md:flex-row-reverse items-center gap-5'>
                <div className='flex'>
                    <span className='w-10 h-10 rounded-full flex items-center justify-center text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500'>{item.icons}</span>
                </div>

                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
           </div>
        )
    })

    const rightValues = value.slice(2).map(item => {
        return(
           <div key={item.id} className='flex items-center gap-5'>
                <div>
                    <span className='w-10 h-10 rounded-full flex items-center justify-center text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500'>{item.icons}</span>
                </div>

                <div>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
           </div>
        )
    })

    return (
        <section>
            <div className='max-w-[1200px] mx-auto px-10 py-20'>
            <Heading highlight='Our' heading='Values'/>

            <div className='flex md:flex-row flex-col mt-10 md:gap-10 gap-10'>
                {/* Left Values */}
                <div className='md:min-h-100 flex flex-col justify-between gap-10'>
                    {leftValues}
                </div>

                <div className='md:flex w-1/2 hidden'>
                    <img src={Basket}></img>
                </div>

                {/* Right Values */}
                <div className='md:min-h-100 flex flex-col justify-between gap-10'>
                    {rightValues}
                </div>
            </div>

            </div>
        </section>
    )
}

export default Values

const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'Returns a New Array: Always creates a brand new array.',
        icons: <FaHeart />
    },

    {
        id: 2,
        title: 'Always Fresh',
        para: 'Returns a New Array: Always creates a brand new array.',
        icons: <FaLeaf />
    },

    {
        id: 3,
        title: 'Food Safety',
         para: 'Returns a New Array: Always creates a brand new array.',
        icons: <FaShield />
    },

    {
        id: 4,
        title: '100% Organic',
         para: 'Returns a New Array: Always creates a brand new array.',
        icons: <FaSeedling />
    }
]