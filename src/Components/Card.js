import React from 'react'

function Card(props){
    const {name,id,email} = props
    return(
        <div className='bg-light-green dib pa3 ma2 grow bg-2 shadow-5 tc'>
            <img 
            alt='robo' 
            src={`https://robohash.org/${id}?100x100`}   
            />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
} 
export default Card