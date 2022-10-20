import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'convertTime',
})
export class ConvertTimePipe implements PipeTransform {
    public transform(totalMinutes: number): string {
        const minutes = totalMinutes % 60;
        let hours = Math.floor(totalMinutes / 60);
        const days = Math.floor(hours / 24);
        hours = hours % 24;

        if (days) return `${days}d ${hours}h ${minutes}m`;
        if (hours) return `${hours}h ${minutes}m`;
        return `${minutes}m`;
    }
}
