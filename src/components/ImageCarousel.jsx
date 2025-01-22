import { useState } from 'react';

export const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextImage = () => {
        setCurrentIndex(prev => prev >= images.length - 1 ? 0 : prev + 1);
    };
    
    const prevImage = () => {
        setCurrentIndex(prev => prev <= 0 ? images.length - 1 : prev - 1);
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-lg aspect-video">
                {images.map((media, index) => {
                    const isVideo = media.endsWith('.mp4');
                    return isVideo ? (
                        <video
                            key={index}
                            src={media}
                            controls
                            className={`absolute h-full object-contain transition-opacity duration-500
                                ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ) : (
                        <img
                            key={index}
                            src={media}
                            alt={`Project screenshot ${index + 1}`}
                            className={`absolute w-full h-full object-contain transition-opacity duration-500
                                ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                        />
                    );
                })}
            </div>
            
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                        →
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors
                                    ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}; 