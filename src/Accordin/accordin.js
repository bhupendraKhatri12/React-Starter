import React, { useState } from 'react';
import './accordin.css'

const AccordionItem = ({ item, isOpen, onItemClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onItemClick}>
        {item.title}
      </div>
      {isOpen && <div className="accordion-content">{item.content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={index === openIndex}
          onItemClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
