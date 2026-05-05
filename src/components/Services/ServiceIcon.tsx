type ServiceIconProps = {
  name: string;
};

export function ServiceIcon({ name }: ServiceIconProps) {
  const commonProps = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
  };

  switch (name) {
    case 'battery':
      return (
        <svg {...commonProps}>
          <path d="M4 8h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M20 11h2v4h-2M7 13h4M9 11v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'alternator':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 5V3m0 18v-2M5 12H3m18 0h-2m-2-5 1.5-1.5M5.5 18.5 7 17m10 0 1.5 1.5M5.5 5.5 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'starter':
      return (
        <svg {...commonProps}>
          <path d="M4 14h9a4 4 0 1 0 0-8H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4 10h8M4 18h9m-7-4v4m9-8h4l2 2-2 2h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'light':
      return (
        <svg {...commonProps}>
          <path d="M4 12c0-4 3-7 7-7h3v14h-3c-4 0-7-3-7-7Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M16 8h5m-5 4h6m-6 4h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <path d="M5 8h14M7 16h10M8 8l2-3h4l2 3M9 16l-1 3m7-3 1 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8" cy="12" r="1.3" fill="currentColor" />
          <circle cx="16" cy="12" r="1.3" fill="currentColor" />
        </svg>
      );
  }
}
