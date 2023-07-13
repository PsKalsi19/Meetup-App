import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Popover = () => {
  const { setShowModal, showModal,handleSubmit } = useContext(DataContext);

  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setShowModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-xl font-bold text-gray-800">Complete your RSVP</h2>
                    <h3>Fill up details</h3>
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your name
                      </label>
                      <input
                        type="name"
                        id="name"
                        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 bg-gray-100  placeholder-gray-400"
                       
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 bg-gray-100  placeholder-gray-400 "
                       
                        required
                      />
                    </div>

                    <p className="text-gray-600">
                      * You have to make payment at the venue.
                    </p>
                    <button
                      type="submit"
                      className="w-full px-5 py-3 my-4 text-sm font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 "
                    >
                      Submit
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Popover;
