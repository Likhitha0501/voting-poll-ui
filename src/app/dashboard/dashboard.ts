import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  options = [
    { label: 'Angular', votes: 0 , color: 'red'},
    { label: 'React', votes: 0, color: 'blue' },
    { label: 'Veu', votes: 0, color: 'black' },
    { label: 'All', votes: 0 , color: 'pink'},
  ];
  // totalCount;
  vote(option: any) {
    option.votes++;
    // alert(option.label + ' is clicked ' + option.votes + ' times');
  }

  getPercentage(option: any){
    if(this.totalVotes === 0) return 0; 
    return Math.round((option.votes/this.totalVotes)*100);
  }
  get totalVotes(){
    return this.options.reduce((sum,opt)=> sum+opt.votes, 0);
  }

}
