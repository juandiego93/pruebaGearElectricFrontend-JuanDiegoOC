import { Component, OnInit } from '@angular/core';
import { AsistentesService } from '../../services/asistentes.service';
declare var alertify: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public AllAsistentes = []
  public _stringToSearch: string

  constructor(private asistentesService: AsistentesService) {
    this.__getAllAsistentes()
    this._stringToSearch = ''
  }

  ngOnInit(): void {
  }

  public searchUsersByFields() {
    const auxArray = this.AllAsistentes
    const arrayWithFilter = auxArray.filter((value) => {
      if ((value.name == this._stringToSearch) || (value.document == this._stringToSearch) || (value.email == this._stringToSearch)) {
        return value
      }
    })
    if (arrayWithFilter.length > 0) {
      this.AllAsistentes = arrayWithFilter
    } else if (this._stringToSearch == '') {
      this.__getAllAsistentes()
    }
  }

  public deleteSomeUser(user) {
    alertify.confirm(
      `Are you sure you want to eliminate ${user.name} ${user.lastname} ?`,
      `If you delete the user there is no way to recover the information. `,
      () => {
        alertify.success('User deleted successfully')
        this.asistentesService.deleteUserById(user._id)
          .subscribe(data => {
            this.__getAllAsistentes()
          },
            (error) => {
              console.log(error)
              alertify.error('An error occurred')
            })
      },
      () => { alertify.error('Action cancelled') });
  }

  private __getAllAsistentes(): void {
    this.asistentesService.getAllAsistentes()
      .subscribe((response: any) => {
        this.AllAsistentes = response
      })
  }


}
