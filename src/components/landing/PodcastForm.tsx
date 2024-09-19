import React, { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import { podcastIcons } from '@/db/data';

const PodcastCreator: React.FC = () => {
    const [selectedVoice, setSelectedVoice] = useState<string>('Caroline');
    const [length, setLength] = useState<number>(5);
    const [level, setLevel] = useState<string>('Beginner');
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('File selected:', file.name);
        }
    };

    // Reusable Radio Input component
    const RadioGroup = <T extends string | number>({
        options,
        selectedValue,
        onChange,
        name,
    }: {
        options: T[];
        selectedValue: T;
        onChange: (value: T) => void;
        name: string;
    }) => (
        <div className="flex gap-4">
            {options.map((option) => (
                <label key={option} className="inline-flex items-center">
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        checked={selectedValue === option}
                        onChange={() => onChange(option)}
                        className="form-radio text-black"
                    />
                    <span className="ml-2">{option}</span>
                </label>
            ))}
        </div>
    );

    return (
        <div className="flex flex-col lg:flex-row lg:space-x-8 p-6 font-sans py-12 px-6">
            {/* Left Section - Introduction */}
            <div className="lg:w-1/2 mb-8 lg:mb-0 flex-1 flex flex-col justify-center">
                <h1 className="text-3xl font-semibold mb-12">Create Engaging Podcasts Effortlessly</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Turn your course materials into captivating audio content. This tool helps you create podcasts for your students that are tailored to their needs, with different voices, levels, and lengths available.
                </p>
                <ul className="list-disc list-inside text-left text-gray-700">
                    <li>Upload your content and transform it into audio.</li>
                    <li>Select different voice options for a personalized touch.</li>
                    <li>Choose podcast length and difficulty level.</li>
                    <li>Easy-to-use interface with fast results.</li>
                </ul>
            </div>

            <div className="lg:w-1/2">
                <div className='mb-4'>
                    <h1 className="text-3xl font-semibold text-center">Transfrom your materials into engaging audio podcasts.</h1>
                    <p className='text-center'>Assign contents students actually like.</p>
                </div>
                
                <div className="flex justify-center gap-4 mb-4">
                    {podcastIcons.map((iconObj) => (
                        <button key={iconObj.id}>
                            <Icon icon={iconObj.icon} className="text-2xl text-gray-600" />
                        </button>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button className="bg-black text-white py-2 w-fit px-8 rounded mx-auto mb-4 text-sm">
                        Try it now
                    </button>
                </div>
                <div
                    className="border-2 border-dashed border-gray-300 p-10 rounded mb-8 cursor-pointer hover:border-gray-500"
                    onClick={handleFileUpload}
                >
                    <Icon icon={'mdi:upload'} className="text-5xl text-gray-400 mx-auto" />
                    <p className="text-gray-500 mt-4 text-center">Upload your course materials</p>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>

                <div className="text-left mb-8">
                    <div className="mb-6">
                        <p className="font-semibold mb-2">Length (minutes)</p>
                        <RadioGroup<number>
                            options={[5, 10, 15]}
                            selectedValue={length}
                            onChange={setLength}
                            name="length"
                        />
                    </div>

                    <div className="mb-6">
                        <p className="font-semibold mb-2">Voice</p>
                        <RadioGroup<string>
                            options={['Caroline', 'John', 'Rachel']}
                            selectedValue={selectedVoice}
                            onChange={setSelectedVoice}
                            name="voice"
                        />
                    </div>

                    <div className="mb-6">
                        <p className="font-semibold mb-2">Level</p>
                        <RadioGroup<string>
                            options={['Beginner', 'Intermediate', 'Expert']}
                            selectedValue={level}
                            onChange={setLevel}
                            name="level"
                        />
                    </div>
                </div>

                <button className="bg-black text-white py-3 px-8 rounded w-full">
                    Create podcast
                </button>
            </div>
        </div>
    );
};

export default PodcastCreator;