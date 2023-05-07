import { Venue } from './venue.model';

export interface Beacon {
  id: string;
  beacon_mac_address: string;
  venue: Venue;
}
