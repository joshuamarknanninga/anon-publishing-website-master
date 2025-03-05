export default function RetroButton({ children, onClick }) {
    return (
      <button 
        onClick={onClick}
        className="px-6 py-3 bg-cyan-400 border-4 border-black 
          font-mono text-lg shadow-[4px_4px_0_0_#000] 
          hover:shadow-[2px_2px_0_0_#000] transition-shadow"
      >
        {children}
      </button>
    )
  }