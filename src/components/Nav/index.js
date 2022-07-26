import { getByTestId } from '@testing-library/react';
import React, { useEffect } from 'react'; 
import { capitalizeFirstLetter } from "../../utils/helpers"; 

function Nav(props) {

    const {
        categories = [], 
        setCurrentCategory, 
        currentCategory, 
        contactSelected, 
        setContactSelected,
        resumeSelected, 
        setResumeSelected
    } = props; 

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name); 
    }, [currentCategory]); 
   

    return (
        <header>
            <h2> 
                <a href="/"> 
                    <span role="img" aria-label="camera"> 📸</span> Franklin's Portfolio
                </a> 
            </h2>
            <nav> 
                <ul className="flex-row">
                    <li className="mx-2"> 
                        <a data-testid="about" href="about" onClick={()=> setContactSelected(false)}>About Me</a> 
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}> Contact</span>
                    </li>

                  
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && !resumeSelected && 'navActive'}`}
                         key={category.name}>
                            <span 
                                onClick={()=> {
                                    setCurrentCategory(category);
                                    setContactSelected(false); 
                                    setResumeSelected(false); 
                                }}
                                
                                >{capitalizeFirstLetter(category.name)}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    ); 
} 

export default Nav; 