import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-and-update',
  templateUrl: './create-and-update.component.html',
  styleUrls: ['./create-and-update.component.css']
})
export class CreateAndUpdateComponent implements OnInit {

  private idUserParam: string = null
  public title: string

  constructor(private route: ActivatedRoute) {
    this.idUserParam = this.route.snapshot.params['id'];
    if (!this.idUserParam) {
      this.title = 'Create User'
    } else {
      this.title = 'Update User'
    }
  }

  ngOnInit(): void {
  }

}
