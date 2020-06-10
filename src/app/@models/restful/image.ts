
export interface Derivatives {
  desktop: string;
  mobile: string;
}

export interface Image {
  title: string;
  alt: string;
  credits?: any;
  description?: any;
  url: string;
  derivatives: Derivatives;
}
