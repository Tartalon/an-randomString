import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit{

  title = 'My Title';

  ngOnInit() {
    setInterval(() => {
      this.getRandomString()
    }, 3000);
  }


  getRandomString() {
    let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    for (let i = 0; i < str.length; i++) {
      while (res.length < 5) {
        res += str[(Math.floor(Math.random() * str.length))];
      }
    }
    return res;
  }
}
