import { useSeo } from './useSeo';

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

/** Декларативна обгортка над useSeo для використання прямо в JSX */
const Seo: React.FC<SeoProps> = (props) => {
  useSeo(props);
  return null;
};

export default Seo;
