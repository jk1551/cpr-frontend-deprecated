import React from 'react'
import { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import { setCookie } from 'nookies'
import Router from 'next/router'

const login = () => {

    const [inputValues, setInputValues] = useState({
        identifier: '', password: ''
      });

      const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
      };

    async function handleLogin() {
        const loginInfo = inputValues;
        const login = await fetch(`http://localhost:1337/api/auth/local`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo),
    })
    const loginResponse = await login.json();

    setCookie(null, 'jwt', loginResponse.jwt , {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
    })

    Router.push('/profile')

    }

    

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm dark:text-gray-400">Sign in to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email</label>
				<input onChange={handleOnChange} type="identifier" name="identifier" id="identifier" placeholder="testuser" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
				</div>
				<input onChange={handleOnChange} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button 
                onClick={handleLogin}
                type="button" 
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-lime-400 dark:text-gray-900">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
				<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-lime-400">Sign up</a>.
			</p>
		</div>
	</form>
</div>
  )
}

export default login