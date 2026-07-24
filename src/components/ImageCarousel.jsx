import { useState } from 'react';

// Crossfading media carousel; supports images and .mp4 video.
export const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const step = (delta) =>
        setCurrentIndex((prev) => (prev + delta + images.length) % images.length);

    return (
        <div className="relative w-full">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
                {images.map((media, index) =>
                    media.endsWith('.mp4') ? (
                        <video
                            key={media}
                            src={media}
                            controls
                            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
                                currentIndex === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                            }`}
                        />
                    ) : (
                        <img
                            key={media}
                            src={media}
                            alt={`Project screenshot ${index + 1}`}
                            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
                                currentIndex === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                            }`}
                        />
                    )
                )}
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={() => step(-1)}
                        aria-label="Previous image"
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-neutral-900/50 p-2 leading-none text-white transition-colors hover:bg-neutral-900/70"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => step(1)}
                        aria-label="Next image"
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-neutral-900/50 p-2 leading-none text-white transition-colors hover:bg-neutral-900/70"
                    >
                        →
                    </button>
                    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
                        {images.map((media, index) => (
                            <button
                                key={media}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`h-2 w-2 rounded-full transition-colors ${
                                    currentIndex === index ? 'bg-white' : 'bg-white/50'
                                }`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
