import Dial from "../ui/dial";
import CallHistory from "../ui/callHistory";
export default function Calls() {
  return (
    <main className="grid grid-flow-col grid-cols-3">
        {/* <Images /> */}
        <div className="col-span-2 text-white p-2 border-r-2 border-black">
          <p className="text-white font-bold text-2xl px-10 pt-14">Calls</p>
          <CallHistory />
        </div>

        <div className="col-span-1">
          <Dial />
        </div>
    </main>
  );
}
