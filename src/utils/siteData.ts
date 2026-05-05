import type { ContactInfo, NavItem, Service, SocialLink } from '../types/site';

export const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export const services: Service[] = [

  {
    title: 'Alternadores',
    description: 'Componentes e suporte para manter o sistema de carga confiável.',
    icon: 'alternator',
  },

  {
    title: 'Motores de partida',
    description: 'Soluções para partidas rápidas e seguras no dia a dia.',
    icon: 'starter',
  },
  {
    title: 'Iluminação automotiva',
    description: 'Lâmpadas, faróis e acessórios para melhor visibilidade.',
    icon: 'light',
  },
  {
    title: 'Diagnóstico eletrônico',
    description: 'Identificação precisa de falhas elétricas e eletrônicas.',
    icon: 'diagnostic',
  },
  {
    title: 'Vendas de peças',
    description: 'Vendas de peças e acessorios em geral.',
    icon: 'peças',
  },
];

export const contactInfo: ContactInfo = {
  phone: '(38) 3531-5065',
  whatsapp: '553835315065',
  whatsappMessage: 'Olá! Gostaria de falar com a Auto Elétrica Lara.',
  address: 'Rua Campo Belo, 230 - Bairro Quinto do Ouro, Diamantina - MG',
  email: 'contato@laraautoeletrica.com.br',
  businessHours: ['Segunda a sexta: 8h às 18h', 'Sábado: 8h às 12h'],
};

export const socialLinks: SocialLink[] = [
  { label: '@laraautoeletrica', href: 'https://www.instagram.com/laraautoeletrica/' },
];
