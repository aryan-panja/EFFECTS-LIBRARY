import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../ui/badge";

export const SideBar = ({ children }) => {

    const { component } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        const list = componentNames.map(section => section.components).flat();
        const matchedComponent = list.find(name => name.name.replace(/\s+/g, "-").toLowerCase() === component);
        if (matchedComponent) {
            document.title = matchedComponent.name; // Use the 'name' property for the title
        }
    }, [component]);

    const componentNames = [
        {
            'heading': 'UI Components',
            'components': [
                { name: 'Parallax Image', tag: 'normal' },  //tags can be new or depricated
                { name: 'Parallax Image Button', tag: 'normal' },
                { name: 'OnHover Big Rectangles', tag: 'normal' },
                { name: 'Dynamic TextArea', tag: 'normal' },
                { name: 'Search Bar', tag: 'normal' },
                { name: 'View More', tag: 'normal' },
                { name: 'Rating', tag: 'normal' },
                { name: 'Dropdown', tag: 'normal' },
                { name: 'Custom Cursor', tag: 'new' },
                // 'Calendar'
            ]
        },
        {
            'heading': 'Animations',
            'components': [
                { name: 'Rolling Animation', tag: 'new' },
                { name: 'Reveal Animation', tag: 'new' },
            ],
        },
        {
            'heading': 'Text Animations',
            'components': [
                { name: 'Text Shine', tag: 'normal' },
                { name: 'Text Aurora', tag: 'normal' },
                { name: 'Text Form', tag: 'normal' },
                { name: 'Wave Text', tag: 'normal' },
                { name: 'Bouncy Reveal', tag: 'normal' },
            ]
        },
    ];

    return (
        <div className="flex bg-black text-white">
            <div className="sticky top-14 hidden h-[calc(100dvh-theme(spacing.16))] shrink-0 pt-8 md:block overflow-y-auto" style={{ borderRight: '1px solid #333' }}>
                <nav className="p-4">
                    <ul>
                        {componentNames.map((section, index) => (
                            <li key={index} className="mb-4">
                                <h3 className="text-xl font-semibold">{section.heading}</h3>

                                {section.components.map((name, index) => (
                                    <Link to={`/components/${name.name.replace(/\s+/g, "-").toLowerCase()}`} className="w-full">
                                        <li key={index} className={`py-2 px-4 my-1 w-full ${component === name.name.replace(/\s+/g, "-").toLowerCase() ? 'text-[#ffff]' : 'text-[#b0b0b0]'} hover:text-white cursor-pointer`}>
                                            {name.name}
                                            {
                                                name.tag === 'new' &&
                                                <Badge
                                                    className=
                                                    {[
                                                        "ml-2",
                                                        "relative inline-flex items-center px-2 py-0.5 text-xs font-medium",
                                                        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                                                        "text-white rounded-full",
                                                        "shadow-[0_0_15px_rgba(167,139,250,0.7)]",
                                                        "before:absolute before:inset-0",
                                                        "before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent",
                                                        "before:rounded-full before:opacity-50",
                                                        "before:animate-[shine_2s_ease-in-out_infinite]",
                                                        "after:absolute after:inset-0 after:-z-10",
                                                        "after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500",
                                                        "after:rounded-full after:blur-xl",
                                                        "after:animate-[pulse_2s_ease-in-out_infinite]",
                                                    ]}
                                                >
                                                    {name.tag}
                                                </Badge>
                                            }
                                        </li>
                                    </Link>
                                ))
                                }
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {children}
        </div>
    );
};
