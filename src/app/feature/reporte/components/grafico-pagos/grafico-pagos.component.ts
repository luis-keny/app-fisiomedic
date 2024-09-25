import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafico-pagos',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './grafico-pagos.component.html',
  styleUrl: './grafico-pagos.component.css'
})
export class GraficoPagosComponent implements AfterViewInit {
  @ViewChild('list') list!: ElementRef;
  @ViewChild('mainContainer') mainContainer!: ElementRef;

  @Input() countList = 5;
  @Input() heightChart = 400;

  single = [
    {
      "name": "ene-18",
      "value": 240
    },
    {
      "name": "feb-18",
      "value": 300
    },
    {
      "name": "mar-18",
      "value": 150
    },
    {
      "name": "may-18",
      "value": 152
    },
    {
      "name": "abr-18",
      "value": 160
    },
    {
      "name": "jun-18",
      "value": 250
    },
    {
      "name": "jul-18",
      "value": 180
    },
    {
      "name": "ago-18",
      "value": 172
    },
    {
      "name": "set-18",
      "value": 172
    },
    {
      "name": "oct-18",
      "value": 172
    },
    {
      "name": "nov-18",
      "value": 172
    },
    {
      "name": "dic-18",
      "value": 172
    },
    {
      "name": "ene-19",
      "value": 240
    },
    {
      "name": "feb-19",
      "value": 300
    },
    {
      "name": "mar-19",
      "value": 150
    },
    {
      "name": "may-19",
      "value": 152
    },
    {
      "name": "abr-19",
      "value": 160
    },
    {
      "name": "jun-19",
      "value": 250
    },
    {
      "name": "jul-19",
      "value": 180
    },
    {
      "name": "ago-19",
      "value": 172
    },
    {
      "name": "set-19",
      "value": 172
    },
    {
      "name": "oct-19",
      "value": 172
    },
    {
      "name": "nov-19",
      "value": 172
    },
    {
      "name": "dic-19",
      "value": 172
    },
    {
      "name": "ene-20",
      "value": 240
    },
    {
      "name": "feb-20",
      "value": 300
    },
    {
      "name": "mar-20",
      "value": 150
    },
    {
      "name": "may-20",
      "value": 152
    },
    {
      "name": "abr-20",
      "value": 160
    },
    {
      "name": "jun-20",
      "value": 250
    },
    {
      "name": "jul-20",
      "value": 180
    },
    {
      "name": "ago-20",
      "value": 172
    },
    {
      "name": "set-20",
      "value": 172
    },
    {
      "name": "oct-20",
      "value": 172
    },
    {
      "name": "nov-20",
      "value": 172
    },
    {
      "name": "dic-20",
      "value": 172
    },
    {
      "name": "ene-21",
      "value": 240
    },
    {
      "name": "feb-21",
      "value": 300
    },
    {
      "name": "mar-21",
      "value": 150
    },
    {
      "name": "may-21",
      "value": 152
    },
    {
      "name": "abr-21",
      "value": 160
    },
    {
      "name": "jun-21",
      "value": 250
    },
    {
      "name": "jul-21",
      "value": 180
    },
    {
      "name": "ago-21",
      "value": 172
    },
    {
      "name": "set-21",
      "value": 172
    },
    {
      "name": "oct-21",
      "value": 172
    },
    {
      "name": "nov-21",
      "value": 172
    },
    {
      "name": "dic-21",
      "value": 172
    },
  ];

  labelYList: number[] = [];
  view: [number, number] = [20 * 400 + 40, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = false;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'ganancia';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = '';
  legendTitle: string = 'año';

  colorScheme: string | Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#2662d9']
  };

  constructor(
    private render2: Renderer2,
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    this.view = [20 * this.single.length + 40, this.heightChart];
    this.defineList();
    this.cdr.detectChanges();
    this.scrollToEnd();
    this.styleList();
  }

  private defineList() {
    const maxValue = this.getMaxValueData();
    const separateValue = Math.round(maxValue / (this.countList - 1));

    this.labelYList.push(maxValue);

    for (let i = 1; i < this.countList; i++) {
      const valueBefore = this.labelYList[i - 1];
      this.labelYList.push(valueBefore - separateValue);
    }
  }

  private styleList() {
    const paddingBottom = Math.round(this.heightChart / 8);
    const list: HTMLElement = this.list.nativeElement;
    this.render2.setStyle(list, 'padding-bottom', `${paddingBottom}px`);
  }

  private getMaxValueData(): number {
    return Math.max(...this.single.map(item => item.value));
  }

  private scrollToEnd(): void {
    const container = this.mainContainer.nativeElement;
    container.scrollLeft = container.scrollWidth;
  }
}
