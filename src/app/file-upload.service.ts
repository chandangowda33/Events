import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private uploadUrl = 'http://127.0.0.1:3000/api/v1/upload/event';

  constructor(private http: HttpClient) {}

  uploadFile(formData: FormData): Observable<any> {
    console.log('in service');
    console.log(formData);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.uploadUrl, formData, { headers });
  }

  // uploadFile(file: File): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': file.type });

  //   return this.http.post(this.uploadUrl, file, { headers });
  // }

  // uploadFiles(files: File[]): Observable<any> {
  //   const requests: Observable<any>[] = files.map((file) =>
  //     this.uploadFile(file)
  //   );
  //   return forkJoin(requests);
  // }
}
