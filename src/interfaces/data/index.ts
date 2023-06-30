import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface DataInterface {
  id?: string;
  data: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface DataGetQueryInterface extends GetQueryInterface {
  id?: string;
  data?: string;
  organization_id?: string;
}
