import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-recording-upload',
  styleUrls: ['./recording-upload.component.css'],
  templateUrl: './recording-upload.component.html'
})
export class RecordingUploadComponent implements OnInit {
  uploadFile: any = null;
  errorMessage: string = '';
  recordings: any[] = [];

  acceptedTypes = ['audio/mpeg', 'audio/wav', 'audio/mp4', 'audio/x-m4a', 'audio/webm', 'audio/ogg'];

  ngOnInit() {
    // replace this with an actual fetch from backend
    this.recordings = [
    ];
  }

  onUploadFile(event: any) {
    const file = event.target.files[0];
    if (!file) {
      this.errorMessage = 'No file selected.';
      this.uploadFile = null;
      return;
    }

    if (!this.isRecordingFile(file)) {
      this.errorMessage = 'Invalid file type. Please upload a recording (e.g., mp3, wav, m4a).';
      this.uploadFile = null;
    } else {
      this.uploadFile = file;
      this.errorMessage = '';
    }
  }

  onSubmit() {
    if (!this.uploadFile) {
      this.errorMessage = 'Please select a recording to upload.';
      return;
    }

    // Simulate upload by adding to recordings array
    const newRecording = {
      name: this.uploadFile.name,
      url: URL.createObjectURL(this.uploadFile)
    };
    this.recordings.push(newRecording);

    this.uploadFile = null;
    this.errorMessage = '';
  }

  isRecordingFile(file: File): boolean {
    return this.acceptedTypes.includes(file.type);
  }
}
