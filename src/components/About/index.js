import React from 'react';
import coverImage from '../../assets/cover/byron-johnson-pj1jt4vBGZY-unsplash.jpg'

function About() {
    return (
        <section className='my-5'>
            <h1 id='about'>Who am I?</h1>
            <img src={coverImage} className='my-2' style={{ width: '100%' }} alt='cover' />
            <p>ipsum lorem </p>
        </section>
    );
}

export default About;