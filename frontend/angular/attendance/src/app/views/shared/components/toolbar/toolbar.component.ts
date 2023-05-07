import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Lecturer } from 'src/app/model/lecturer.model';
import GET_LECTURER from 'src/app/queries/lecturer.query';
import { AuthService } from 'src/app/services/lecturer.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  lecturer: Lecturer | undefined;

  constructor(private apollo: Apollo, private authService: AuthService) {}
  ngOnInit(): void {
    this.apollo
      .query<{ me: Lecturer }>({ query: GET_LECTURER })
      .subscribe(({ data, loading }) => {
        if (loading === true) {
          console.log('loading.........................');
        } else {
          this.lecturer = data.me;
          console.log('lecturer name:', data.me.lecturer_full_name);
        }
      });
  }

  logout() {
    this.authService.logout();
  }
}

// .watchQuery<any>({ query: GET_LECTURER })
// .valueChanges.subscribe(({ data, loading }) => {
//   if (loading === true) {
//     console.log('loading.........................');
//   } else {
//     this.lecturer = data.me[0];
//     console.log("lecturer name:",data.me[1])
//   }
// });
