
import React, { useState } from 'react';
import RouteForm, { RouteFormData } from '@/components/RouteForm';
import MapPlaceholder from '@/components/MapPlaceholder';

const Index = () => {
  const [routeData, setRouteData] = useState<RouteFormData | undefined>(undefined);

  const handleGetRoute = (formData: RouteFormData) => {
    console.log('Route Form Data:', formData);
    setRouteData(formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 md:px-8 border-b border-border/40">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="animate-in stagger-1">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h1 className="text-xl font-medium">RouteZenith</h1>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Intelligent route planning
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6 animate-in stagger-2">
              <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Routes
              </a>
              <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Insights
              </a>
              <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                Get Started
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow py-8 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-10 animate-in">
            <div className="text-sm font-medium text-primary inline-block px-3 py-1 rounded-full bg-primary/10 mb-3">
              Route Planner
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Plan your journey with precision
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Enter your route details below to get optimized directions based on your preferences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left side - Form */}
            <div className="md:sticky top-8">
              <RouteForm onSubmit={handleGetRoute} />
            </div>

            {/* Right side - Map */}
            <div className="h-[480px]">
              <MapPlaceholder routeData={routeData} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 md:px-8 border-t border-border/40">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground">
              © 2023 RouteZenith. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
