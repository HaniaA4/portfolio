import React from 'react';

function FlowingSkills({ items = [] }) {
  // Repeat items for seamless looping
  const marqueeItems = [...items, ...items];

  return (
    <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-300 p-2 shadow-inner ring-1 ring-white/20 dark:ring-gray-300">
      <div className="flex animate-marquee whitespace-nowrap h-full items-center gap-12 px-4">
        {marqueeItems.map((item, idx) => (
          <span
            key={idx}
            className="text-[#060010] uppercase font-normal text-[4vh] leading-[1.2]"
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default FlowingSkills;