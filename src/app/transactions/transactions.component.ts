import { Component, inject } from '@angular/core';
import { DataGridComponent } from '../data-grid/data-grid.component';
import { ColDef } from '../data-grid/models/col-def';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { TagComponent } from '../tag/tag.component';
import { ICellParams } from '../data-grid/models/cell-params';
import { TagParams } from '../tag/models/tag-params';
import { DateFilterComponent } from '../date-filter/date-filter.component';
import { FiltersGroupComponent } from '../filters-group/filters-group.component';
import { MultiFilterComponent } from '../multi-filter/multi-filter.component';
import { TransactionsStore } from '../stores/transactions.store';
import { CommonModule } from '@angular/common';
import { CardFilterComponent } from "../card-filter/card-filter.component";



@Component({
  selector: 'transactions',
  standalone: true,
  imports: [
    PageHeaderComponent,
    DataGridComponent,
    DateFilterComponent,
    MultiFilterComponent,
    FiltersGroupComponent,
    CommonModule,
    CardFilterComponent
],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  protected store = inject(TransactionsStore);


  colDefs: ColDef[] = [
    { field: "house", width: 150 },
    { field: "character", width: 300 },
    {
      field: "status", width: 200,
      component(params: ICellParams) {
        if (params.value === 'Lord') {
          return { component: TagComponent, params: { cssClass: 'success-tag', label: 'Processed', icon: 'checkmark' } as TagParams }
        }

        return { component: TagComponent, params: { cssClass: 'warning-tag', label: 'Under Review', icon: 'search' } as TagParams }
      }
    },
    { field: "title", width: 250 }
  ];


  rowData = [
    { house: "Stark", character: "Jon Snow", status: "Bastard of Winterfell", title: "King in the North" },
    { house: "Lannister", character: "Tyrion Lannister", status: "Dwarf", title: "Hand of the Queen" },
    { house: "Targaryen", character: "Daenerys Targaryen", status: "Exiled Princess", title: "Mother of Dragons" },
    { house: "Baratheon", character: "Stannis Baratheon", status: "Lord", title: "Lord of Dragonstone" },
    { house: "Greyjoy", character: "Theon Greyjoy", status: "Traitor", title: "Prince of the Iron Islands" },
    { house: "Tyrell", character: "Margaery Tyrell", status: "Queen", title: "Queen of the Seven Kingdoms" },
    { house: "Martell", character: "Oberyn Martell", status: "Warrior", title: "Red Viper of Dorne" },
    { house: "Bolton", character: "Ramsay Bolton", status: "Sadist", title: "Warden of the North" },
    { house: "Tully", character: "Catelyn Stark", status: "Lady", title: "Lady of Winterfell" },
    { house: "Arryn", character: "Lysa Arryn", status: "Widow", title: "Lady of the Eyrie" },
    { house: "Lannister", character: "Jaime Lannister", status: "Kingslayer", title: "Lord Commander of the Kingsguard" },
    { house: "Stark", character: "Arya Stark", status: "No One", title: "Faceless Assassin" },
    { house: "Stark", character: "Sansa Stark", status: "Lady", title: "Lady of Winterfell" },
    { house: "Baratheon", character: "Robert Baratheon", status: "King", title: "King of the Andals and the First Men" },
    { house: "Targaryen", character: "Viserys Targaryen", status: "Exiled Prince", title: "Beggar King" },
    { house: "Stark", character: "Bran Stark", status: "Three-Eyed Raven", title: "Lord of Winterfell" },
    { house: "Lannister", character: "Cersei Lannister", status: "Queen", title: "Queen of the Seven Kingdoms" },
    { house: "Greyjoy", character: "Yara Greyjoy", status: "Ironborn", title: "Lady of the Iron Islands" },
    { house: "Baratheon", character: "Renly Baratheon", status: "Lord", title: "Lord of Storm's End" },
    { house: "Tarly", character: "Samwell Tarly", status: "Maester", title: "Grand Maester" },
    { house: "Tarly", character: "Randyll Tarly", status: "Lord", title: "Lord of Horn Hill" },
    { house: "Mormont", character: "Jorah Mormont", status: "Exiled Knight", title: "Lord of Bear Island" },
    { house: "Stark", character: "Ned Stark", status: "Warden of the North", title: "Hand of the King" },
    { house: "Stark", character: "Robb Stark", status: "King in the North", title: "Young Wolf" },
    { house: "Bolton", character: "Roose Bolton", status: "Lord", title: "Lord of the Dreadfort" },
    { house: "Targaryen", character: "Rhaegar Targaryen", status: "Prince", title: "Dragon Prince" },
    { house: "Stark", character: "Lyanna Stark", status: "Lady", title: "Wolf Maid" },
    { house: "Baratheon", character: "Gendry", status: "Bastard", title: "Lord of Storm's End" },
    { house: "Martell", character: "Doran Martell", status: "Prince", title: "Lord of Sunspear" },
    { house: "Martell", character: "Ellaria Sand", status: "Paramour", title: "Lady of Sunspear" },
    { house: "Sand", character: "Obara Sand", status: "Bastard", title: "Sand Snake" },
    { house: "Sand", character: "Nymeria Sand", status: "Bastard", title: "Sand Snake" },
    { house: "Sand", character: "Tyene Sand", status: "Bastard", title: "Sand Snake" },
    { house: "Tarth", character: "Brienne of Tarth", status: "Knight", title: "Lady of Tarth" },
    { house: "Clegane", character: "Sandor Clegane", status: "Hound", title: "Bodyguard" },
    { house: "Clegane", character: "Gregor Clegane", status: "Mountain", title: "Ser" },
    { house: "Lannister", character: "Kevan Lannister", status: "Lord", title: "Hand of the King" },
    { house: "Tully", character: "Edmure Tully", status: "Lord", title: "Lord of Riverrun" },
    { house: "Tully", character: "Brynden Tully", status: "Blackfish", title: "Ser" },
    { house: "Greyjoy", character: "Balon Greyjoy", status: "Lord", title: "King of the Iron Islands" },
    { house: "Mormont", character: "Lyanna Mormont", status: "Lady", title: "Lady of Bear Island" },
    { house: "Hightower", character: "Olenna Tyrell", status: "Queen of Thorns", title: "Lady of Highgarden" },
    { house: "Tyrell", character: "Loras Tyrell", status: "Knight of Flowers", title: "Ser" },
    { house: "Tyrell", character: "Mace Tyrell", status: "Lord", title: "Warden of the South" },
    { house: "Freys", character: "Walder Frey", status: "Lord", title: "Lord of the Crossing" },
    { house: "Arryn", character: "Robin Arryn", status: "Lord", title: "Lord of the Eyrie" },
    { house: "Frey", character: "Lothar Frey", status: "Knight", title: "Ser" },
    { house: "Lannister", character: "Joffrey Baratheon", status: "King", title: "King of the Andals and the First Men" },
    { house: "Lannister", character: "Myrcella Baratheon", status: "Princess", title: "Princess of Dorne" },
    { house: "Lannister", character: "Tommen Baratheon", status: "King", title: "King of the Andals and the First Men" },
    { house: "Greyjoy", character: "Euron Greyjoy", status: "King", title: "King of the Iron Islands" },
    { house: "Karstark", character: "Rickard Karstark", status: "Lord", title: "Lord of Karhold" },
    { house: "Bolton", character: "Domeric Bolton", status: "Heir", title: "Lord of the Dreadfort" },
    { house: "Tarly", character: "Dickon Tarly", status: "Heir", title: "Lord of Horn Hill" },
    { house: "Stark", character: "Benjen Stark", status: "Ranger", title: "First Ranger of the Night's Watch" },
    { house: "Dayne", character: "Arthur Dayne", status: "Sword of the Morning", title: "Ser" },
    { house: "Targaryen", character: "Aegon Targaryen", status: "Conqueror", title: "King of the Andals, the Rhoynar, and the First Men" },
    { house: "Baratheon", character: "Shireen Baratheon", status: "Princess", title: "Princess of Dragonstone" },
    { house: "Stark", character: "Rickon Stark", status: "Heir", title: "Prince of Winterfell" },
    { house: "Arryn", character: "Jon Arryn", status: "Lord", title: "Warden of the East" },
    { house: "Targaryen", character: "Aerys II Targaryen", status: "Mad King", title: "King of the Andals and the First Men" },
    { house: "Lannister", character: "Tywin Lannister", status: "Lord", title: "Warden of the West" },
    { house: "Stark", character: "Eddard Stark", status: "Lord", title: "Lord of Winterfell" },
    { house: "Stark", character: "Robb Stark", status: "King in the North", title: "Lord of Winterfell" },
    { house: "Frey", character: "Rhaegar Frey", status: "Lord", title: "Heir of the Twins" },
    { house: "Targaryen", character: "Aegon VI Targaryen", status: "Prince", title: "Lord of Storm's End" },
    { house: "Martell", character: "Quentyn Martell", status: "Prince", title: "Heir of Sunspear" },
    { house: "Martell", character: "Trystane Martell", status: "Prince", title: "Lord of Sunspear" },
    { house: "Baelish", character: "Petyr Baelish", status: "Master of Coin", title: "Lord Protector of the Vale" },
    { house: "Tarth", character: "Selwyn Tarth", status: "Lord", title: "Lord of Tarth" },
    { house: "Bolton", character: "Fat Walda Bolton", status: "Lady", title: "Lady of the Dreadfort" },
    { house: "Reed", character: "Howland Reed", status: "Lord", title: "Lord of Greywater Watch" },
    { house: "Frey", character: "Walder Rivers", status: "Bastard", title: "Ser" },
    { house: "Lannister", character: "Alton Lannister", status: "Knight", title: "Ser" },
    { house: "Manderly", character: "Wyman Manderly", status: "Lord", title: "Lord of White Harbor" },
    { house: "Clegane", character: "Gregor Clegane", status: "Mountain", title: "Ser" },
    { house: "Lannister", character: "Joanna Lannister", status: "Lady", title: "Lady of Casterly Rock" },
    { house: "Arryn", character: "Elbert Arryn", status: "Heir", title: "Knight of the Eyrie" },
    { house: "Baratheon", character: "Steffon Baratheon", status: "Lord", title: "Lord of Storm's End" },
    { house: "Targaryen", character: "Maegor Targaryen", status: "King", title: "King of the Andals and the First Men" },
    { house: "Targaryen", character: "Baelor Targaryen", status: "King", title: "King of the Andals and the First Men" },
    { house: "Hightower", character: "Leyton Hightower", status: "Lord", title: "Lord of Oldtown" },
    { house: "Tully", character: "Hoster Tully", status: "Lord", title: "Lord of Riverrun" },
    { house: "Greyjoy", character: "Asha Greyjoy", status: "Ironborn", title: "Lady of the Iron Islands" },
    { house: "Karstark", character: "Alys Karstark", status: "Lady", title: "Lady of Karhold" },
    { house: "Stark", character: "Arya Stark", status: "Assassin", title: "Lady of Winterfell" },
    { house: "Targaryen", character: "Rhaenys Targaryen", status: "Princess", title: "Queen of the Seven Kingdoms" },
    { house: "Frey", character: "Roslin Frey", status: "Lady", title: "Lady of Riverrun" },
    { house: "Targaryen", character: "Viserys I Targaryen", status: "King", title: "King of the Andals and the First Men" }
  ];
}