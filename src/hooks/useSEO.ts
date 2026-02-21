import { useEffect } from 'react';

interface SEOMetaData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonical?: string;
}

export const useSEO = (metadata: SEOMetaData) => {
  useEffect(() => {
    // Update title
    document.title = metadata.title;

    // Update or create meta tags
    const updateOrCreateMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Update standard meta tags
    updateOrCreateMeta('description', metadata.description);
    
    if (metadata.keywords) {
      updateOrCreateMeta('keywords', metadata.keywords);
    }

    // Update Open Graph tags
    updateOrCreateMeta('og:title', metadata.title, true);
    updateOrCreateMeta('og:description', metadata.description, true);
    
    if (metadata.ogImage) {
      updateOrCreateMeta('og:image', metadata.ogImage, true);
    }
    
    if (metadata.ogUrl) {
      updateOrCreateMeta('og:url', metadata.ogUrl, true);
    }

    // Update Twitter Card tags
    if (metadata.twitterCard) {
      updateOrCreateMeta('twitter:card', metadata.twitterCard);
    }
    updateOrCreateMeta('twitter:title', metadata.title);
    updateOrCreateMeta('twitter:description', metadata.description);

    // Update canonical URL
    if (metadata.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = metadata.canonical;
    }

    // Return cleanup if needed
    return () => {
      // Optional: cleanup on unmount
    };
  }, [metadata]);
};

export default useSEO;
