import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const TablePattern = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Role</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Jane Doe</TableCell>
        <TableCell><Badge variant="default">Active</Badge></TableCell>
        <TableCell>Admin</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>John Smith</TableCell>
        <TableCell><Badge variant="secondary">Invited</Badge></TableCell>
        <TableCell>Editor</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
