import { useState } from "react";
import { ArrowDown } from "../../components/Icons/Icons";

const TailwindTest = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectValue, setSelectValue] = useState('Option 1')

  const updateValue = (value) => {
    setSelectValue(value);
    setIsOpen(false)
  }

  return (
    <main className=" dark">
      <div className="dark:bg-slate-900 dark:text-white">
        <h1>This is a title</h1>
        <h2 className="mb-1 text-xl font-emibold">This is a subtitle</h2>
        <p className="text-base">This is a paragraph</p>
        <a href="">This is a anchor</a>
        <div className="mt-4">
          <button className="btn btn-primary ">This is a button</button>
        </div>
        <div className="mt-4">
          <button className="btn btn-secondary ">This is another button</button>
        </div>
        <div className="mt-4">
          <button disabled className="btn btn-primary ">This is a disabled button</button>
        </div>
        <div>
          <input type="text" placeholder="E-mail" />
        </div>
        <div>
          <input disabled type="text" />
        </div>
        <div>
          <input type="date" />
        </div>
        <div className="flex">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae asperiores quibusdam doloremque exercitationem. Error quia sequi at voluptate, nulla suscipit numquam neque id fuga ab tenetur, autem facere quisquam quos.</label>
        </div>
        <div>
          <select name="" id="">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </div>
        {/* <h1 className="mb-2 text-3xl font-bold">This is another a title</h1>
        <h2 className="mb-1 text-xl font-emibold">This is another subtitle</h2> */}
      </div>
      <div className="Select">
        <div className="flex items-center justify-between child" onClick={() => setIsOpen(!isOpen)}><span>{selectValue}</span>
        <div className={isOpen ? 'rotate-180 transition' : 'rotate-0 transition'}>
          <ArrowDown />
        </div>
        </div>
        {isOpen && (
          <div>
            <ul className="flex flex-col border-t divide-y">
              <li onClick={() => updateValue('Option 1')} className="child">Option 1</li>
              <li onClick={() => updateValue('Option 2')} className="child">Option 2</li>
              <li onClick={() => updateValue('Option 3')} className="child">Option 3</li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}

export default TailwindTest;