import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface ImageInfo {
  imageName: string;
  size: string;
  recognitionResult: number;
  imageDownloadLink: string;
}
const ELEMENT_DATA: ImageInfo[] = [
  {imageName: 'Image1', size: '30KB', recognitionResult: 1.0079, imageDownloadLink: 'link1'},
  {imageName: 'Image2', size: '15KB', recognitionResult: 4.0026, imageDownloadLink: 'link2'},
  {imageName: 'Image3', size: '26KB', recognitionResult: 6.941, imageDownloadLink: 'link3'},
  {imageName: 'Image4', size: '26KB', recognitionResult: 9.0122, imageDownloadLink: 'link4'},
  {imageName: 'Image5', size: '26KB', recognitionResult: 10.811, imageDownloadLink: 'link5'},
  {imageName: 'Image6', size: '26KB', recognitionResult: 12.0107, imageDownloadLink: 'link6'},
  {imageName: 'Image7', size: '26KB', recognitionResult: 14.0067, imageDownloadLink: 'link7'},
  {imageName: 'Image8', size: '26KB', recognitionResult: 15.9994, imageDownloadLink: 'link8'},
  {imageName: 'Image9', size: '26KB', recognitionResult: 18.9984, imageDownloadLink: 'link9'},
  {imageName: 'Image10', size: '26KB', recognitionResult: 20.1797, imageDownloadLink: 'link10'},
];
@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit {

  displayedColumns: string[] = ['select', 'Image Name', 'Image Size', 'Recognition Result', 'Image Download Link'];
  dataSource = new MatTableDataSource<ImageInfo>(ELEMENT_DATA);
  selection = new SelectionModel<ImageInfo>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit(): void {
  }

}
