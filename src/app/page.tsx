export default function Home() {
  return (
    <main className="container min-h-screen max-w-full">
      <div className="min-h-screen max-w-full bg-red-700 grid place-items-center">
        <div className="min-h-fit min-w-9 bg-blue-300 border-2 border-white rounded-md">
          <div className="flex flex-row justify-around">
            <div className="">
              <h1>Vertical List</h1>
              <ul className="">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
            <div className="">
              <h1>Horizontal list</h1>
              <ul className="flex flex-row">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </div>
          <form action="" className="bg-black rounded-b-md p-4">
            <h1 className="m-1">FORM DETAILS</h1>
            <input
              className="p-2 m-1 font-medium border-2 border-red-800 rounded-md"
              type="text"
              placeholder="email"
            />
            <input
              className="p-2 m-1 font-medium border-2 border-red-800 rounded-md bg-blue-700"
              type="Submit"
            />
          </form>
        </div>
        <div className="min-h-96 min-w-96 bg-blue-300 grid place-items-center grid-cols-3 relative">
          
          <div className="min-h-full relative grid place-items-center">
            <div className="rounded-full min-h-24 min-w-24 bg-black absolute top-0 animate-upDown"></div>
          </div>
          <div className="min-h-full grid place-items-center grid-rows-2">
            <div className="h-28 w-28 bg-yellow-300 animate-rotator"></div>
            <div className="h-28 w-28 bg-yellow-300 animate-rotator"></div>
          </div>
          <div className="min-h-full relative grid place-items-center">
            <div className="rounded-full min-h-24 min-w-24 bg-black absolute top-0 animate-upDown"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
