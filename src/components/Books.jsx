import { useState } from 'react';

const Books = () => {
    // #a8a4b5 cloud white
    // #0d1721 shadow black
    // #faa289 sunset orange
    // #678d96 sky blue
    // #ffdaad light yellow
    const books = [
        {
            title: "Crime and Punishment",
            description: 'This is a story about a prideful young man who refuses to let go of his ego and decends into destruction'
        },
        {
            title: "Notes from Underground",
            description: 'This is a story about a spiteful middle aged man who goes into self destruction. It explores the irrational parts of the human psyche'
        },
        {
            title: "12 Rules for Life",
            description: 'It teaches people how to live responsibly and meaningfully'
        },
        {
            title: "Tao Te Ching",
            description: 'Tao Te Ching abstracts the idea of morality into "Tao", which is translated as "natural way of the world"./\
            Moral behavior comes naturally and effortlessly when one aligns oneself with the Tao'
        },
        // Add more books as needed
    ];

    const [expandedRows, setExpandedRows] = useState([]);
    const [expandedMobileIndices, setExpandedMobileIndices] = useState([]);

    const toggleExpand = (index) => {
        if (window.innerWidth < 768) {
            setExpandedMobileIndices(prev => {
                if (prev.includes(index)) {
                    return prev.filter(i => i !== index);
                }
                return [...prev, index];
            });
        } else {
            const rowIndex = Math.floor(index / 2);
            setExpandedRows(prev => {
                if (prev.includes(rowIndex)) {
                    return prev.filter(r => r !== rowIndex);
                }
                return [...prev, rowIndex];
            });
        }
    };

    const isExpanded = (index) => {
        if (window.innerWidth < 768) {
            return expandedMobileIndices.includes(index);
        }
        const rowIndex = Math.floor(index / 2);
        return expandedRows.includes(rowIndex);
    };

    return (
        <section id="books" className="px-4 py-10 max-w-7xl mx-auto text-center border-t-4 border-gray-300">
            <h2 className="text-3xl mb-6 font-semibold font-serif italic text-[#faa289]">Books</h2>
            
            <div className="mx-auto mb-6 max-w-6xl">
                <p className="text-lg text-[#0d1721] leading-relaxed">
                    Here are some books that I have read:
                </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none p-0 m-0">
                {books.map((book, index) => (
                    <li key={index} 
                        onClick={() => toggleExpand(index)}
                        className="bg-white p-6 rounded-lg shadow-md 
                        hover:shadow-xl hover:scale-102 hover:bg-gray-50
                        transform transition-all duration-300 ease-in-out
                        cursor-pointer"
                    >
                        <h3 className="text-xl font-serif italic text-[#678d96] mb-3">{book.title}</h3>
                        <p className={`text-gray-600 leading-relaxed overflow-hidden whitespace-pre-line
                            ${isExpanded(index) 
                                ? 'max-h-[2000px] transition-[max-height] duration-500 ease-in' 
                                : 'max-h-[4.5rem] transition-[max-height] duration-200 ease-out'
                            }`}
                        >
                            {book.description}
                        </p>
                        <button className="text-[#678d96] mt-2 text-sm italic hover:underline">
                            {isExpanded(index) ? 'Show less' : 'Read more'}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Books;