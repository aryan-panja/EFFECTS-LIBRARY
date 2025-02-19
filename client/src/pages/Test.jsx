import { RightClickToolbar } from '@/components/EFFECTS/RightClickToolbar/RightClickToolbar'
import React from 'react'

export const toolbarOptions = [
  {
    section: "Editing",
    options: [
      { name: "Cut", shortcut: "Ctrl+X" },
      { name: "Copy", shortcut: "Ctrl+C" },
      { name: "Paste", shortcut: "Ctrl+V" },
      { name: "Delete" },
      { name: "Rename", shortcut: "F2" },
    ],
  },
  {
    section: "View",
    options: [
      { name: "Refresh", shortcut: "F5" },
      { name: "Full Screen", shortcut: "F11" },
      { name: "Zoom In", shortcut: "Ctrl++" },
      { name: "Zoom Out", shortcut: "Ctrl+-" },
    ],
  },
  {
    section: "New",
    options: [
      { name: "New Folder", shortcut: "Ctrl+Shift+N" },
      { name: "New File" },
    ],
  },
  {
    section: "Extras",
    options: [
      { name: "Open in Terminal" },
      { name: "Properties", shortcut: "Alt+Enter" },
    ],
  },
];

export const Test = () => {
  return (
    <RightClickToolbar options={toolbarOptions}>
      <div className='h-screen'>
        <div className='h-[50vh] w-full'>e</div>
      </div>
    </RightClickToolbar>
  )
}
