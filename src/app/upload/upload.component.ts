import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  eventForm: FormGroup;
  selectedFiles: File[] = [];
  downloadURLs: string[] = [];

  constructor(
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private http: HttpClient
  ) {
    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      eventTheme: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  async uploadFile(file: File) {
    const filePath = `events/${this.eventForm.get('eventName')?.value}_${
      file.name
    }`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    await task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef.getDownloadURL().subscribe((url) => {
            this.downloadURLs.push(url);
          })
        )
      )
      .toPromise();
  }

  async onSubmit() {
    this.downloadURLs = [];
    if (this.eventForm.valid) {
      for (const file of this.selectedFiles) {
        await this.uploadFile(file);
      }
      const formData = {
        ...this.eventForm.value,
        images: this.downloadURLs,
      };
      console.log(formData);

      // this.http
      //   .post('https://your-mongodb-api-endpoint', formData)
      //   .subscribe((response) => {
      //     console.log('Data saved successfully', response);
      //   });
    }
  }
}
