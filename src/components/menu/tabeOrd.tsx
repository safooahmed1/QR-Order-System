import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Pagin from "@/components/menu/pagin";
type Prps = {
  id: string;
  time: string;
  tableNumber: string;
};
type text ={
    prps:Prps[]
}
export default function tabeOrd({ prps }: text) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="border-[#d8ddda] hover:bg-transparent">
            <TableHead className="h-12 pl-6 text-xs font-bold uppercase text-[#022925]">
              Order ID
            </TableHead>
            <TableHead className="h-12 text-xs font-bold uppercase text-[#022925]">
              Table Number
            </TableHead>
            <TableHead className="h-12 text-xs font-bold uppercase text-[#022925]">
              Total Price
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {prps.map((el) => (
            <TableRow>
              <TableCell>{el.id}</TableCell>
              <TableCell>{el.time}</TableCell>
              <TableCell>{el.tableNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Pagin />
      </Table>
    </>
  );
}
