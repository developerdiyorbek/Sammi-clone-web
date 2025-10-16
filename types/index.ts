export interface ICourse {
  title: string;
  slug: string;
  thumbnail: string;
}

export interface ISourceCode {
  _id: string;
  title: string;
  repository_url: string;
}

export interface UserType {
  email: string;
  firstName: string;
  lastName: string;
}
