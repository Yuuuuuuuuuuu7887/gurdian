import BarChat from "@/app/components/barchat";
import NavChat from "@/app/components/navchat";
const Chatpage = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <div className="bg-white">
        <BarChat />
        <NavChat />
      </div>
    </div>
  );
};
export default Chatpage;
