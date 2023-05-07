import { Component } from '@angular/core';
import { faBookOpenReader,faGauge,faGraduationCap,faClipboardUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  faBookOpenReader = faBookOpenReader;
  faGauge = faGauge;
  faGraduationCap = faGraduationCap
  faClipboardUser = faClipboardUser

}
