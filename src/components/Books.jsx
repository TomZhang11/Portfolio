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
            description: 'Crime and Punishment is a novel by Fyodor Dostoevsky that is regarded as one of the greatest\
            of world literature. The book does not so much explore the legal consequences of crime, but the psychology\
            of a person after they commit a murder. The main character Ruskonikov is split between two personalities. \
            A part of him is innocent, and shows sympathy and love to others. The other part belives that, "extraordinary\
            men can trespass the accepted moral standards for the common good with a clean conscience, while ordinary\
            men blindly follow societal norms and conventions like sheep." Ruskonikov decides to put his ideas into practice,\
            after hearing about a wicked and greedy old pawn broker that takes advantage of everyone. He decides to murder\
            her, because society would be better off without her. Metaphorically, Ruskonikov kills a part of himself, the\
            part that is innocent. After the murder, he does not gain peace, instead, he is tormented by his own conscience.\
            He is not the extraordinary man he thought he is. Eventually, he confesses to his crime, but he still does not\
            consider what he did as a sin. Therefore, he does not gain redemption. Redemption can only be obtained through\
            a relationship with a higher self, with God. This is the job of the religious life. Paradoxically, we can only\
            become ourselves by surrendering to a higher self. Ruskonikov was sentenced to penal servitude in Siberia. At\
            first, he refused to repent, as he considered it unfair that he was sent to prison for killing a useless and\
            cynical old woman. There were even a genuine distrust and hostility between him and the rest of the inmates\
            because he considered them unsophisticated fools and were inferior to him. Ruskonikov had a dream of a virus,\
            which causes its victims to think that they are the sole possessors of truth. However, this does not lead to\
            freedom. People try to impose their views on others, and society tears apart. Without religion to provide an\
            objective view of morality, it is the strongest who imposes their views on everyone. A part of the reason why\
            dictators like Hilter, Stalin, and Mao Zedong could succeed is because of the atheism at their time. In the\
            end, through harsh labor and a wounded pride, Ruskonikov finally lets go. He lets go of his wounded pride and\
            resurrects himself. He still had 7 years of imprisonment ahead of him, but he looked at the 7 years as if it\
            was 7 days. He saw the future with infinite happiness despite the terrible suffering ahead of him.\nIn the past,\
            a part of me had characteristics of Ruskonikov. This novel allowed me to explore myself, and pointed to a way\
            for me to transform myself.'
        },
        {
            title: "Notes from Underground",
            description: 'In Notes from Underground, Dostoevsky portrays a dark and unsympathetic character, the nameless\
            protagonist "Underground Man". The Underground Man is a bitter, spiteful, and self-hating retired 40 years old\
            civil servant who is rude and intimadating. He describes listening to others through the cracks under the\
            floor, as if he is a mouse. His inability to interact with others causes his attempts to socialize to end in\
            diaster, driving him deeper underground, until he is completely isolated from the world. "I am a sick man. I\
            am a spiteful man. I am an unattractive man. I believe my liver is diseased. I refuse to consult a doctor from\
            spite. That you probably will not understand. My liver is bad. Well, let it get worse!" These are the words\
            of the Underground Man. Out of pure boredom, the Underground Man has created a hell for himself, and for others\
            around him. He destroys and betrays himself, for nothing. Why does Dostoevsky portray such a dark character? To warn us of utopia: the Underground Man writes,\
            "man is by no means a rational animal, but innately irrational and destructive. The best definition of a man\
            is the ungrateful biped. He would sacrifice all his happiness, wealth, health, or security, just to choose\
            for himself in order to preserve his individuality. Shower upon men every Earthly blessing, crown him in a\
            sea of happiness, give him economic prosperity such that he has nothing else to do other than sleep, eat cake\
            and reproduce. Then even out of shear ingratitude, shear spite, men would play you some nasty tricks, simply\
            in order to prove, as though that is so neccessary, that he is still a man, and not a piano key." Life is not\
            a mathmatical formula, or problem to be solved, but a journey to be experienced. If we could access the perfect\
            formula for happiness so that everything would be clearly calculated and explained, then choices would cease\
            to exist, and men would act against reason, in order to prove our "free will". This is our deep craving for\
            self-expression. Men love to create and build, but also love chaos and destruction. Perhaps it is because he\
            is instinctively afraid of attaining his goal, and only loves looking at it from a distance. "Thinking about a world without suffering will only sink us further into\
            suffering, for happiness cannot exist without suffering." It is our capacity to endure suffering that makes\
            us truly great. We learn from Dostoevsky that we should always put our own existential condition first, and\
            not the ideas others tell us to believe. To adjust our live views as we ourselves experience life. To beware\
            of utopias that seduce us and lead us astray. To see suffering as a compliment to happiness, and to focus\
            on our relationship with our deepest self, with God.'
        },
        {
            title: "12 Rules for Life",
            description: "12 Rules for Life by Jordan Peterson is a book that combines psychology, mythology, and religion\
            to give us practice advice to live a responsible and meaningful life. It analyzes the human psychology to help\
            explain our actions. It also uses anecdotes and narratives and make the book more interesting, and to help us\
            understand and remember the rules better.\nThis book was a starting point for me to learn more about interesting\
            psychology, religion, and philosophy."
        },
        {
            title: "Tao Te Ching",
            description: 'Tao Te Ching by Lao Tzu is one of the most influtential philosophy books in the world. Tao translates\
            to "Way of the World". Lao Tzu urges us to live in harmony with the Tao. To do so, we must let go of our desires.\
            When we have desires, we will act unnaturally, upsetting the natural balance of the Tao. Tao Te Ching does not\
            give a list of virtues, but rather that virtues, such as generosity, humility, and kindness, will come naturally\
            when living in accordance with the Tao. "Having without possessing, acting with no expectations, leading and\
            not trying to control, this is the supreme virtue."\nTao Te Ching tells us that happiness comes from within, "if you believe\
            you have enough, you will be truly rich. The Master has no possessions. The more he does for others, the happier\
            he is. The more he gives to others, the wealthier he is."\nTao Te Ching has many parallels with other religious\
            texts, such as the Bible and the Quran. For example, all of them tell us to not hold on to and get attached\
            with possessions. I have a feeling that ultimately, they are all trying to say the same thing. It\'s just that they have different\
            ways of understanding and articulating ideas.'
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
                    In the past, most people can't easily access books. The difference between the information era and the
                    past is that we now have too much information. So the question lies within how to filter out garbage
                    information. Try to read books that are either written by established people, or proven by experience.
                    Books like the Bible and Tao Te Ching are proven by thousands of years of experience. They would have
                    ceased to exist at some point in history if they have not true worth. Except when learning the latest
                    technology, then you would want to have the latest information. Here are some books that I have read:
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