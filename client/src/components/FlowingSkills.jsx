import React from 'react';

function FlowingSkills({ items = [] }) {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-300 p-2 shadow-inner ring-1 ring-white/20 dark:ring-gray-300">
      <div className="animate-scroll flex gap-8 whitespace-nowrap px-4 h-full items-center">
        {[...items, ...items].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-lg dark:text-[#060000] text-gray-800 px-4 py-2 inline-block uppercase font-normal leading-[1.2]"
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FlowingSkills