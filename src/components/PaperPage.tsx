
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';

const PaperPage = () => {
  const { id } = useParams<{ id: string }>();
  const paper = portfolioConfig.academicPapers.papers.find(p => p.id === id);

  if (!paper) {
    return (
      <div className="min-h-screen bg-[#F7E8D6] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-[#333446] mb-4">Paper Not Found</h1>
          <Link to="/" className="text-[#7F8CAA] hover:text-[#333446] transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7E8D6]">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#7F8CAA] hover:text-[#333446] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <article className="glass-effect rounded-3xl p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-light text-[#333446] mb-4 leading-tight">
              {paper.title}
            </h1>
            
            <div className="space-y-2 mb-6 text-[#7F8CAA]">
              <p className="text-lg">{paper.authors}</p>
              <p>{paper.journal}, {paper.year}</p>
            </div>
            
            <div className="flex gap-4 mb-8">
              <a 
                href={paper.pdfUrl} 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#333446] text-white rounded-full hover:bg-[#7F8CAA] transition-colors"
                download
              >
                <Download size={16} />
                Download PDF
              </a>
              <a 
                href={paper.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#333446] text-[#333446] rounded-full hover:bg-[#333446] hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
                View PDF
              </a>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-[#7F8CAA] to-[#B8CFCE]"></div>
          </div>
          
          <div 
            className="prose prose-lg max-w-none text-[#7F8CAA] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: paper.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default PaperPage;
