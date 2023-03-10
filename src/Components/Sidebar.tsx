import React from 'react';

function Sidebar({items}: {
  items: {
    name: string,
    href: string
  }[]
}) {
  return (
    <div>
      {items.map((item: {name: string, href: string}) => (
        <div key={item.href}>
          <a role='navigation' href={item.href}>{item.name}</a>
          </div>
      ))}
    </div>
  );
}

export default Sidebar;