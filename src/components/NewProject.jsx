import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const modal = useRef();

  function handleInputDetail() {
    const inputTitle = title.current.value;
    const inputDescription = description.current.value;
    const inputDate = date.current.value;

    if (inputTitle.trim() === "" || inputDescription.trim() === "" || inputDate.trim() === "") {
      modal.current.open();
      return;
    }

    onAdd({
      title: inputTitle,
      description: inputDescription,
      date: inputDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonLabel={"okay"} className="p-10 backdrop:bg-stone-900/90 rounded-md">
        <h2 className="text-3xl text-stone-800 font-bold">Invalid Input</h2>
        <p className="text-stone-500 text-lg font-semibold py-4">Oops... looks like you forget to enter some value.</p>
        <p className="text-stone-500 text-lg font-semibold">Please make sure that you provide valid input value for every input field.</p>
      </Modal>

      <div className="w-full mt-20 pe-10">
        <menu className="flex justify-end items-center gap-8">
          <button onClick={onCancel} className="text-xl text-stone-800 hover:text-stone-900 font-semibold">
            Cancel
          </button>
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
    </>
  );
}
