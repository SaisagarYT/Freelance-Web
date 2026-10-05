import React from "react";

export const FlutterLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M14.28 2.1L3.7 12.68l3.18 3.18L17.46 5.28z" fill="#02569B" />
    <path d="M14.28 15.86l-4.78 4.78 3.18 3.18 7.96-7.96z" fill="#0175C2" />
    <path d="M9.5 20.64l4.78-4.78 4.78 4.78-4.78 4.78z" fill="#29B6F6" />
  </svg>
);

export const FirebaseLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4.3 16.5L6.8 2.8c.1-.4.6-.6.9-.3l3.6 6.8z" fill="#FFA000" />
    <path d="M4.3 16.5L1.8 12.1c-.2-.4.1-.9.6-.9.2 0 .4.1.5.2l1.4 5.1z" fill="#F57C00" />
    <path d="M12.1 22.8l7.6-6.3-4.3-13.6c-.1-.4-.6-.6-.9-.3L4.3 16.5z" fill="#FFCA28" />
    <path d="M12.1 22.8L1.8 12.1l2.5 4.4z" fill="#FFA000" />
  </svg>
);

export const NextjsLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 17.51l-5.63-7.51v7.51h-1.63V7.24h1.63l5.63 7.51V7.24h1.63v10.27h-1.63z" />
  </svg>
);

export const VercelLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L24 22H0L12 1Z" />
  </svg>
);

export const TypeScriptLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M11.5 11h-3v8h-2v-8h-3V9h8v2zm7 3.5c0 2.5-1.5 4.5-4 4.5-1.5 0-2.8-.8-3.4-2l1.7-1c.4.8 1 1.2 1.8 1.2 1.1 0 1.8-.7 1.8-1.7 0-1-.8-1.4-2.2-2-1.9-.8-3-1.6-3-3.3 0-2.2 1.6-3.7 3.8-3.7 1.4 0 2.5.6 3.1 1.6l-1.6 1.1c-.4-.6-.9-.9-1.5-.9-.9 0-1.6.6-1.6 1.5 0 .9.6 1.3 2 1.8 2 .8 3.2 1.6 3.2 3.9z" fill="#FFFFFF" />
  </svg>
);

export const SupabaseLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M13.4 22.8c-.8.9-2.2.3-2.2-1V12.7h8.1c1.3 0 2 .1.4 1.8l-7.3 8.3z" fill="#3ECF8E" />
    <path d="M10.6 1.2c.8-.9 2.2-.3 2.2 1v9.1H4.7c-1.3 0-2-.1-.4-1.8l6.3-8.3z" fill="#3ECF8E" fillOpacity="0.75" />
  </svg>
);

export const DockerLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
    <path d="M13.9 8.2h2v2h-2zm-2.5 0h2v2h-2zm-2.5 0h2v2h-2zm-2.5 0h2v2h-2zm7.5-2.5h2v2h-2zm-2.5 0h2v2h-2zm-2.5 0h2v2h-2zm7.5 5h2v2h-2zm-2.5 0h2v2h-2zm-2.5 0h2v2h-2zm-2.5 0h2v2h-2zm-2.5 0h2v2h-2zM23.9 12c-.4-.3-1.4-.4-2.2.1-.2-.8-.8-1.5-1.7-1.8-.4-.2-1.2-.2-1.8.1-.1-1.3-.8-2.6-2.2-3.3-.3-.2-.7-.3-1.1-.3l-.4.3c-.2.2-.3.6-.2 1 .3 1.1.2 2.2-.3 3.1-.4.8-1 1.4-1.8 1.8H1.2C.5 13 0 13.6 0 14.3c.3 3.5 2.7 6.4 6 7.4 3.7 1.1 7.7.8 11.2-.8 3.1-1.4 5.3-4.2 5.9-7.5.4-.3.9-.8.8-1.4z" />
  </svg>
);

export const StripeLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#635BFF">
    <path d="M13.976 9.15c0-1.072-.888-1.528-2.316-1.528-2.074 0-4.664.832-6.528 2.036V4.116c2.08-.852 4.444-1.256 6.744-1.256 5.56 0 9.296 2.832 9.296 7.828 0 7.708-10.596 6.476-10.596 9.8 0 1.28 1.124 1.764 2.824 1.764 2.508 0 5.436-1.144 7.42-2.512v5.62c-2.348 1.052-5.068 1.58-7.788 1.58-5.836 0-9.748-2.884-9.748-7.9 0-8.28 10.692-6.852 10.692-9.89z" />
  </svg>
);

export const AwsLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M18.8 17.5c-2.7 2-6.8 3.1-10.2 3.1-4.8 0-9.2-1.8-12.5-4.8-.3-.3 0-.6.3-.4 3.5 2 7.7 3.2 12.2 3.2 3 0 6.6-.8 9.8-2.4.5-.3.8.3.4.7z" fill="#FF9900" />
    <path d="M19.9 15.8c-.3-.4-2.2-.8-3.3-.6-.3 0-.4-.3-.1-.5 1.7-.9 4.4-.7 4.7-.3.3.4-.1 3.1-1.7 4.2-.3.2-.5 0-.4-.3.3-1 .8-2.2.8-2.5z" fill="#FF9900" />
    <path d="M7.4 6.8c-.8 0-1.4.3-1.8.8l-.1-.7H4.1v7.6h1.6V9.8c.2-.9.8-1.5 1.6-1.5.8 0 1.2.5 1.2 1.4v4.8h1.6V9.4c0-1.7-.9-2.6-2.7-2.6z" fill="#232F3E" />
    <path d="M13.8 6.8c-2 0-3.3 1.4-3.3 3.9 0 2.4 1.3 3.9 3.3 3.9 2 0 3.3-1.4 3.3-3.9 0-2.5-1.3-3.9-3.3-3.9zm0 6.3c-1.1 0-1.7-.9-1.7-2.4 0-1.5.6-2.4 1.7-2.4 1.1 0 1.7.9 1.7 2.4 0 1.5-.6 2.4-1.7 2.4z" fill="#232F3E" />
  </svg>
);

export const RedisLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#DC382D">
    <path d="M21.5 5.5l-9.5-5-9.5 5v13l9.5 5 9.5-5v-13zm-9.5-3.2l6.8 3.6-6.8 3.6-6.8-3.6 6.8-3.6zm-8 14.5v-9.5l7 3.7v9.5l-7-3.7zm9 3.7v-9.5l7-3.7v9.5l-7 3.7z" />
  </svg>
);

export const TailwindLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#06B6D4">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

export const ReactLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
  </svg>
);
