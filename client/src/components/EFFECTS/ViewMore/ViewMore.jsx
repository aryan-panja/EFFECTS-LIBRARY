import React, { useState } from 'react';
import test1 from "@/assets/photos/1.jpg";
import { cn } from '@/lib/utils';

const ViewMore = ({ children, className }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive((prev) => !prev);

  return (
    <div className={cn(`h-[400px] w-[300px] rounded-xl relative overflow-hidden ${active ? 'active' : ''}`, className)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { active, toggleActive })
      )}
    </div>
  );
};

const ViewMoreImage = React.forwardRef(({ active, className, ...props }, ref) => (
  <img
    ref={ref}
    src={test1}
    alt="Description of the image"
    className={cn(`h-full w-full inset rounded-xl absolute object-cover ${active ? 'scale-105 blur-sm' : 'scale-100'} duration-1000 transition-all`, className)}
    {...props}
  />
));
ViewMoreImage.displayName = 'ViewMoreImage';

const ViewMoreTrigger = React.forwardRef(({ toggleActive, active, className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`absolute bottom-0 w-full cursor-pointer transition-all duration-700 ease-in-out`, {
      'h-44 bg-white rounded-t-lg': active, // Expanded state
      'h-10 bg-white': !active, // Collapsed state
    }, className)}
    onClick={toggleActive}
    {...props}
  >
    {children}
  </div>
));
ViewMoreTrigger.displayName = 'ViewMoreTrigger';

const ViewMoreHeader = React.forwardRef(({ active, className, children, ...props }, ref) => (
  <h1 className="text-center text-lg font-bold mt-2 text-black">
    {active ? "View Less" : (children || "View More")}
  </h1>
));

const ViewMoreContent = React.forwardRef(({ active, className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`flex items-center justify-center mx-4 text-black transition-all duration-1000 ease-in-out overflow-hidden ${!active ? 'opacity-100 max-h-40 mt-4' : 'opacity-0 max-h-0'}`, className)}
    {...props}
  >
    {children}
  </div>
));
ViewMoreContent.displayName = 'ViewMoreContent';

export { ViewMore, ViewMoreImage, ViewMoreTrigger, ViewMoreContent, ViewMoreHeader };
