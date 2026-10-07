import React from 'react';

/**
 * Parses text containing markdown bold syntax (**term**)
 * and renders it with `font-semibold text-slate-100`.
 */
export function formatBoldText(text: string): React.ReactNode {
  if (!text || !text.includes('**')) {
    return text;
  }

  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-slate-100">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
