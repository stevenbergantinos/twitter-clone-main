import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function Trending() {
  return (
    <div className="hidden lg:flex flex-col ml-7 mt-4">
      <div
        className="flex space-x-3 bg-white bg-opacity-10
            w-[300px] h-[44px] p-3 rounded-3xl
            "
      >
        <SearchIcon className="w-6 text-gray-600" />
        <input
          className="bg-transparent
                focus:outline-none
                placeholder:text-gray-600
                "
          placeholder="Search Twitter"
        />
      </div>
      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">What's happening</h1>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Sports • Trending</p>
          <h1 className="text-[15px] font-bold">NBA</h1>
          <p className="text-xs text-gray-500">50.2K Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Sports • Trending</p>
          <h1 className="text-[15px] font-bold">New York Giants</h1>
          <p className="text-xs text-gray-500">10.1K Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending</p>
          <h1 className="text-[15px] font-bold">Michael Jackson</h1>
          <p className="text-xs text-gray-500">105K Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">New York City</h1>
          <p className="text-xs text-gray-500">340K Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending • Cars</p>
          <h1 className="text-[15px] font-bold">Toyota</h1>
          <p className="text-xs text-gray-500">7.3K Tweets</p>
        </div>
      </div>
      <div className="w-[300px] h-[300px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">Who to follow</h1>

        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/nba.jpg"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">NBA</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@NBA</h1>
            </div>
          </div>

          <button
            className="bg-white text-black text-sm w-20 
          rounded-3xl font-bold
          h-8"
          >
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/twitter.png"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Twitter</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@Twitter</h1>
            </div>
          </div>

          <button
            className="bg-white text-black text-sm w-20 
          rounded-3xl font-bold
          h-8"
          >
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/bruno.jpg"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Bruno Mars</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@BrunoMars</h1>
            </div>
          </div>

          <button
            className="bg-white text-black text-sm w-20 
          rounded-3xl font-bold
          h-8"
          >
            Follow
          </button>
        </div>

        
      
      </div>


    </div>
  );
}
