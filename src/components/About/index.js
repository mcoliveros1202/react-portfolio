import React from 'react';
import coverImage from '../../assets/cover/byron-johnson-pj1jt4vBGZY-unsplash.jpg'

function About() {
    return (
        <section className='my-5'>
            <h1 id='about'>Who am I?</h1>
            <img src={coverImage} className='my-2' style={{ width: '100%' }} alt='cover' />
            <p>My name is Maggie Oliveros and I am a newly graduated Web Developer. I am interested in learning and exploring new technologies to expand my skillset. I am passionate about helping people more easily access the information they are seeking and web development is a hands-on way to facilitate that.</p>
        </section>
    );
}

export default About;