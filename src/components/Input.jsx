export default function Input({ label, textarea }) {
  return (
    <>
      <h2 className="text-stone-800 capitalize text-xl font-semibold">{label}</h2>
      {textarea ? <textarea className="my-2 py-2 px-4 text-stone-800 font-semibold text-xl bg-stone-200 rounded-sm w-full border-b-2 border-stone-700 outline-none"  rows={4}/> : <input type="text" className="my-2 py-2 px-4 text-stone-800 font-semibold text-xl bg-stone-200 rounded-sm w-full border-b-2 border-stone-700 outline-none"/>}
    </>
  );
}
