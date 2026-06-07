import { useEffect } from 'react';

const SITE_URL = 'https://www.amondrexcf.com';

type SeoOptions = {
  title: string;
  description: string;
  /** Шлях відносно кореня сайту, напр. "/pidtrimka/army" */
  path: string;
};

const setMetaByName = (name: string, content: string) => {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const setMetaByProperty = (property: string, content: string) => {
  let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

/** Оновлює title, description, canonical та OG/Twitter теги відповідно до поточної сторінки */
export const useSeo = ({ title, description, path }: SeoOptions) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;

    setMetaByName('description', description);
    setMetaByProperty('og:title', title);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', url);
    setMetaByName('twitter:title', title);
    setMetaByName('twitter:description', description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, path]);
};
