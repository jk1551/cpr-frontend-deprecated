import Cookies from 'js-cookie';
import React from 'react'
import { useState } from 'react';

const CreateItem = () => {

  const [inputValues, setInputValues] = useState({
    title: 'testing2', description: 'testing', quantity: 3, price: 10.00
  });

  console.log(inputValues);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  async function handleOnSubmit(e) {
    e.preventDefault();
    const payload = { "data": inputValues };
    const jwt = Cookies.get('jwt');
    const login = await fetch(`http://localhost:1337/api/items`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
    },
    body: JSON.stringify(payload),
})
const res = await login.json();
console.log(res);

}

  return (
<form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
        Title
      </label>
      <input
      onChange={handleOnChange}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" type="text" placeholder="AED" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
        Description
      </label>
      <input
      onChange={handleOnChange}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" type="text" placeholder="Doe" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="quantity">
        Quantity
      </label>
      <div className="relative">
        <select 
        onChange={handleOnChange}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantity" type="number">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
        Price
      </label>
      <input 
      onChange={handleOnChange}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" type="number" placeholder="90210" />
    </div>
    <div>
				<button 
                onClick={handleOnSubmit}
                type="button" 
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-lime-400 dark:text-gray-900">Create Item</button>
			</div>
  </div>
</form>
  )
}

export default CreateItem