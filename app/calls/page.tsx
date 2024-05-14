import Dial from "../ui/dial";
import CallHistory from "../ui/callHistory";
export default function Calls() {
  return (
    <main className="flex flex-col-reverse md:grid grid-flow-col grid-cols-3">
        {/* <Images /> */}
        <div className="md:col-span-2 text-white p-2 border-r-2 border-black">
          <p className="text-white font-bold text-2xl md:px-10 pt-14">Calls</p>
          <CallHistory />
        </div>

        <div className="md:col-span-1">
          <Dial />
        </div>
    </main>
  );
}
