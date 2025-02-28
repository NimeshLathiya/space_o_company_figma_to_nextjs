// pages/index.js
import Header from "../app/components/Header";
import Grid from "../app/components/Grid";
import Sidebar from "../app/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow lg:flex-row responsive-sidebar">
        <Grid />
        <Sidebar />
      </div>
    </div>
  );
}
