'use client';

import React, { useState, ReactNode } from 'react';
import { Typography } from '../typography';

interface Tab {
  title: string;
  children: ReactNode;
}

const Tabs = ({ tabs }: { tabs: Tab[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Class for styling the button
  const activeTabBtn = 'bg-white';
  const inActiveTabBtn = 'bg-transparent';

  return (
    <section>
      <div className="flex w-full items-center justify-center gap-2 transition ease-in-out delay-150 duration-500">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`gap-2 py-4 ${
              activeTab === index ? activeTabBtn : inActiveTabBtn
            }`}
            style = {{paddingLeft: 32, paddingRight: 32  }}
          >
            <Typography
              variant="base"
              fontWeight="regular"
              color={activeTab === index ? 'primary' : 'white'}
            >
              {tab.title}
            </Typography>
          </button>
        ))}
      </div>

      {tabs[activeTab].children}
    </section>
  );
};

export { Tabs };
