import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Minimize2, MapPin, Info, Sparkles } from 'lucide-react';
import { PaintingHotspot, UiLanguage } from './types';
import { PAINTING_INFO } from './data';
import { sounds } from './sound';

interface PaintingViewerProps {
  hotspots?: PaintingHotspot[];
  selectedHotspotId?: string | null;
  onSelectHotspot?: (hotspot: PaintingHotspot) => void;
  onCanvasClick?: (xPercent: number, yPercent: number) => void;
  highlightTarget?: { x: number; y: number; radius: number; isSuccess?: boolean } | null;
  focusPoint?: { x: number; y: number; zoom?: number } | null;
  uiLang?: UiLanguage;
  showCaption?: boolean;
  minHeight?: string;
  allowPanZoom?: boolean;
}

export const PaintingViewer: React.FC<PaintingViewerProps> = ({
  hotspots = [],
  selectedHotspotId = null,
  onSelectHotspot,
  onCanvasClick,
  highlightTarget = null,
  focusPoint = null,
  uiLang = 'es',
  showCaption = true,
  minHeight = 'min-h-[420px] sm:min-h-[540px]',
  allowPanZoom = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>(PAINTING_INFO.primaryImage);
  const [loadError, setLoadError] = useState<boolean>(false);

  // Handle focusPoint changes smoothly
  useEffect(() => {
    if (focusPoint && containerRef.current) {
      const targetZoom = focusPoint.zoom || 2.2;
      setScale(targetZoom);
      // Center on focus coordinates (percentages)
      // Percentage 0-100 to center offset
      const xOffset = -(focusPoint.x - 50) * 8 * (targetZoom / 2);
      const yOffset = -(focusPoint.y - 50) * 6 * (targetZoom / 2);
      setPosition({ x: xOffset, y: yOffset });
    }
  }, [focusPoint]);

  const handleZoomIn = () => {
    sounds.playClick();
    setScale(prev => Math.min(prev + 0.5, 4.5));
  };

  const handleZoomOut = () => {
    sounds.playClick();
    setScale(prev => Math.max(prev - 0.5, 1));
    if (scale <= 1.5) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleReset = () => {
    sounds.playClick();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const toggleFullscreen = () => {
    sounds.playClick();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!allowPanZoom || scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    if (!allowPanZoom) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setScale(prev => {
      const next = Math.max(1, Math.min(prev + delta, 4.5));
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  // Touch handlers
  const touchStartRef = useRef<{ x: number; y: number; dist?: number }>({ x: 0, y: 0 });

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && scale > 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      };
      setIsDragging(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      setPosition({
        x: e.touches[0].clientX - touchStartRef.current.x,
        y: e.touches[0].clientY - touchStartRef.current.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Click on image coordinate calculator
  const handleImageAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (
      clientX >= rect.left &&
      clientX <= rect.right &&
      clientY >= rect.top &&
      clientY <= rect.bottom
    ) {
      const xPercent = ((clientX - rect.left) / rect.width) * 100;
      const yPercent = ((clientY - rect.top) / rect.height) * 100;
      if (onCanvasClick) {
        onCanvasClick(xPercent, yPercent);
      }
    }
  };

  const handleImageError = () => {
    if (imageSrc === PAINTING_INFO.primaryImage) {
      // Try fallback to Wikimedia directly
      setImageSrc(PAINTING_INFO.fallbackImage);
    } else {
      setLoadError(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl overflow-hidden bg-neutral-950 border border-amber-900/40 shadow-2xl flex flex-col ${minHeight} select-none`}
    >
      {/* Top Floating Control Bar */}
      {allowPanZoom && (
        <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 p-1.5 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-amber-900/50 shadow-xl">
          <button
            type="button"
            onClick={handleZoomIn}
            title="Aumentar zoom (+)"
            className="p-2 rounded-lg bg-neutral-900/80 hover:bg-amber-600 text-amber-200 hover:text-white transition-all cursor-pointer"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            title="Disminuir zoom (-)"
            className="p-2 rounded-lg bg-neutral-900/80 hover:bg-amber-600 text-amber-200 hover:text-white transition-all cursor-pointer"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleReset}
            title="Restablecer tamaño (100%)"
            className="p-2 rounded-lg bg-neutral-900/80 hover:bg-amber-600 text-amber-200 hover:text-white transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <div className="w-[1px] h-5 bg-amber-900/60 mx-0.5" />
          <button
            type="button"
            onClick={toggleFullscreen}
            title="Pantalla completa"
            className="p-2 rounded-lg bg-neutral-900/80 hover:bg-amber-600 text-amber-200 hover:text-white transition-all cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* Zoom level indicator */}
      {scale > 1 && (
        <div className="absolute top-3 left-3 z-30 px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-amber-800/40 text-xs font-semibold text-amber-300">
          Zoom: {Math.round(scale * 100)}%
        </div>
      )}

      {/* Main Interactive Stage */}
      <div
        className="relative flex-1 w-full overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing bg-[#0d0707]"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={handleImageAreaClick}
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.25s ease-out'
          }}
          className="relative inline-block max-w-full"
        >
          {/* Real Original Painting */}
          <img
            ref={imgRef}
            src={imageSrc}
            alt="Karl Briullov — El último día de Pompeya, 1833"
            onLoad={() => setImageLoaded(true)}
            onError={handleImageError}
            draggable={false}
            className={`w-full max-h-[75vh] object-contain transition-opacity duration-500 shadow-2xl ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Fallback & Error State if image could not load */}
          {loadError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-red-950/90 text-amber-100 text-center">
              <Info className="w-10 h-10 text-amber-400 mb-3" />
              <p className="font-semibold text-lg">No se pudo cargar la imagen desde la red.</p>
              <p className="text-sm text-neutral-300 mt-1 max-w-md">
                Por favor, comprueba tu conexión a internet o visita Wikimedia Commons:
              </p>
              <a
                href={PAINTING_INFO.wikimediaOriginalUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-black font-bold text-sm transition-colors"
              >
                Abrir pintura en Wikimedia Commons
              </a>
            </div>
          )}

          {/* Interactive Hotspot Pins Overlay */}
          {imageLoaded &&
            hotspots.map(hotspot => {
              const isSelected = selectedHotspotId === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    sounds.playClick();
                    if (onSelectHotspot) onSelectHotspot(hotspot);
                  }}
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  title={hotspot.name.es}
                  className={`absolute z-20 group p-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-amber-400 text-black ring-4 ring-amber-300/80 scale-125 shadow-lg shadow-amber-500/60'
                      : 'bg-red-700/90 text-amber-200 hover:bg-amber-500 hover:text-black hover:scale-110 shadow-md ring-2 ring-amber-400/60 hotspot-pulse'
                  }`}
                >
                  <MapPin className="w-4 h-4 fill-current" />

                  {/* Tooltip on hover */}
                  <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block whitespace-nowrap px-2.5 py-1 rounded-md bg-neutral-950/95 border border-amber-500/50 text-[11px] font-semibold text-amber-100 shadow-xl z-30">
                    {uiLang === 'hy'
                      ? hotspot.name.hy
                      : uiLang === 'ru' && hotspot.name.ru
                      ? hotspot.name.ru
                      : hotspot.name.es}
                  </div>
                </button>
              );
            })}

          {/* "Encuentra en el cuadro" Target Highlight Circle / Feedback */}
          {highlightTarget && (
            <div
              style={{
                left: `${highlightTarget.x}%`,
                top: `${highlightTarget.y}%`,
                width: `${Math.max(highlightTarget.radius * 2, 8)}%`,
                height: `${Math.max(highlightTarget.radius * 2.8, 10)}%`,
                transform: 'translate(-50%, -50%)'
              }}
              className={`absolute pointer-events-none rounded-full border-4 transition-all duration-500 animate-ping z-30 ${
                highlightTarget.isSuccess
                  ? 'border-emerald-400 bg-emerald-500/30 ring-8 ring-emerald-400/50'
                  : 'border-red-500 bg-red-500/20'
              }`}
            />
          )}

          {highlightTarget?.isSuccess && (
            <div
              style={{
                left: `${highlightTarget.x}%`,
                top: `${highlightTarget.y}%`,
                transform: 'translate(-50%, -130%)'
              }}
              className="absolute pointer-events-none z-40 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-sm shadow-xl flex items-center gap-1.5 animate-bounce"
            >
              <Sparkles className="w-4 h-4" />
              ¡Correcto! +10
            </div>
          )}
        </div>
      </div>

      {/* Bottom Museum Caption Bar */}
      {showCaption && (
        <div className="bg-gradient-to-r from-stone-950 via-red-950/80 to-stone-950 border-t border-amber-900/40 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            <span className="font-display font-bold text-amber-200 tracking-wide text-sm sm:text-base">
              Karl Briullov — El último día de Pompeya, 1833
            </span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400 text-xs">
            <span className="hidden md:inline px-2 py-0.5 rounded bg-black/40 border border-amber-950">
              456.5 × 651 cm
            </span>
            <span className="px-2 py-0.5 rounded bg-black/40 border border-amber-950 text-amber-300">
              Museo Estatal Ruso
            </span>
            <a
              href={PAINTING_INFO.wikimediaOriginalUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-300 underline transition-colors"
            >
              Wikimedia Commons
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
