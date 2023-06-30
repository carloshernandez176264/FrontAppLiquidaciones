import { Area } from "./area.interface";
import { ContractEndDate } from "./contractEndDate.interface";
import { ContractType } from "./contractType.interface";
import { ContractStartDate } from "./contractstartDate.interface";
import { Id } from "./id.interface";
import { Identification } from "./identification.interface";
import { Name } from "./name.interface";
import { Photo } from "./photo.interface";
import { Role } from "./role.interface";
import { Salary } from "./salary.interface";


export interface Employees{
  id: Id;
  name: Name;
  identification: Identification;
  salary: Salary;
  contractType: ContractType;
  contractStartDate: ContractStartDate;
  contractEndDate: ContractEndDate;
  role: Role;
  area: Area;
  photo: Photo;
}









