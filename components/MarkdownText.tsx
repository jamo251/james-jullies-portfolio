import React from 'react';

export const MarkdownText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
    if (!text) return null;

    const parts = text.split(/(\*\*.*?\*\*)/g);

    return (
        <span className={className}>
            {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="font-bold text-white">{part.slice(2, -2)}</strong>;
                }
                return <React.Fragment key={i}>{part}</React.Fragment>;
            })}
        </span>
    );
};
