const RegisterPage = () => {
  return (
    <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
      <div className="p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center">회원가입</h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              type="text"
              name="Email"
              id="Email"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              type="text"
              name="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-2 bg-black text-white rounded-md hover:bg-gray-700 duration-200"
          >
            회원가입
          </button>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            아이디가 있다면?{" "}
            <a href="/login" className="font-medium hover:underline">
              로그인
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
