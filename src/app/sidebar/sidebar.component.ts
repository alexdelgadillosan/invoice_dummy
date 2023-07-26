import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  private collapsedStates: { [key: number]: boolean } = {};
  selectedOption: string = '';

  isCollapsed(index: number): boolean {
    return this.collapsedStates[index] || false;
  }

  toggleCollapse(index: number): void {
    this.collapsedStates[index] = !this.isCollapsed(index);

    // Set the selected option based on the index (you can modify this logic)
    switch (index) {
      case 1:
        this.selectedOption = 'Option 1 content';
        break;
      case 2:
        this.selectedOption = 'Option 2 content';
        break;
      case 3:
        this.selectedOption = 'Option 3 content';
        break;
      // Add more cases for other options if needed
      default:
        this.selectedOption = '';
        break;
    }
  }
}
