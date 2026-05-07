export function Credits() {
  return (
    <footer className="border-t border-gray-800 py-6 px-6 text-center">
      <p className="text-xs text-gray-600">
        Made with{" "}
        <span className="text-red-400" aria-label="love">❤</span>
        {" "}by{" "}
        <a
          href="https://hotdogtor.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-400 hover:text-violet-300 font-medium underline underline-offset-2"
        >
          Hot Dogtor
        </a>
        {" · "}
        <span className="text-gray-700">
          Built with Tailwind CSS v4 · All colors from the default palette
        </span>
      </p>
    </footer>
  )
}
