import DropDown from "./dropdown";
import SearchBox1 from "./search-box/search-box-sidebar";
import SearchBox2 from "./search-box/search-box-topbar";
import { UserCard } from "./user-card/user-card";
import { UserTree } from "./user-tree/user-tree";

export function HomePage() {
  return (
    <div className=" bg-[#111111] flex flex-col lg:flex-row sm:gap-8 lg:gap-20 h-full overflow-auto">
      <aside className="lg:fixed lg:block hidden  h-full lg:w-96 bg-[#212327] p-6 ">
        <SearchBox1 />
      </aside>
      <aside className="lg:hidden pt-20 px-16 lg:p-1">
        <SearchBox2 />
      </aside>
      <div className="flex lg:pl-[600px] flex-col gap-20  align-center  p-12 lg:p-20">
        <UserCard id={1} />
        {/* <div>
          <UserTree id="2" managerid="1" />
        </div> */}
      </div>
      <div className="fixed top-2 right-2 shadow-xl">
        <DropDown />
      </div>
    </div>
  );
}
