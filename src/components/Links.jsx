const Links = ({ isDark, setIsDark }) => {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <button
        type="button"
        onClick={() => setIsDark((previousTheme) => !previousTheme)}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border transition-colors duration-500 ease-in-out ${
          isDark
            ? "border-zinc-800 bg-black text-white"
            : "border-zinc-300 bg-white text-zinc-950"
        }`}
      >
        <span
          className={`flex items-center justify-center transition-transform duration-500 ease-in-out ${
            isDark ? "rotate-0 scale-100" : "rotate-180 scale-95"
          }`}
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M12 3a6 6 0 1 0 9 9 9 9 0 1 1-9-9z"></path>
            </svg>
          )}
        </span>
      </button>

      <a
        href="https://github.com/dibyajyoti-ganguly/Hikari"
        className={`inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-2.5 text-xs font-bold transition-colors duration-500 ease-in-out sm:px-3 sm:text-sm ${
          isDark
            ? "bg-white text-zinc-950"
            : "bg-zinc-950 text-white"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-external-link h-4 w-4 sm:mr-1.5"
          aria-hidden="true"
        >
          <path d="M15 3h6v6"></path>
          <path d="M10 14 21 3"></path>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        </svg>
        <span className="hidden sm:inline">Contribute</span>
      </a>
    </div>
  );
};

export default Links;
