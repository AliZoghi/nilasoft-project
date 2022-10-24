import {Injectable} from '@angular/core';
import {GetRequestOptions, RequestOptions} from '../models/api/request-options.interface';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public async getRequest<T>(options: GetRequestOptions): Promise<T | null> {
        return await ApiService.fetchRequest<T>(options, options.init);
    }
    private static async fetchRequest<T>(options: RequestOptions, init?: RequestInit): Promise<T | null> {
        const {url} = options;
        const response = await fetch(url, init);

        try {
            const data = await response.json();
            if (response.ok) return data as T;
            return null;
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}
