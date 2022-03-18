import { format } from "date-fns";

export function formataData(data: string | number | Date) : string {
  return format(new Date(data), 'dd/MM/yyyy');
}