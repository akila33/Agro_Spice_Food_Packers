import { Component, OnInit} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-htmltopdf',
  templateUrl: './htmltopdf.component.html',
  styleUrls: ['./htmltopdf.component.scss']
})
export class HtmltopdfComponent implements OnInit {

  orderId: any;
  btnDisabled = false;
  currentAddress: any;
  product: any;
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private data: DataService,
      private rest: RestApiService,
      private router: Router,
    ) {}
  
  
    async ngOnInit() {;

      this.activatedRoute.params.subscribe(res => {
        this.rest
          .get(`http://localhost:3030/api/product/${res['id']}`)
          .then(data => {
            data['success']
              ? (this.product = data['product'])
              : this.router.navigate(['/']);
          })
          .catch(error => this.data.error(error['message']));
      });

      try {
        const data = await this.rest.get(
          'http://localhost:3030/api/accounts/address'
        );
  
        if (
          JSON.stringify(data['address']) === '{}' &&
          this.data.message === ''
        ) {
          this.data.warning(
            'You have not entered your shipping address. Please enter your shipping address.'
          );
        }
        this.currentAddress = data['address'];
      } catch (error) {
        this.data.error(error['message']);
      }
    }


    getShortName(fullName) { 
      return fullName;
    }
  
    public captureScreen()
    {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('MYPdf.pdf'); // Generated PDF
    });
    }

}

