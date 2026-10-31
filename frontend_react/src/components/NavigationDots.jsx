import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'experience', 'achievements', 'contact'].map((item,index) => (
                    <a
                    href={`#${item}`}
                    key={item+index}
                    aria-label={item}
                    className='app__navigation-dot'
                    style={active===item ? {backgroundColor:'313BAC'}:{}}
                    ><span /></a>
            ))}
        </div>
    )
}

export default NavigationDots
