import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  language?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'tsx' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-4 rounded-lg bg-secondary-900 overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-secondary-800 border-b border-secondary-700">
        <span className="text-xs font-mono text-secondary-300 uppercase">{language}</span>
        <button
          onClick={handleCopy}
          className="text-secondary-400 hover:text-white transition-colors"
          title="Copiar código"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-secondary-100 font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
};