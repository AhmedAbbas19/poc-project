import { Component, OnInit } from '@angular/core';
import { newCustomers, newOrders, skillsRate, projects } from "../chartsdata"

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
  constructor() { 
    setTimeout(() => { // simulating backend call delay
      this.rows = projects
      this.columns = Object.keys(projects[0]).map(key => {return {prop: key}});
      this.loadingIndicator = false;
    },1500)
  }

  ngOnInit(): void {
  }

  getRowClass(row){
    switch(row.status){
      case "pending":
        return "bg-success"
      case "released":
        return "bg-danger"
      case "review":
        return "bg-warning"
      case "comming soon":
        return "bg-info"
    }
  }

}
