import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const RightClickToolbar = ({ children, options, ...props }) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef(null);

    const handleContextMenu = (e) => {
        e.preventDefault();
        setVisible(true);

        // Initial placement, will be corrected after render
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div onContextMenu={handleContextMenu} onClick={() => setVisible(false)} className="relative" {...props}>
            {visible && <ToolBar ref={menuRef} options={options} position={position} />}
            {children}
        </div>
    );
};

const ToolBar = React.forwardRef(({ options, position }, ref) => {
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full max-w-[20vw] max-h-[60vh] overflow-hidden bg-black text-white rounded-lg shadow-lg border border-gray-700 p-3 backdrop-blur-md"
            style={{ top: position.y, left: position.x, minWidth: "200px" }}
        >
            <div className="flex flex-col space-y-3 max-h-[59vh] overflow-y-auto rounded-lg px-2 cursor-default">
                {options.map((section, index) => (
                    <div key={index}>
                        <p className="text-lg font-semibold text-gray-300 mb-2">{section.section}</p>
                        <div className="flex flex-col space-y-1 border-gray-700 border-b-2 pb-2">
                            {section.options.map((option, index) => (
                                <div key={index} className="flex justify-between items-center px-3 py-2 text-sm hover:bg-gray-700/50 rounded-md transition">
                                    <p>{option.name}</p>
                                    {option.shortcut && (
                                        <kbd className="text-xs font-medium rounded bg-gray-800 px-2 py-1 text-gray-300">
                                            {option.shortcut}
                                        </kbd>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
});
