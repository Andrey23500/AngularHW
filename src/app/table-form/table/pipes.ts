import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize",
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    const capitalLetter = value[0].toLocaleUpperCase();
    const othersLetter = value.slice(1);
    return capitalLetter + othersLetter.toLocaleLowerCase();
  }
}

@Pipe({
  name: "round",
})
export class RoundPipe implements PipeTransform {
  transform(value: number, count?: number): number {
    return Number(parseFloat(value.toString()).toFixed(count));
  }
}
