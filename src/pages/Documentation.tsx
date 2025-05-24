import React from 'react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background text-gray-900">
      <header className="container mx-auto px-4 py-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold">Design System Documentation</h1>
        <p className="text-muted-foreground">Explore the design system, atomic design principles, and platform usage instructions.</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Design System</h2>
          <p className="text-muted-foreground">Learn about the typography, color palette, and components used in the platform.</p>
          <a href="/DESIGN_SYSTEM.md" target="_blank" className="text-saas-primary hover:underline">View Design System</a>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Atomic Design System</h2>
          <p className="text-muted-foreground">Understand the atomic design principles and component hierarchy.</p>
          <a href="/ATOMIC_DESIGN_SYSTEM.md" target="_blank" className="text-saas-primary hover:underline">View Atomic Design System</a>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Platform Usage</h2>
          <p className="text-muted-foreground">Get started with the platform and explore its features.</p>
          <a href="/README.md" target="_blank" className="text-saas-primary hover:underline">View Platform Documentation</a>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 border-t border-gray-200 text-center">
        <p className="text-sm text-muted-foreground">© 2025 One Parivaar. All rights reserved.</p>
        <Link to="/" className="text-saas-primary hover:underline">Back to Home</Link>
      </footer>
    </div>
  );
};

export default Documentation;
