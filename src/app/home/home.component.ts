import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }

  trendingMovies: any = [];
  theatreMovies: any = [];
  popularMovies: any=[];
  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheaterMovies();
    this.getPopularMovies();
    //this.callapi();
    //this.getMethod();
    //this.allApi();
  }
  getTrendingMovies() {
    this.http
      .get('assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
        console.log(movies);
      });
  }

  getTheaterMovies() {
    this.http
      .get('assets/data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
        console.log(movies);
      });
  }

  getPopularMovies() {
    this.http
      .get('assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
        console.log(movies);
      });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }

  /*callapi(){
    this.http.get('popular-movies.json').subscribe(res=>{
     console.log(res)
    })
  }

  allApi(){
    this.auth.getApi().subscribe(res=>{
      console.log(res)
     })
  }

  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data)=>{
      console.log(data);
    });
  }*/

}
