import React from "react";

const Card = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4" onClick={() => setShowModal(true)}>
            <div className="p-1 bg-red-200 text-red-800 w-max h-min text-sm rounded border border-red-300 my-0.8">
              Live 🔴
            </div>
            <div className="font-bold text-l mb-2">Test</div>
            <p className="text-gray-700 text-base"></p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              PAK VS IND
            </span>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Score</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    England A VS South Africa A
                    <br />
                    Updates England (15ov) 101/5 <br />
                    South Africa Day1
                    <br /> SA choose to field
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {/* <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3">
        <div className="flex overflow-hidden bg-white rounded-lg shadow">
          <div className="ml-6">
            <div className="p-1 bg-red-200 text-red-800 w-max h-min text-sm rounded border border-red-300 my-1">
              Live 🔴
            </div>
            <div>
              <h4 className="text-2xl text-gray-800 font-semibold">Live Score</h4>
            </div>
            <div className="text-gray-600 my-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              qui error
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3">
        <div className="flex overflow-hidden bg-white rounded-lg shadow">
          <div className="ml-6">
            <div className="p-1 bg-red-200 text-red-800 w-max h-min text-sm rounded border border-red-300 my-1">
              Live 🔴
            </div>
            <div>
              <h4 className="text-2xl text-gray-800 font-semibold">Live Score</h4>
            </div>
            <div className="text-gray-600 my-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              qui error
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Card;
