import Image from "next/image";
import CategoryList from "../components/CategoryList";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="text-lg font-bold text-center pt-10">All categories</div>
      <CategoryList />
    </div>
  );
}
