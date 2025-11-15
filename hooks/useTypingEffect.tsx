import React, { useState, useEffect, useMemo } from 'react';

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 2000; // Pause after typing before deleting

const parseQuote = (text: string): React.ReactNode => {
    // Splits the string by the delimiter *word*, keeping the delimiters
    const parts = text.split(/(\*.*?\*)/g).filter(part => part.length > 0);

    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith('*') && part.endsWith('*')) {
                    return (
                        <span key={index} className="text-[var(--primary-color)] not-italic font-normal">
                            {part.substring(1, part.length - 1)}
                        </span>
                    );
                }
                return part;
            })}
        </>
    );
};

/**
 * A custom hook to create a typing, pausing, and deleting animation effect for an array of strings.
 * @param quotes - An array of strings to cycle through. Use *word* to highlight a word.
 * @returns A React.ReactNode containing the animated text with styled highlights.
 */
export const useTypingEffect = (quotes: string[]) => {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fullQuote = quotes[quoteIndex];

        const handleTyping = () => {
            if (isDeleting) {
                // Handle deleting
                if (typedText.length > 0) {
                    setTypedText(fullQuote.substring(0, typedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
                }
            } else {
                // Handle typing
                if (typedText.length < fullQuote.length) {
                    setTypedText(fullQuote.substring(0, typedText.length + 1));
                } else {
                    // Once fully typed, pause, then start deleting
                    const pauseTimeout = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
                    return () => clearTimeout(pauseTimeout);
                }
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);

        return () => clearTimeout(typingTimeout);
    }, [typedText, isDeleting, quoteIndex, quotes]);

    const displayText = useMemo(() => parseQuote(typedText), [typedText]);

    return displayText;
};
