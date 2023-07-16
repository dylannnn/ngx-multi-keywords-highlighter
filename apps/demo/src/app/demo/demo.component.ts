import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { DynamicComponent } from '../dynamic-component/dynamic.component';
import { Info } from '../shared/info.class';
import { PeriodicElement } from '../shared/periodic-element.interface';
import { MOCK_PERIODIC_ELEMENT_DATA } from '../shared/periodic-element.mock';

@Component({
    selector: 'mkh-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule, NgComponentOutlet]
})
export class DemoComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<PeriodicElement>;
  columnsToDisplay = ['position', 'name', 'weight', 'symbol'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dynamicComponent = DynamicComponent;
  dynamicComponentInjector: Injector;
  dynamicComponentContent = [
    [document.createTextNode('Dynamic component in ngComponentOutlet')],
  ];

  constructor(private injector: Injector) {
    this.dynamicComponentInjector = Injector.create({
      providers: [
        {
          provide: Info,
          deps: [],
          useValue: { title: 'New title' },
        },
      ],
      parent: injector,
    });

    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.dataSource.data = MOCK_PERIODIC_ELEMENT_DATA;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  sortData(sort: Sort): void {
    const data = MOCK_PERIODIC_ELEMENT_DATA.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'position':
          return this.compare(a.position, b.position, isAsc);
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'weight':
          return this.compare(a.weight, b.weight, isAsc);
        case 'symbol':
          return this.compare(a.symbol, b.symbol, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
