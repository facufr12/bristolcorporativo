import React from 'react';

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, description, children }) => {
  return (
    <section className="mb-12 scroll-mt-8">
      <div className="mb-6 border-b border-secondary-200 pb-4">
        <h2 className="text-3xl font-bold text-secondary-900 tracking-tight">{title}</h2>
        {description && (
          <p className="mt-2 text-lg text-secondary-500">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
};