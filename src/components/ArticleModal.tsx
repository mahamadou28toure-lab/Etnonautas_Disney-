import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { BlogArticleItem } from '../data/siteContent';
import { EditorialImage } from './EditorialImage';

interface ArticleModalProps {
  article: BlogArticleItem | null;
  onClose: () => void;
  onSelectPlanFromArticle: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onSelectPlanFromArticle,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (article) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#162038]/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-article-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-[#162038]/12 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-[#1E3264]/10">
          <div className="flex items-center gap-2 text-xs text-[#42506B]">
            <span className="font-semibold text-[#EB539F]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishDate}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar lectura de artículo"
            className="btn-logo-secondary w-9 h-9 p-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-10 space-y-8">
          <div className="space-y-4">
            <p className="text-xs text-[#EB539F]">{article.markerNote}</p>
            <h2
              id="modal-article-title"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#1E3264] leading-tight"
            >
              {article.title}
            </h2>
            <p className="text-base text-[#42506B] leading-relaxed">{article.excerpt}</p>
          </div>

          <EditorialImage
            src={article.imagePath}
            alt={article.imageAlt}
            containerClassName="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#EBF3FC]"
            className="w-full h-full object-cover"
          />

          <div className="p-6 rounded-xl bg-[#F2EEFA]/70 border border-[#1E3264]/10 space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#1E3264]">
              Puntos clave de esta guía
            </h3>
            <ul className="space-y-2 text-sm text-[#1E3264]">
              {article.keyTakeaways.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-xs font-semibold text-[#EB539F] mt-0.5 tabular-nums">
                    0{index + 1}.
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {article.fullContentSections.map((sec, idx) => (
              <div key={idx} className="space-y-2 border-b border-[#1E3264]/8 pb-6 last:border-b-0">
                <h3 className="font-serif text-2xl font-semibold text-[#1E3264]">
                  {sec.heading}
                </h3>
                <p className="text-base text-[#42506B] leading-relaxed">{sec.body}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1E3264]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-serif text-xl font-semibold text-[#1E3264]">
                ¿Quieres que apliquemos esta estrategia a las fechas de tu viaje?
              </p>
              <p className="text-sm text-[#42506B]">
                Diseñamos tu ruta personalizada con horarios y reservas adaptadas a tu familia.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectPlanFromArticle();
              }}
              className="btn-logo-primary px-6 py-3 text-sm font-semibold shrink-0"
            >
              <span>Ver planes de planificación</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
