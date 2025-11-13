
import React, { useState } from 'react';

const AspectRatioButton: React.FC<{ value: string; selected: boolean; onClick: (value: string) => void }> = ({ value, selected, onClick }) => (
    <button
        onClick={() => onClick(value)}
        className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
            selected ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
    >
        {value}
    </button>
);

const GeneratedImageCard: React.FC<{ src: string, prompt: string }> = ({ src, prompt }) => (
    <div className="group relative overflow-hidden rounded-lg">
        <img src={src} alt={prompt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
            <p className="text-white text-sm font-medium line-clamp-2">{prompt}</p>
        </div>
    </div>
);


const TextToImagePage: React.FC = () => {
    const [prompt, setPrompt] = useState('A serene landscape with mountains at sunset, highly detailed, 4k');
    const [aspectRatio, setAspectRatio] = useState('16:9');

    const generatedImages = [
        { id: 1, src: 'https://picsum.photos/seed/fashion1/500/800', prompt: 'Sunset over a river valley with vibrant colors.' },
        { id: 2, src: 'https://picsum.photos/seed/fashion2/500/800', prompt: 'Golden hour light on a calm lake.' },
        { id: 3, src: 'https://picsum.photos/seed/fashion3/500/800', prompt: 'Sun setting behind a silhouetted mountain range.' },
    ];
    
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-gray-900">Text to Image Studio</h1>
                <p className="text-md text-gray-500 mt-1">Bring your creative visions to life with the power of AI.</p>
            </header>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                    <img src="https://picsum.photos/seed/avatar/40/40" alt="User Avatar" className="w-10 h-10 rounded-full"/>
                    <div className="flex-1">
                        <p className="font-semibold">Product Designer</p>
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Describe your image..."
                            className="w-full h-24 mt-2 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition"
                        />
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                        <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                        <select id="model" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black focus:border-black">
                            <option>qloset Diffusion v2.1</option>
                            <option>Stable Diffusion XL</option>
                            <option>DALL-E 3</option>
                        </select>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Aspect ratio</label>
                        <div className="flex space-x-2">
                           <AspectRatioButton value="1:1" selected={aspectRatio === '1:1'} onClick={setAspectRatio} />
                           <AspectRatioButton value="16:9" selected={aspectRatio === '16:9'} onClick={setAspectRatio} />
                           <AspectRatioButton value="9:16" selected={aspectRatio === '9:16'} onClick={setAspectRatio} />
                           <AspectRatioButton value="4:3" selected={aspectRatio === '4:3'} onClick={setAspectRatio} />
                           <AspectRatioButton value="3:2" selected={aspectRatio === '3:2'} onClick={setAspectRatio} />
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {generatedImages.map(img => (
                        <GeneratedImageCard key={img.id} src={img.src} prompt={img.prompt} />
                    ))}
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                         {/* Other action buttons can go here */}
                    </div>
                    <button className="w-full sm:w-auto bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                        Generate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TextToImagePage;
