import { Download } from "lucide-react";
import { Button } from "../ui/button";


export default function QR() {
  return (
    <div className=" grid grid-cols-1  p-6 gap-2.5 w-full">
      <h1 className="text-5xl text-black text-center">1</h1>
      <div className="h-40 bg-blue-700 w-full">

      </div>
      <Button className="bg-black">
        Download
        <Download />
      </Button>
    </div>
  )
}
