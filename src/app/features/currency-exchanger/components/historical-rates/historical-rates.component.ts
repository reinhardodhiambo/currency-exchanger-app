import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from "chart.js/auto";
import {ExchangerApiService} from "@features/currency-exchanger/services/api/exchanger-api.service";
import {CurrencyExchangerService} from "@features/currency-exchanger/services/data/currency-exchanger.service";

@Component({
  selector: 'app-historical-rates',
  templateUrl: './historical-rates.component.html',
  styleUrls: ['./historical-rates.component.css']
})
export class HistoricalRatesComponent implements OnInit {
  public chart: any;

  from: string = "";
  to: string = "";

  constructor(protected eas: ExchangerApiService, private ces: CurrencyExchangerService) {
    Chart.register(...registerables);
  }

  createChart() {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(endDate.getFullYear() - 1);
    const end_date = endDate.toISOString().slice(0, 10);
    const start_date = startDate.toISOString().slice(0, 10);

    const param = {
      start_date: start_date,
      end_date: end_date,
      symbols: `${this.from},${this.to}`
    }

    const sub = this.eas.getTimeSeries(param).subscribe({
      next: (res: any) => {
        if (res.success === true) {

          const highestDates: { [month: string]: string } = {};

          for (const date of Object.keys(res.rates)) {
            const [year, month, day] = date.split("-");
            const monthKey = `${year}-${month}`;
            if (!highestDates[monthKey] || day > highestDates[monthKey].split("-")[2]) {
              highestDates[monthKey] = date;
            }
          }

          let fromRates: any[] = [];
          let toRates: any[] = [];
          let labels: string[] = [];

          Object.values(highestDates).forEach((date) => {
            const dateArray = date.split("-");
            const newDate = new Date(Number(dateArray[0]), Number(dateArray[1]) - 1, Number(dateArray[2]));
            const month = newDate.toLocaleString('default', {month: 'long'});
            labels.push(`${month} ${dateArray[0]}`)
            toRates.push(res.rates[date][this.to])
            fromRates.push(res.rates[date][this.from])
          });

          this.chart = new Chart("MyChart", {
            type: 'line', //this denotes tha type of chart

            data: {// values on X-Axis
              labels: labels,
              datasets: [
                {
                  label: this.to,
                  data: toRates,
                  backgroundColor: 'blue'
                },
                {
                  label: this.from,
                  data: fromRates,
                  backgroundColor: 'green'
                }
              ]
            },
            options: {
              aspectRatio: 2.5
            }

          });

          this.chart.render();
        }
      },
      complete: () => {
        sub.unsubscribe();
      }
    });

  }

  ngOnInit(): void {
    this.ces.conversion$.subscribe((value) => {
      this.from = value.from;
      this.to = value.to;
      this.createChart();
    });

  }
}

