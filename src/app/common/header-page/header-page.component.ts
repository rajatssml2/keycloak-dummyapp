import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ViewportScroller } from "@angular/common";
import { AuthService } from '../../_service/auth.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
  currentUrl = '';
  isLoggedIn = 'false'
  isSticky=false;
  loginUser: any = '';
  loginUserName='';
  userName: any='';
  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   this.isSticky = window.pageYOffset >= 94;
  // }

  constructor(private authService: AuthService, private scroller: ViewportScroller, private router: Router, @Inject(DOCUMENT) private document: Document) {
    this.currentUrl = this.router.url;
    console.log("this.currentUrl==",this.currentUrl)
    
   }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.pageYOffset >= 94;
    let current:any = "";
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop-150) {
      current = section.getAttribute("id"); }
  });
  console.log("current==",current)
  
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
    // if (document.body.scrollTop < 360 ||     
    //   document.documentElement.scrollTop < 360) {
    //     console.log("===",document.getElementById('nav-itm-l')?.childNodes)
    //     document.getElementById('modules1')?.classList.remove('active');
    //     document.getElementById('contact-us')?.classList.remove('active');
    //     document.getElementById('home1')?.classList.add('active');
    //   }
    
    // if (document.body.scrollTop > 360 ||     
    // document.documentElement.scrollTop > 360) {
    //   console.log("===",document.getElementById('nav-itm-l')?.childNodes)
    //   document.getElementById('home1')?.classList.remove('active');
    //   document.getElementById('contact-us')?.classList.remove('active');
    //   document.getElementById('modules1')?.classList.add('active');
    // }

    // if (document.body.scrollTop < 360 ||     
    //   document.documentElement.scrollTop < 360) {
    //     console.log("===",document.getElementById('nav-itm-l')?.childNodes)
    //     document.getElementById('modules1')?.classList.remove('active');
    //     document.getElementById('contact-us')?.classList.remove('active');
    //     document.getElementById('home1')?.classList.add('active');
    //   }
  }

  goToModule() {
    this.scroller.scrollToAnchor("modules");
  }
  goToContactUs() {
    this.scroller.scrollToAnchor("contact");
  }
  goToHome() {
    this.scroller.scrollToAnchor("home");
  }

  ngOnInit(): void {
   


    let isLogin = localStorage.getItem('isLoggedIn');
    let loginUser = localStorage.getItem('loginUser');

    let userDetails = this.authService.getLoggedUser();
    if(userDetails) {
      localStorage.setItem("isLoggedIn", 'true');
      localStorage.setItem('loginUser', 'Executive Engineer');
      localStorage.setItem("name", userDetails.name);
      this.isLoggedIn = 'true';
      this.loginUserName =userDetails.name;
      this.userName = userDetails.name;
      this.router.navigate(['/dashboard'])
    }
    
    // if(isLogin) {
    //   this.isLoggedIn = isLogin
    // }
    // if(loginUser) {
    //   this.loginUser = loginUser;
    //   this.loginUserName =loginUser;
    //   this.userName = localStorage.getItem('name')
    // }
    // if(this.loginUser=='state_officer') {
    //   this.loginUserName = 'State Officer'
    // } else if(this.loginUser=='state_manager') {
    //   this.loginUserName = 'State Manager'
    // } else if(this.loginUser=='iva') {
    //   this.loginUserName = 'IVA'
    // } else if(this.loginUser=='morth_manager') {
    //   this.loginUserName = 'MoRTH Manager'
    // }
    console.log("isLogin=",this.isLoggedIn)
  }

  onLogOut() {
    // this.userService.onLogout();
    // this.router.navigate(['/']);
    this.authService.logOut();
  }
  onClickBell() {
    this.router.navigate(['/proposal-list'])
  }

  onLogin() {
    this.router.navigate(['/dashboard'])
  }

}
