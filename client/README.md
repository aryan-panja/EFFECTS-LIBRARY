# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


[text](https://codyhouse.co/ds/components/app/markdown-editor) - for markdown component.

New Ideas - 
That's a great project idea! Here are some unique component ideas for your Tailwind React library:

1. **Animated List Reordering**: A draggable list component with smooth animations to reorder items, using Tailwind for styling. This would be useful for todo lists or priority management apps.

2. **Dynamic Bento Grid**: A grid layout where items can change sizes based on content or screen width, with options for hover and scroll-triggered animations, ideal for portfolio or gallery displays.

3. **Customizable Steps Timeline**: A step-by-step timeline component that can handle vertical or horizontal layouts. Include options for custom icons, animations, and Tailwind-based themes.

4. **Radial Menu**: A circular menu component that expands when clicked or hovered, with options for icons and text in each radial segment. It’s visually unique and great for interactive dashboards.

5. **Swipeable Notification Banners**: Notification banners that users can swipe away. This could include various types (info, warning, error) and Tailwind-based transitions for smooth swipe animations.

6. **Gradient Border Cards**: Card components with gradient borders and hover effects. These could be used for profiles, media items, or general information, adding a modern, colorful look to cards.

7. **Scroll-Synced Image Carousel**: A carousel that updates images based on scroll position rather than clicks, perfect for storytelling or product showcases. Tailwind’s flexibility with responsive styles would make it highly customizable.

8. **Data Table with Dynamic Filters**: A data table that includes built-in filters for searching and sorting data, with animations for adding/removing filters. Tailwind can handle the table styling and filter controls.

9. **Interactive Map Markers**: A map marker component that can show additional information in popups. You could integrate these with Tailwind for a stylized info display on hover or click.

10. **Responsive Side Panel Drawer**: A side panel that can slide in/out, suitable for sidebars or additional info panels. Include a toggle button with animated transitions, adaptable to screens of different sizes.

11. **Split Pane Resizer**: A component that allows users to resize two adjacent panes (like text and preview) with a draggable resizer. This would be great for editing interfaces.

12. **Timeline with Milestone Animations**: A horizontally or vertically scrollable timeline that reveals animations at each milestone, ideal for history, project milestones, or educational content.

13. **Tag Input with Autocomplete**: An input component for adding tags or keywords, with a dropdown autocomplete that appears as the user types, using Tailwind styling for smooth integration.

14. **Rich Tooltips with Images**: Tooltips that can handle not just text but also images, icons, and action buttons. Perfect for tutorials, help icons, or product previews.

15. **Customizable Voting Cards**: Like upvote/downvote systems, with animated counters and emoji-based reactions. This could work well for feedback or rating systems on websites.

16. **Contextual Menu with Custom Actions**: A context menu component that displays additional actions when users right-click on specific elements. Include animations for menu items and options for custom styling.

17. **Progress Circle with Checkpoints**: A circular progress indicator where you can add checkpoints that reveal information or tooltips at certain stages, like step-by-step progress or achievements.

18. **Code Snippet with Copy Button and Syntax Highlighting**: A pre-styled code snippet component with a built-in copy button and support for syntax highlighting, using Tailwind’s color schemes.

19. **Interactive Storybook Grid**: A grid that displays images or cards in a sequence, revealing content as users click or hover, ideal for storytelling, portfolios, or case studies.

20. **Accordion with Icon Animation**: An accordion component where icons (such as + or -) animate in sync with the opening and closing of sections, adding a smooth, polished feel.

Each of these components could be built with modularity and configurability in mind, allowing users to customize them to fit their designs effortlessly.


Draggabale Reordering List - 

<!-- import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DraggableList = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
  ]);

  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index, item) => {
    setDraggedItem(item);
    setDraggedIndex(index);
  };

  const handleDragOver = (index) => {
    if (draggedIndex === index) return;

    const newItems = [...items];
    newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, draggedItem);

    setItems(newItems);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDraggedIndex(null);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Draggable Reordering List</h1>
      <div className="space-y-2">
        {items.map((item, index) => (
          <AnimatedListItem
            key={item.id}
            item={item}
            index={index}
            isDragged={index === draggedIndex}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          />
        ))}
      </div>
    </div>
  );
};

const AnimatedListItem = ({
  item,
  index,
  isDragged,
  onDragStart,
  onDragOver,
  onDragEnd,
}) => {
  return (
    <motion.div
      layout
      animate={{
        scale: isDragged ? 1.05 : 1,
        boxShadow: isDragged
          ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      draggable
      onDragStart={() => onDragStart(index, item)}
      onDragOver={() => onDragOver(index)}
      onDragEnd={onDragEnd}
      className={`
        bg-white rounded-md shadow-md p-4 cursor-move
        ${isDragged ? 'z-10' : ''}
      `}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-800">{item.name}</h3>
        <div className="flex items-center space-x-2">
          <button className="text-gray-500 hover:text-gray-700">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DraggableList; -->

Draggable Calendar - 

[
  {
    "year": 2023,
    "data": [
      {
        "id": 1,
        "name": "January",
        "data": [
          {
            "date": 1,
            "events": [
              { "name": "New Year Celebration", "time": "00:00" },
              { "name": "Family Dinner", "time": "19:00" }
            ]
          },
          {
            "date": 15,
            "events": [
              { "name": "Martin Luther King Jr. Day", "time": "09:00" },
              { "name": "Community Service", "time": "11:00" }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "February",
        "data": [
          {
            "date": 14,
            "events": [
              { "name": "Valentine's Day", "time": "12:00" },
              { "name": "Charity Event", "time": "18:00" }
            ]
          },
          {
            "date": 28,
            "events": [
              { "name": "End of Month Review", "time": "17:00" }
            ]
          }
        ]
      },
      {
        "id": 12,
        "name": "December",
        "data": [
          {
            "date": 25,
            "events": [
              { "name": "Christmas Day", "time": "10:00" },
              { "name": "Gift Exchange", "time": "14:00" }
            ]
          },
          {
            "date": 31,
            "events": [
              { "name": "New Year's Eve Party", "time": "20:00" },
              { "name": "Fireworks", "time": "23:59" }
            ]
          }
        ]
      }
    ]
  },
  {
    "year": 2024,
    "data": [
      {
        "id": 3,
        "name": "March",
        "data": [
          {
            "date": 17,
            "events": [
              { "name": "St. Patrick's Day", "time": "12:00" },
              { "name": "Parade", "time": "15:00" }
            ]
          },
          {
            "date": 20,
            "events": [
              { "name": "First Day of Spring", "time": "06:00" }
            ]
          }
        ]
      },
      {
        "id": 7,
        "name": "July",
        "data": [
          {
            "date": 4,
            "events": [
              { "name": "Independence Day", "time": "08:00" },
              { "name": "Fireworks", "time": "21:00" }
            ]
          }
        ]
      },
      {
        "id": 11,
        "name": "November",
        "data": [
          {
            "date": 27,
            "events": [
              { "name": "Aryan Birthday", "time": "18:00" },
              { "name": "Birthday Party", "time": "20:00" }
            ]
          },
          {
            "date": 28,
            "events": [
              { "name": "Thanksgiving", "time": "12:00" },
              { "name": "Family Gathering", "time": "15:00" }
            ]
          }
        ]
      }
    ]
  },
  {
    "year": 2025,
    "data": [
      {
        "id": 5,
        "name": "May",
        "data": [
          {
            "date": 1,
            "events": [
              { "name": "Labor Day", "time": "09:00" }
            ]
          },
          {
            "date": 25,
            "events": [
              { "name": "Memorial Day", "time": "10:00" },
              { "name": "Parade", "time": "13:00" }
            ]
          }
        ]
      },
      {
        "id": 10,
        "name": "October",
        "data": [
          {
            "date": 31,
            "events": [
              { "name": "Halloween", "time": "18:00" },
              { "name": "Costume Party", "time": "20:00" },
              { "name": "Trick or Treating", "time": "17:00" }
            ]
          }
        ]
      }
    ]
  }
]
