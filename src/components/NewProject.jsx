import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-20">
      <menu className="flex justify-end items-center gap-8">
        <button className="text-xl text-stone-800 hover:text-stone-900 font-semibold">Cancel</button>
        <button className="text-xl bg-stone-800 text-stone-400 rounded-lg px-6 py-2 hover:text-stone-200 hover:bg-stone-700 font-semibold">Save</button>
      </menu>
      <div>
        <Input label={"Title"}/>
        <Input label={"Description"} textarea/>
        <Input label={"Due Date"}/>
      </div>
    </div>
  );
}
