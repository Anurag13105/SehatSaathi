import React from 'react';
import Link from "next/link";


const Page = () => {
  return (
    <>
    <div className='h-[70px] bg-[#004171]'>

    </div>
      <main className="flex h-[500px] mx-auto w-[1200px] justify-center items-center ">
        <div className='flex-col'>
            <div className='flex-col'>
                <img src="/vector.png" alt=""className='mx-auto' />
                <h1 className="text-4xl font-bold text-[#004171]">Welcome back!</h1>
            </div>
        </div>


          <div className=" bg-white p-8 w-[400px]  rounded-lg shadow-lg">
            <p className="text-[#004171] text-2xl font-bold mb-6">FocusApp</p>
            <form>


            <div className="mb-4">
                <input type="radio" name="for_who" id="children" value="Children" />
                <label htmlFor="children" className='text-black mr-6  font-semibold'> Children</label>
                <input type="radio" name="for_who" id="parent"value="Parent" />
                <label htmlFor="parent"  className='text-black  font-semibold'> Parent</label>
              </div>

              <div className="mb-4">
                <label htmlFor="email-address" className="block text-gray-700 text-xl font-bold mb-2">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="shadow appearance-none border rounded w- py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-xl font-bold mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  // onClick={onLogin}
                >
                  Login
                </button>
              </div>
            </form>

            <p className="text-sm text-gray-600 text-center mt-6">
              No account yet?{' '}
              <Link href="/signup" className="text-blue-500 hover:text-blue-800">
                Sign up
              </Link>
            </p>
          </div>
      </main>
    </>
  );
};

export default Page;
