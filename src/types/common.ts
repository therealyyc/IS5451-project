export interface User {
  uguid: string,
  username: string,
  firstname: string,
  lastname: string,
  position: string,
}

export interface UploadFile {
  fileId: string,
  filename: string,
  fileUploadTime: Date,
  googleDocLink?: string,
}

export interface GooglelinkFile {
  fileId: string,
  filename: string,
  googleDocLink: string,
}