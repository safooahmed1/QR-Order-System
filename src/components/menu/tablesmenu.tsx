import Pagin from "./pagin"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function tablesmenu() {
  return (
    <>
    <div className=" items-start border  p-6 rounded-t-2xl">
      <h1 className="text-4xl ">Live Menu Items</h1>
    </div>
      <Table className=" border rounded-b-2xl p-6">
        <TableCaption className="">Live Menu Items</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagin/>
    </>
  );
}
