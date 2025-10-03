export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`${className} group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]`}
    >
      {children}
    </button>
  );
}