import { Component } from '@angular/core';
// import employyeList from "../employyeList.json"
import {UsersDataService} from "../services/users-data.service"
import { HttpClient } from '@angular/common/http';

interface EMPLOYYELIST{
 
  EmployeeName: string;
Id: string;
StarTimeUtc: string;
EndTimeUtc: string;
totalTime:string;
  
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  users:EMPLOYYELIST[]=[];
  employeeTotalTimes: any = [];
  data: any = [];
 

  constructor(private userData:UsersDataService)
  {
userData.users().subscribe((data:any)=>{
 this.users=data
 console.warn("data",data)
 this.calculateTotalTimes();
});

  }
  calculateTotalTimes() {
    this.employeeTotalTimes = this.data.map((employee: any) => {
      const startTime = new Date(employee.StarTimeUtc);
      const endTime = new Date(employee.EndTimeUtc);

      const timeDiff = endTime.getTime() - startTime.getTime();

      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      const totalTime = `${hours}h ${minutes}m ${seconds}s`;
      console.log(totalTime)

      return {
        ...employee,
        totalTime: totalTime,
      };
    });
  }


  isLessThan100Hours(totalTime: string): boolean {
    const hoursRegex = /\d+h/;
    const matchResult = totalTime.match(hoursRegex);
    
    if (matchResult) {
      const hours = Number(matchResult[0].replace('h', ''));
      return hours < 1;
    }
  
    return false;
  }

}
