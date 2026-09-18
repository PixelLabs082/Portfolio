function LogoFrame({ size, background, children }) {
  return (
    <span
      className="grid shrink-0 place-items-center overflow-hidden rounded-[5px]"
      style={{ width: size, height: size, background }}
    >
      {children}
    </span>
  );
}

function GitHubLogo({ size }) {
  return (
    <LogoFrame size={size} background="#ffffff">
      <svg width={size - 4} height={size - 4} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#181717"
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </svg>
    </LogoFrame>
  );
}

function LinkedInLogo({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 overflow-hidden rounded-[5px]">
      <path
        fill="#0A66C2"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function LeetCodeLogo({ size }) {
  return (
    <LogoFrame size={size} background="#000000">
      <svg width={size - 4} height={size - 4} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#FFA116"
          d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.365 5.365 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
        />
      </svg>
    </LogoFrame>
  );
}

function GmailLogo({ size }) {
  return (
    <LogoFrame size={size} background="#ffffff">
      <svg width={size - 2} height={size - 2} viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#4CAF50" d="M45 16.2 40 18.95 35 23.7V40h7c1.657 0 3-1.343 3-3V16.2z" />
        <path fill="#1E88E5" d="M3 16.2 6.614 17.91 13 23.25V40H6c-1.657 0-3-1.343-3-3V16.2z" />
        <path fill="#E53935" d="M35 11.2 24 19.45 13 11.2 12 17l1 6.25 11 8.25 11-8.25 1-6.25z" />
        <path fill="#C62828" d="M3 12.298V16.2l10 7.05V11.2L9.876 8.726C9.132 8.223 8.228 8 7.298 8 4.619 8 3 9.619 3 12.298z" />
        <path fill="#EF5350" d="M45 12.298V16.2l-10 7.05V11.2l3.124-2.474C38.868 8.223 39.772 8 40.702 8 43.381 8 45 9.619 45 12.298z" />
      </svg>
    </LogoFrame>
  );
}

const logos = {
  GitHub: GitHubLogo,
  LinkedIn: LinkedInLogo,
  LeetCode: LeetCodeLogo,
  Email: GmailLogo,
};

export function SocialLogo({ name, size = 18 }) {
  const Logo = logos[name];
  if (!Logo) return null;
  return <Logo size={size} />;
}

export function SocialLink({ name, href, onClick, className = '', size = 18 }) {
  const external = !href.startsWith('mailto:');

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 transition-opacity hover:opacity-80 ${className}`}
    >
      <SocialLogo name={name} size={size} />
      <span>{name}</span>
    </a>
  );
}
