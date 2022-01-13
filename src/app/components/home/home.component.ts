import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/models/token';
import { TokenClaim } from 'src/app/services/tokenclaim.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token:Token;
  constructor(private tokenClaim:TokenClaim) { }

  ngOnInit(): void {
  }
  


}

