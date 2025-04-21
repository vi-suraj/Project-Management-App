import { useRef } from "react";
import Input from "./Input";

export default function NewProject({onAdd}) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleInputDetail() {
    const inputTitle = title.current.value;
    const inputDescription = description.current.value;
    const inputDate = date.current.value;

    onAdd({
      title: inputTitle,
      description: inputDescription,
      date: inputDate,
    });
  }

  return (
    <div className="w-[35rem] mt-20">
      <menu className="flex justify-end items-center gap-8">
        <button className="text-xl text-stone-800 hover:text-stone-900 font-semibold">Cancel</button>
        <button onClick={handleInputDetail} className="text-xl bg-stone-800 text-stone-400 rounded-lg px-6 py-2 hover:text-stone-200 hover:bg-stone-700 font-semibold">
          Save
        </button>
      </menu>
      <div>
        <Input ref={title} type="text" label={"Title"} />
        <Input ref={description} label={"Description"} textarea />
        <Input ref={date} type="date" label={"Due Date"} />
      </div>
    </div>
  );
}
