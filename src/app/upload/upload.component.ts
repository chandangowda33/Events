import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, timestamp } from 'rxjs/operators';
import { FileUploadService } from '../file-upload.service';

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
  selectedEvent: any = null;
  selectedPrice: any = null;
  selectedTheme: any = null;
  response: any;
  selectedItems: any = null;
  uploading: boolean = false;
  items: string[] = [];

  constructor(
    private storage: AngularFireStorage,
    private fileUpload: FileUploadService
  ) {}

  onFilesSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  onSubmit() {
    this.uploading = true;
    if (
      // this.eventForm.valid &&
      this.selectedFiles &&
      this.selectedFiles.length > 0
    ) {
      this.items = this.selectedItems.split(',');
      this.uploadFiles();
    }
  }

  closeTab() {
    this.response = null;
  }

  private uploadFiles() {
    const fileUploads = [];
    for (let i = 0; i < this.selectedFiles!.length; i++) {
      const file = this.selectedFiles!.item(i);
      if (file) {
        const filePath = `dreamEvents/${
          this.selectedEvent +
          this.selectedTheme +
          Date() +
          (Math.random() * (1000 - 10) + 10)
        }`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);

        const uploadTask = task
          .snapshotChanges()
          .pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                console.log(url);
                this.downloadUrls.push(url);
                if (this.downloadUrls.length === this.selectedFiles!.length) {
                  console.log(this.downloadUrls);

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
      eventItems: this.items,
      eventPrice: this.selectedPrice,
      eventImageUrls: this.downloadUrls,
    };

    this.fileUpload.uploadFile(eventDetails).subscribe((response) => {
      this.uploading = false;
      this.response = response;
      console.log(this.response);
      this.selectedEvent =
        this.selectedTheme =
        this.selectedPrice =
        this.selectedItems =
          '';
      this.items = [];
      this.selectedFiles = null;
    });
  }
}
