import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit{

  title = 'My Title';

  ngOnInit() {
    setInterval(getRandomString('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 3000);
  }


  function getRandomString(chars) {
    let res = '';
    while (res.length < 6) {
      for (let i = 0; i < chars.length; i++) {
        res += chars.charAt[Math.floor(Math.random() * chars.length)];
        return res;
      }
    }
  }
}
