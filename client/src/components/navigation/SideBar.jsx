import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const SideBar = ({ children }) => {

    const { component } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        const list = componentNames.map(section => section.components).flat();
        document.title = list.filter(name => name.replace(/\s+/g, "-").toLowerCase() === component)[0];

    }, [component]);

    const componentNames = [
        {
            'heading': 'UI Components',
            'components': [
                'Parallax Image',
                'Parallax Image Button',
                'OnHover Big Rectangles',
                'Dynamic TextArea',
                'Search Bar',
                'View More',
                'Calendar'
            ]
        },
        {
            'heading': 'Text Animations',
            'components': [
                'Text Shine',
                'Text Aurora',
                'Text Form',
                'Wave Text',
            ]
        }
    ];

    return (
        <div className="flex bg-black text-white">
            <div className="sticky top-14 hidden h-[calc(100dvh-theme(spacing.16))] shrink-0 pt-8 md:block lg:pt-12 overflow-y-auto" style={{ borderRight: '1px solid #333' }}>
                <nav className="p-4">
                    <ul>
                        {componentNames.map((section, index) => (
                            <li key={index} className="mb-4">
                                <h3 className="text-lg font-semibold">{section.heading}</h3>

                                {section.components.map((name, index) => (
                                    <Link to={`/components/${name.replace(/\s+/g, "-").toLowerCase()}`} className="w-full">
                                        <li key={index} className={`py-2 px-4 my-1 w-full ${component === name.replace(/\s+/g, "-").toLowerCase() ? 'text-[#ffff]' : 'text-[#b0b0b0]'} hover:text-white cursor-pointer`}>
                                            {name}
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
