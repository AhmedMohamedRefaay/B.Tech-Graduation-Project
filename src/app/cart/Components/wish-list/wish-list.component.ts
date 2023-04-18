import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../Services/wish-list.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  UserID: number=0;
  wishlist: any[] = [];

  constructor(private wishlistService: WishListService,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    // Get the current user ID from the authentication service
    // this.UserID = 1; // Replace with your authentication service logic
    var userid = localStorage.getItem('currentUserId');
    if(userid != null){
    this.http.get<any>(`http://localhost:5011/api/WishList/GetWishList/${userid}`).subscribe(data=>{
      // this.UserID= parseInt(userid);
       console.log(data);
    })
  }else
  {
    this.route.navigate(['/Acount'])

  }
  }

  }


