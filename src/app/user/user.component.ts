import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  displayedColumns = ['id', 'firstname', 'lastname', 'username', 'email'];
  dataSource = new MatTableDataSource();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {    
        this.dataSource.data = this.userService.getUsers(); 
  }

}
