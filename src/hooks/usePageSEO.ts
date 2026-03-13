import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const usePageSEO = ({ title, description, canonical }: PageSEOProps) => {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", description);
      document.head.appendChild(metaDesc);
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (link) {
        link.href = canonical;
      } else {
        link = document.createElement("link");
        link.rel = "canonical";
        link.href = canonical;
        document.head.appendChild(link);
      }
    }

    // Update OG tags
    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (el) {
        el.setAttribute("content", content);
      }
    };
    setMeta("og:title", title);
    setMeta("og:description", description);
    if (canonical) setMeta("og:url", canonical);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [title, description, canonical]);
};

export default usePageSEO;
