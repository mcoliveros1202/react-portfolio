import React from 'react';

function Nav() {
    const categories = [
        {
            name: 'JS',
            description: 'Projects created focusing on JavaScript.'
        },
        {
            name: 'React',
            description: 'Projects created focusing on React'
        },
    ]
    function categorySelected(name) {
        console.log(`${name} clicked`)
    }
    return (
        <header>
            <h2>
                <a href='/'>
                    <span role='img' aria-label='camera'>📸</span>Portfolio
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className='mx-1' key={category.name}>
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;