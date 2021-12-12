import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistentesService } from '../../services/asistentes.service';
declare var alertify: any

@Component({
  selector: 'app-create-and-update',
  templateUrl: './create-and-update.component.html',
  styleUrls: ['./create-and-update.component.css']
})
export class CreateAndUpdateComponent implements OnInit {

  private idUserParam: string = null
  public title: string
  public Form_: FormGroup
  public submited: Boolean
  public arrayTypeDocuments: any[]

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private asistentesService: AsistentesService,
    private router: Router
  ) {
    this.submited = false
    this.getTypeDocuments()
    this.constructorForm_()
    this.idUserParam = this.route.snapshot.params['id'];
    if (!this.idUserParam) {
      this.title = 'Create User'
    } else {
      this.title = 'Update User'
    }
  }

  ngOnInit(): void { }

  public sendRequestNewUser() {
    this.submited = true
    if (this.Form_.valid) {
      this.asistentesService.createNewUser(this.Form_.value)
        .subscribe(data => {
          if (data['ok']) {
            alertify.success(data['message'])
            this.router.navigate(['/']);
          }
        }, (error) => {
          alertify.error(error.message)
        })
    } else {
      alertify.error('Invalid Form. Verify the fields')
    }
  }

  private getUserByIdParam() { 
    
  }

  private getTypeDocuments() {
    this.asistentesService.getTypeDocuments()
      .subscribe(
        (typeDocuments: any) => {
          this.arrayTypeDocuments = typeDocuments
        },
        (error) => {
          alertify.error(error.message)
        })
  }

  private constructorForm_(user?) {
    this.Form_ = this.formBuilder.group({
      typeDocument: ['', [Validators.required]],
      document: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(12), Validators.pattern("^[0-9]+$"), Validators.minLength(8)]],
      status: ['', [Validators.required]],
    })
  }

}
