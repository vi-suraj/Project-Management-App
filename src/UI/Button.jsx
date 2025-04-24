export default function Button({ children, className, ...props }) {
  return (
    <button className={`mt-8 px-5 py-3 bg-stone-700 text-stone-400 rounded-md hover:bg-stone-600 hover:text-stone-300 capitalize ${className}`} {...props}>
      {children}
    </button>
  );
}
