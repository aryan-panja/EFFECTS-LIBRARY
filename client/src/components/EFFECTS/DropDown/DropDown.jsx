import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const DropDown = ({ children, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className={cn("relative inline-block", className)} {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isOpen, toggleDropdown })
      )}
    </div>
  );
};

const DropDownTrigger = React.forwardRef(({ toggleDropdown, className, children, ...props }, ref) => (
  <button
    ref={ref}
    onClick={toggleDropdown}
    className={cn(
      "px-4 py-2 bg-white border rounded-md shadow-md text-sm text-gray-700 hover:bg-gray-100 focus:outline-none",
      className
    )}
    {...props}
  >
    {children}
  </button>
));
DropDownTrigger.displayName = 'DropDownTrigger';

const DropDownMenu = React.forwardRef(({ isOpen, className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute mt-2 left-0 w-56 bg-white border border-gray-200 rounded-md shadow-lg transition-transform duration-300 ease-in-out",
      {
        "opacity-100 scale-100": isOpen,
        "opacity-0 scale-95 pointer-events-none": !isOpen,
      },
      className
    )}
    {...props}
  >
    {children}
  </div>
));
DropDownMenu.displayName = 'DropDownMenu';

const DropDownItem = React.forwardRef(({ onClick, className, children, ...props }, ref) => (
  <button
    ref={ref}
    onClick={onClick}
    className={cn(
      "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none",
      className
    )}
    {...props}
  >
    {children}
  </button>
));
DropDownItem.displayName = 'DropDownItem';

export { DropDown, DropDownTrigger, DropDownMenu, DropDownItem };
