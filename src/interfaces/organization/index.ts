import { ConnectivityInterface } from 'interfaces/connectivity';
import { DataInterface } from 'interfaces/data';
import { EdgeComputingInterface } from 'interfaces/edge-computing';
import { MachineInterface } from 'interfaces/machine';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  connectivity?: ConnectivityInterface[];
  data?: DataInterface[];
  edge_computing?: EdgeComputingInterface[];
  machine?: MachineInterface[];
  user?: UserInterface;
  _count?: {
    connectivity?: number;
    data?: number;
    edge_computing?: number;
    machine?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
