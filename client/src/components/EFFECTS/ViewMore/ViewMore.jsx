import React, { useState } from 'react';
import test1 from "@/assets/photos/1.jpg";
import { cn } from '@/lib/utils';

const ViewMore = ({ children, className, ...props }) => {
  const [active, setActive] = useState(true);

  const toggleActive = () => setActive((prev) => !prev);

  return (
    <div className={cn(`h-[400px] w-[300px] rounded-xl relative overflow-hidden ${active ? 'active' : ''}`, className)} {...props}>
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
    className={cn(`h-full w-full inset rounded-xl absolute object-cover ${!active ? 'scale-105 blur-sm' : 'scale-100'} duration-1000 transition-all`, className)}
    {...props}
  />
));
ViewMoreImage.displayName = 'ViewMoreImage';

const ViewMoreTrigger = React.forwardRef(({ toggleActive, active, className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`absolute bottom-0 w-full cursor-pointer rounded-t-lg transition-all duration-700 ease-in-out text-black bg-white ${active ? 'translate-y-[75%]' : '-translate-y-0'}`,
    //   , {
    //   'bg-white translate-y-0': active,
    //   'bg-white -translate-y-full': !active,
    // }, 
    className)}
    onClick={toggleActive}
    {...props}
  >
    {children}
  </div>
));
ViewMoreTrigger.displayName = 'ViewMoreTrigger';

const ViewMoreHeader = React.forwardRef(({ active, className, children, ...props }, ref) => (
  <h1 className="text-center text-lg font-bold mt-2 text-black" {...props}>
    {active ? "View Less" : (children || "View More")}
  </h1>
));

const ViewMoreContent = React.forwardRef(({ active, className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `flex items-center justify-center my-5 mx-4 text-black transition-transform duration-700 ease-in-out overflow-y-auto transform ${!active ? 'translate-y-0 opacity-100 max-h-40' : '-translate-y-0 opacity-0 max-h-0'}`,
      // {
      //   '-translate-y-full opacity-0 max-h-0': !active, // Move content down and hide
      //   'translate-y-0 opacity-100 max-h-40 mt-4': active, // Move content up and show
      // },
      className
    )}
    {...props}
  >
    {children}
  </div>
));
ViewMoreContent.displayName = 'ViewMoreContent';

export { ViewMore, ViewMoreImage, ViewMoreTrigger, ViewMoreContent, ViewMoreHeader };
