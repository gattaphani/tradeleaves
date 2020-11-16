import { Component} from '@angular/core';
import { TradeService } from './trade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  isShown:boolean=false;
  
  constructor(private trade:TradeService){

  }
  ngOnInit() {
    this.getAll();
  }
  

  posts:any=[]
  public sucesspost = "text-posts"
  getAll(){
    this.trade.getPosts().subscribe(res=>{
    this.posts=res;
    console.log('post',this.posts)
    })
  }
  obj:any=[]
  createTrade(post){
    this.trade.createPost(post).subscribe(post=>{
      this.obj=post;
      console.log('post',this.obj)
    })
  }
}
