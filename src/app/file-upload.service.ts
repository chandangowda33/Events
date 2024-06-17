import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private uploadUrl =
    'https://eventbackend-2vxm.onrender.com/api/v1/event/upload';

  constructor(private http: HttpClient) {}

  uploadFile(eventDetails: any): Observable<any> {
    console.log(eventDetails);

    return this.http.post(this.uploadUrl, eventDetails);
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
