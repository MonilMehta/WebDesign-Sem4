// import React, { useState } from 'react';
// import './styles/tooltip.css'; // Import CSS for styling (create Tooltip.css file)

// const Tooltip = ({ text, children }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleMouseEnter = () => {
//     setIsVisible(true);
//   };

//   const handleMouseLeave = () => {
//     setIsVisible(false);
//   };

//   return (
//     <div className="tooltip-container">
//       {/* Element triggering the tooltip */}
//       <span
//         className="tooltip-trigger"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {children}
//       </span>

//       {/* Tooltip content (rendered conditionally) */}
//       {isVisible && (
//         <div className="tooltip">
//           <p className="tooltip-text">{text}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tooltip;


import React, { useState } from 'react';
import './styles/tooltip.css'; // Import CSS for styling (create Tooltip.css file)

const Tooltip = ({text,children}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  }
  const handleMouseLeave = () => {
    setIsVisible(false);
  }

  return (
    
    <div className='tooltip-container'>
    <span
        className="tooltip-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>
      {isVisible && (
        <div className='tooltip'>
          <p className='tooltip-text'>{text}</p>
          </div>
        )}
    </div>
    
  
  )
}

export default Tooltip
