import { Icon } from '@iconify/react';

const features = [
    {
        title: "Engaging",
        description: "Get students to actually show up prepared for class by making learning engaging and fun.",
        icon: "mdi:chat-outline",
    },
    {
        title: "Customizable",
        description: "Customize your podcasts, including the length, style, and voice.",
        icon: "mdi:bullhorn-outline",
    },
    {
        title: "Accessible",
        description: "Allow students to learn with the format they're comfortable with.",
        icon: "mdi:account-group-outline",
    },
    {
        title: "Education-first",
        description: "AI designed specifically for education.",
        icon: "mdi:school-outline",
    },
];

const Features = () => {
    return (
        <section className="bg-gray-100 text-white py-12 px-6 lg:flex items-center">
                <h2 className="text-4xl font-semibold mb-12 text-start text-black lg:w-3/12">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center p-6 bg-gray-50 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
                            <div className="p-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg flex-shrink-0">
                                <Icon icon={feature.icon} className="text-white w-8 h-8" />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-2xl font-semibold text-black">{feature.title}</h3>
                                <p className="text-gray-400 mt-2">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    );
};

export default Features;