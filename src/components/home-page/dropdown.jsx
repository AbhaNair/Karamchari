import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import ImgSwitch from "./user-card/img-switch";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown() {
  return (
    <Menu as="div" className="relative inline-block text-left p-4">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-md  text-white shadow-sm">
          <img
            src="avatar.png"
            alt=""
            width="60px"
            height="60px"
            className="rounded-[50%]"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-[#212327] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-[#313236] text-white" : "text-gray-100",
                    "block w-full px-4 py-2 text-left text-md bg-[#212327] "
                  )}
                >
                  Edit Profile Details
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-[#313236] text-white" : "text-gray-100",
                      "block w-full px-4 py-2 text-left text-md bg-[#212327] "
                    )}
                  >
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
