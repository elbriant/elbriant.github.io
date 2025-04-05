export interface Project {
  name: string;
  subtitle: Map;
  imageRes: null | string;
  imageAlt: null | string;
  href: null | string;
  description: Map;
  technologies: Technology[] | null;
  customExtend: CustomExtend | null;
  available: boolean;
  featured: boolean;
  game: boolean;
}

export interface CustomExtend {
  width: number | null;
  height: number;
}

export interface Technology {
  name: string;
  codename: string;
  icon: string;
}
