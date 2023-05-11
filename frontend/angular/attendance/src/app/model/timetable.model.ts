import { Modules } from './modules.model';
import { Venue } from './venue.model';

export interface Timetable {
  id: string;
  timetable_code: string;
  module_day: Date;
  time_in: string;
  time_out: string;
  module: Modules;
  venue: Venue;
}
