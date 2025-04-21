export default function Button({ children, ...props }) {
  return (
    <button className="mt-8 px-4 py-3 bg-stone-700 text-stone-400 rounded-md hover:bg-stone-600 hover:text-stone-300" {...props}>
      {children}
    </button>
  );
}
