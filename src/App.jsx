import React from "react";

const App = () => {
  return (
    <div className="h-screen w-screen bg-black flex items-center flex-col">
      <div className="h-[21%] w-[26%] rounded-3xl  border-white border-2 mt-16 flex justify-around items-center">
        <div className="text-white font-semibold">
          <h1 className=" text-3xl">TASK DONE</h1>
          <p>Keeps It Up</p>
        </div>
        <div className="w-[100px] h-[100px] bg-green-500 flex justify-center items-center rounded-full text-3xl text-white">
          1/3
        </div>
      </div>

      {/*  */}

      <form className="m-5 w-[25%] flex justify-between  ">
        <input
          placeholder="Write Your Next Task....."
          className="px-11 py-2 bg-zinc-700 text-white outline-none rounded-xl w-[85%]"
          type="text"
        />
        <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[50px] h-[50px] bg-green-500 rounded-full ml-2">
          <i className="ri-add-fill"></i>
        </button>
      </form>

      {/*  */}

      <ul className="list-none w-[25%]">
        <li className="mb-5 flex justify-between items-center border rounded-xl p-5">
          <div className="flex items-center">
            <div className="mr-4 rounded-full w-[30px] h-[30px] border border-green-700"></div>
            <h1 className="text-3xl font-extrabold text-white">Task 1</h1>
          </div>

          <div className="flex gap-3 text-2xl text-white">
            <i className="ri-file-edit-line"></i>
            <i className="ri-delete-bin-3-line"></i>
          </div>
        </li>

        <li className="mb-5 flex justify-between items-center border rounded-xl p-5">
          <div className="flex items-center">
            <div className="mr-4 rounded-full w-[30px] h-[30px] border border-green-700"></div>
            <h1 className="text-3xl font-extrabold text-white">Task 2</h1>
          </div>

          <div className="flex gap-3 text-2xl text-white">
            <i className="ri-file-edit-line"></i>
            <i className="ri-delete-bin-3-line"></i>
          </div>
        </li>

        <li className="mb-5 flex justify-between items-center border rounded-xl p-5">
          <div className="flex items-center">
            <div className="mr-4 rounded-full w-[30px] h-[30px] border border-green-700"></div>
            <h1 className="text-3xl font-extrabold text-white">Task 3</h1>
          </div>

          <div className="flex gap-3 text-2xl text-white">
            <i className="ri-file-edit-line"></i>
            <i className="ri-delete-bin-3-line"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default App;
