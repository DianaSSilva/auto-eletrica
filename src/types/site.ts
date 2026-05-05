export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type ContactInfo = {
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  address: string;
  email: string;
  businessHours: string[];
};

export type SocialLink = {
  label: string;
  href: string;
};
