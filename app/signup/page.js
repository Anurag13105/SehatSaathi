'use client'
import Link from 'next/link'



const Page = () => {
  return (
    <>
      <main className=" h-screen mx-auto w-full max-w-lg justify-between items-center mt-28">
        <section>
          <div className=" bg-white p-8  rounded-lg shadow-lg">
            <p className="text-[#004171] text-2xl font-bold mb-6">FocusApp</p>
            <form>


              <div className="mb-4">
                <label htmlFor="email-address" className="block text-gray-700 text-xl font-bold mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  required
                  placeholder="Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email-address" className="block text-gray-700 text-xl font-bold mb-2">
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="age"
                  required
                  placeholder="Age"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email-address" className="block text-gray-700 text-xl font-bold mb-2">
                  Phone Number
                </label>
                <input
                  id="number"
                  name="number"
                  type="number"
                  required
                  placeholder="Number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email-address" className="block text-gray-700 text-xl font-bold mb-2">
                  Email Address
                </label>
                <input
                  id="Email_Address"
                  name="Email_Address"
                  type="Email_Address"
                  required
                  placeholder="Email Address"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  Sign up
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-600 text-center mt-6">
              Already have an account !!!{' '}
              <Link href="/login" className="text-blue-500 hover:text-blue-800">
                Login In 
              </Link>
            </p>


          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
