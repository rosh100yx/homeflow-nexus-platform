import React from 'react';

const StyleGuide = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Style Guide</h1>

      {/* Typography */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Typography</h2>
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <p className="text-sm text-gray-500">Font size: 4xl, Font weight: bold</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Heading 2</h2>
            <p className="text-sm text-gray-500">Font size: 3xl, Font weight: semibold</p>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Heading 3</h3>
            <p className="text-sm text-gray-500">Font size: 2xl, Font weight: medium</p>
          </div>
          <div>
            <p className="text-base">Body Text</p>
            <p className="text-sm text-gray-500">Font size: base</p>
          </div>
          <div>
            <p className="text-sm">Caption</p>
            <p className="text-sm text-gray-500">Font size: sm</p>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto"></div>
            <p className="mt-2 text-sm">Primary</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto"></div>
            <p className="mt-2 text-sm">Accent</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto"></div>
            <p className="mt-2 text-sm">Secondary</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full mx-auto"></div>
            <p className="mt-2 text-sm">Error</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;