import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: string;

  constructor(private movieService: MovieService, private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.myMovieList = this.movieService.getMovieList();
    this.searchResults = this.movieService.getSearchResults();
    this.movieService.loadMovieList();
    this.user = this.authenticationService.getUserName();
  }

  searchResults = [];
  myMovieList =  [];
  title = 'Angular Flix';
}