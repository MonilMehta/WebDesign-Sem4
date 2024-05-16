import React, { useState } from 'react';
// import './CheckPara.css'; // Import CSS for styling

const CheckPara = () => {
    const [para, setPara] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    const [searchTerm, setSearchTerm] = useState('');
    const [found, setFound] = useState(false);
    const [showDiv, setShowDiv] = useState(false);

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            // If search term is empty, reset found state
            setFound(false);
            return;
        }

        if(para.toLowerCase().includes(searchTerm.toLowerCase())) {
            setFound(true);
        } else {
            setFound(false);
        }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setFound(false); // Reset found state when input changes
    };

    const highlightText = () => {
        if (searchTerm=='') return para; // If search term is empty, return original paragrap
        return para.replace(searchTerm, `<mark>${searchTerm}</mark>`);
    };
    
    const colors = ['red', 'blue', 'green', 'yellow'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const handleColorToggle = () => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };
    const handleDivToggle=()=>{
        setShowDiv(!showDiv);
    }

    const currentColor = colors[currentColorIndex];
    return (
        <div className='check-para'>
            <div className='para'>
                <p dangerouslySetInnerHTML={{ __html: highlightText() }}></p>
            </div>
            <div className='search'>
                <input
                    type='text'
                    placeholder='Search'
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            
            <div style={{backgroundColor:currentColor,width:'500px'}}>
                <button onClick={handleColorToggle}>Change Color</button>
            </div>
            <button onClick={handleDivToggle}>Change Color</button>
            {showDiv?
            (<div style={{backgroundColor:'white',width:'500px'}}>
                <p>kKaash Koi ladki Mujhe Pyaar Karti</p>
            </div>)
            :''}
        </div>
    );
};

export default CheckPara;
