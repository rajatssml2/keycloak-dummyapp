import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  loginUser: any = '';
  userName: any = '';
  liveChartOption: any;


  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    let userDetails = this.authService.getLoggedUser();
    if(userDetails) {
      localStorage.setItem("isLoggedIn", 'true');
      localStorage.setItem('loginUser', 'Executive Engineer');
      this.loginUser ='Executive Engineer';
      this.userName = userDetails.name;
      // this.router.navigate(['/dashboard'])
    }
  }
  

}
