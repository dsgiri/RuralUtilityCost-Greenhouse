import React from 'react';
import { Link } from 'react-router-dom';
import { SearchX, ArrowLeft } from 'lucide-react';
import { SEO } from '@/components/SEO';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist." 
        canonicalUrl="https://greenhouse.ruralutilitycost.com/404" 
      />
      <div className="bg-slate-100 p-6 rounded-full mb-6">
        <SearchX className="w-12 h-12 text-slate-400" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 text-center">Page Not Found</h1>
      <p className="text-lg text-slate-600 mb-8 max-w-lg text-center">
        Sorry, we couldn't find the page you're looking for. It might have been moved, or the URL might be incorrect.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Link>
    </div>
  );
}
