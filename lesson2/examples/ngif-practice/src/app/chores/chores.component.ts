import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher'];
   finishedChores = ['Complete LaunchCode prep work', 'Buy groceries', 'Clean kitchen', 'Call mom'];

   targetImage = 'https://www.launchcode.org/assets/employer_services/bullseye-green-9a33ae68cfaec985fea44ea64d26b41ec896ecdb30fee708815b9ef333328df3.png';

   constructor() { }

   ngOnInit() {
   }

}
