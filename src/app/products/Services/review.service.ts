import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { Review } from 'src/app/cart/Models/review';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl = `http://localhost:5011/api/Review`;
  httpHeader = {};

  constructor(private http: HttpClient) {

    this.httpHeader = {
      headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'MyClientCert': '',        // This is empty
              'MyToken': ''              // This is empty
      }),
    };
   }

  getAll(productId: any): Observable<Review[]> {
    const url = `${this.apiUrl}/GetAllReview?productId=${productId}`;
    return this.http.get<Review[]>(url);
  }
  add(productId: any, review: Review): Observable<any> {
    const url = `${this.apiUrl}/CreateReview`;
    const body = {
      comment: review.comment,
      rate: review.rate,
      date: review.date,
      userId: review.userId,
      productId: productId
    };
    return this.http.post<any>(url, body,this.httpHeader);
  }


  delete(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
