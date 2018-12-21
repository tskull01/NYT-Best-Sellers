import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
data:any;
book:Book;
books:Book[] = []; 
gotData:boolean = false;
count:any = 0; 
categorys:string[] = ['combined-print-and-e-book-fiction.json','hardcover-fiction.json','combined-print-and-e-book-nonfiction.json'
, 'hardcover-nonfiction.json','paperback-nonfiction.json'];
  apiKey:string = '9a66534b56ee482ab246d719025bda6e';
  url:string = 'http://api.nytimes.com/svc/books/v3/lists/'+ this.categorys[this.count] +'?api-key=9a66534b56ee482ab246d719025bda6e';
  constructor(private http:HttpClient){}

  getData(){
  this.http.get(this.url).subscribe(
    data => this.data = data,
  err => console.log('Error'),
() => this.postData());
     for(var i = 0; i < 15; i++){
      this.book = new Book();
      this.books.push(this.book);
    }
    this.gotData = false; 
  }
  postData(){
    if(this.data != null){
    for(var i = 0; i < this.books.length ; i++){
   this.books[i].title = this.data.results.books[i].title;
   this.books[i].description = this.data.results.books[i].description;
  this.books[i].author = this.data.results.books[i].author;
    this.gotData = true;
    }
  }
  }
  setCategoryCP(){
    this.count = 0;
    this.url = 'http://api.nytimes.com/svc/books/v3/lists/'+ this.categorys[this.count] +'?api-key=9a66534b56ee482ab246d719025bda6e';
    this.clearData();
    this.getData();
    this.timeout(); 
    this.gotData = true; 
  }
  setCategoryHF(){
    this.count = 1;
    this.url = 'http://api.nytimes.com/svc/books/v3/lists/'+ this.categorys[this.count] +'?api-key=9a66534b56ee482ab246d719025bda6e';
    this.clearData();
    this.getData();
    this.timeout(); 
    this.gotData = true; 
  }
  setCategoryCPN(){
    this.count = 2;
    this.url = 'http://api.nytimes.com/svc/books/v3/lists/'+ this.categorys[this.count] +'?api-key=9a66534b56ee482ab246d719025bda6e';
    this.clearData();
    this.getData();
    this.timeout(); 
    this.gotData = true; 
  }
  setCategoryHN(){
    this.count = 3;
    this.url = 'http://api.nytimes.com/svc/books/v3/lists/'+ this.categorys[this.count] +'?api-key=9a66534b56ee482ab246d719025bda6e';
    this.clearData(); 
    this.getData();
    this.timeout();
    this.gotData = true; 
  }
  setCategoryPN(){
    this.count = 4;
    this.url = 'http://api.nytimes.com/svc/books/v3/lists/'+ this.categorys[this.count] +'?api-key=9a66534b56ee482ab246d719025bda6e';
    this.clearData(); 
    this.getData();
    this.timeout();
    this.gotData = true; 
  }
  clearData(){
    this.data = '';
    this.books.splice(0,15);
    this.gotData = false; 
  }
  timeout() {
    setTimeout(() => {
        this.timeout();
        this.postData();
    }, 50000);
} 
}
