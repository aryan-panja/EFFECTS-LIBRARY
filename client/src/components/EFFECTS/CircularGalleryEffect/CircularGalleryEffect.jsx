import { useState, useEffect, useRef } from "react";

const CircularGalleryEffect = () => {
    const items = [
        { id: 1, name: "Olivia" }, { id: 2, name: "Wendy" },
        { id: 3, name: "Quinn" }, { id: 4, name: "Alice" }, 
        { id: 5, name: "Steve" }, { id: 6, name: "Frank" }, 
        { id: 7, name: "Liam" }, { id: 8, name: "Zane" }, 
        { id: 9, name: "Opal" }, { id: 10, name: "Rose" }, 
        { id: 11, name: "Xander" }, { id: 12, name: "Hannah" }, 
        { id: 13, name: "Brian" }, { id: 14, name: "Zane" }, 
        { id: 15, name: "Rachel" }, { id: 16, name: "John" }, 
        { id: 17, name: "Hannah" }, { id: 18, name: "Jane" }, 
        { id: 19, name: "Xander" }, { id: 20, name: "Alice" }, 
        { id: 21, name: "Liam" }, { id: 22, name: "John" }, 
        { id: 23, name: "George" }, { id: 24, name: "Opal" }, 
        { id: 25, name: "Rachel" }, { id: 26, name: "Kara" }, 
        { id: 27, name: "Jack" }, { id: 28, name: "Clara" }, 
        { id: 29, name: "Tina" }, { id: 30, name: "Emma" }
    ];

    const [centerRotation, setCenterRotation] = useState(0);
    const [currentItem, setCurrentItem] = useState(0);
    const wordWheelRef = useRef();

    const normalizeRotation = (rotation) => {
        const normalized = rotation % 360;
        return normalized < 0 ? normalized + 360 : normalized;
    };

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault(); // Prevent page scroll
            const delta = e.deltaY * 0.1; // Adjust this multiplier to change scroll sensitivity
            setCenterRotation((prevRotation) => prevRotation + delta);
        };

        // Attach the event to the wheel container
        const wheelElement = wordWheelRef.current;
        if (wheelElement) {
            wheelElement.addEventListener("wheel", handleWheel);
        }

        return () => {
            if (wheelElement) {
                wheelElement.removeEventListener("wheel", handleWheel);
            }
        };
    }, []);

    useEffect(() => {
        const normalizedRotation = normalizeRotation(centerRotation);
        const itemRotationStep = 360 / items.length;
        const closestItemIndex = Math.round(normalizedRotation / itemRotationStep) % items.length;

        if (closestItemIndex !== currentItem) {
            setCurrentItem(closestItemIndex);
        }
    }, [centerRotation, items, currentItem]);

    return (
        <div className="w-full flex">
            <div ref={wordWheelRef} className="flex items-center h-screen w-1/2 overflow-hidden">
                <div
                    className="fixed flex justify-center items-center"
                    style={{ transform: `rotate(-${normalizeRotation(centerRotation)}deg)` }}
                >
                    {items.map((item, i) => {
                        const itemRotation = (360 / items.length) * i;
                        const isActive =
                            normalizeRotation(centerRotation) >= itemRotation - 10 &&
                            normalizeRotation(centerRotation) <= itemRotation + 10;

                        return (
                            <p
                                key={i}
                                style={{
                                    transform: `rotate(${itemRotation}deg) translate(500px)`,
                                }}
                                className={`absolute text-6xl transition-colors ease-linear ${isActive ? "text-black" : "text-gray-400"
                                    }`}
                            >
                                {item.name}
                            </p>
                        );
                    })}
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <h1 className="text-6xl">{items[currentItem].name}</h1>
            </div>
        </div>
    );
};

export default CircularGalleryEffect;
