import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-recomand",
  templateUrl: "./recomand.component.html",
  styleUrls: ["./recomand.component.scss"]
})
export class RecomandComponent implements OnInit {
  @Input() data: any;
  @Output() loadData = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
