import { Component, OnInit } from '@angular/core';
import { newCustomers, newOrders, skillsRate, projects } from "../chartsdata";
import * as moment from 'moment-timezone'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  newCustomersData = newCustomers;
  newOrdersData = newOrders;
  skillsRateData = skillsRate

  rows = []
  columns = []
  loadingIndicator = true;
  reorderable = true;

  time
  constructor() { 
    setTimeout(() => { // simulating backend call delay
      this.rows = projects
      this.columns = Object.keys(projects[0]).map(key => {return {prop: key}});
      this.loadingIndicator = false;
    },1500)
  }

  ngOnInit(): void {
    let curZone = moment.tz.guess();
    setInterval(()=>{
      this.time = moment.tz(moment(), curZone).format('MMMM Do YYYY, h:mm:ss a')
    },1000)
  }

}
