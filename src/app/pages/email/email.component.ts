import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private https: HttpClient,private router:Router){ }

  ngOnInit() {
  }

  title = 'EmailTemplate';
  dataset: Details = {
    
    recipient:'',
    subject:'',
    msgBody:''
  };

  dataset1 : Details;

  

  onSubmit(){
    this.https.post<Details>('http://localhost:8080/api/sendMail', this.dataset).subscribe(
        res => {
          this.dataset = res;
          console.log(this.dataset);
          alert('Email Sent successfully');
          
          this.dataset.recipient = '';
          this.dataset.subject = '';
          this.dataset.msgBody = '';
        });
    this.router.navigate(['/seller/product']);
  }
}
interface Details{
  
  recipient:string;
  subject:string;
  msgBody:string;
}




