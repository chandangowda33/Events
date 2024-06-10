import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FileUploadService } from '../file-upload.service';
import { Router } from '@angular/router';

interface Events {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  // eventForm: FormGroup;
  selectedFiles: FileList | null = null;
  downloadUrls: string[] = [];
  eventsArray: Events[] = [
    { value: 'marriage', viewValue: 'Marriage' },
    { value: 'birthday', viewValue: 'Birthday' },
    { value: 'engagement', viewValue: 'Engagement' },
    { value: 'naming ceremony', viewValue: 'Naming Ceremony' },
    { value: 'house welcoming', viewValue: 'House Welcoming' },
    { value: 'baby shower', viewValue: 'Baby Shower' },
    { value: 'other', viewValue: 'Other' },
  ];
  selectedEvent!: string;
  selectedPrice!: string;
  selectedTheme!: string;

  constructor(
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private http: HttpClient,
    private fileUpload: FileUploadService,
    private route: Router
  ) {
    // this.eventForm = this.fb.group({
    //   eventName: ['', Validators.required],
    //   eventTheme: ['', Validators.required],
    //   price: ['', Validators.required],
    // });
  }

  onFilesSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  onSubmitTouch(event: TouchEvent): void {
    event.preventDefault(); // Prevent the default form submission
    this.onSubmit();
  }

  onSubmit() {
    alert('yes');
    if (
      // this.eventForm.valid &&
      this.selectedFiles &&
      this.selectedFiles.length > 0
    ) {
      this.uploadFiles();
    }
  }

  private uploadFiles() {
    const fileUploads = [];
    for (let i = 0; i < this.selectedFiles!.length; i++) {
      const file = this.selectedFiles!.item(i);
      if (file) {
        const filePath = `dreamEvents/${
          this.selectedEvent + this.selectedTheme + this.selectedPrice + Date()
        }`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);

        const uploadTask = task
          .snapshotChanges()
          .pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                this.downloadUrls.push(url);
                if (this.downloadUrls.length === this.selectedFiles!.length) {
                  this.submitEventDetails();
                }
              });
            })
          )
          .subscribe();

        fileUploads.push(uploadTask);
      }
    }
  }

  private submitEventDetails() {
    const eventDetails = {
      eventName: this.selectedEvent,
      eventTheme: this.selectedTheme,
      eventPrice: this.selectedPrice,
      eventImageUrls: this.downloadUrls,
    };
    this.fileUpload.uploadFile(eventDetails).subscribe((response) => {
      console.log('Event saved successfully', response);
    });
  }
}
