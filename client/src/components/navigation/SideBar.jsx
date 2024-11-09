import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const SideBar = ({ children }) => {

    const { component } = useParams();

    useEffect(() => {
        document.title = componentNames.filter(name => name.replace(/\s+/g, "-").toLowerCase() === component);
    }, [component]);

    const componentNames = [
        "Parallax Image",
        "Parallax Image Button",
        "OnHover Big Rectangles",
        "Dynamic TextArea",
        "Search Bar",
        "View More",
        "Calendar",
        "Text Shine",
    ];

    return (
        <div className="flex bg-black text-white">
            <div className="sticky top-14 hidden h-[calc(100dvh-theme(spacing.16))] shrink-0 pt-8 md:block lg:pt-12 overflow-y-auto" style={{ borderRight: '1px solid #333' }}>
                <nav className="p-4">
                    <ul>
                        {componentNames.map((name, index) => (
                            <li key={index} className={`py-2 px-4 my-1 ${component === name.replace(/\s+/g, "-").toLowerCase() ? 'text-[#ffff]' : 'text-[#b0b0b0]'} hover:text-white cursor-pointer`}>
                                <Link to={`/components/${name.replace(/\s+/g, "-").toLowerCase()}`}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {children}
        </div>
    );
};
