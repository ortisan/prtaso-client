import * as moment from 'moment'
import {PipeTransform, Pipe} from "@angular/core";
@Pipe({name: "dateTransformer"})
//FIXME ONLY FOR TESTING.. USE 'date' pipe instead
export class DateTransformerPipe implements PipeTransform {

  static DEFAULT_FORMAT: string = "DD/MM/YYYY HH:mm";

  transform(value: Date, format: string = DateTransformerPipe.DEFAULT_FORMAT): string {
    return moment(value).format(format);
  }

  parse(value: string, format: string = DateTransformerPipe.DEFAULT_FORMAT): Date {
    return moment(value, format).toDate();
  }

}

