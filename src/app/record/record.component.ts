import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
records: any[];
repos: any[];

  constructor(private recordsService: RecordsService) {
    this.recordsService.getRecordData().subscribe(records => {
      console.log(records);
      this.records = records;
    });

    this.recordsService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
   }

  ngOnInit() {
  }

}
