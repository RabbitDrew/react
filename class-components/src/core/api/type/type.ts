export interface Book {
  uid: string;
  title: string;
  publishedYear: number | null;
  publishedMonth: number | null;
  publishedDay: number | null;
  numberOfPages: number | null;
  productionNumber: string | null;
  audiobookRunTime: string | null;
  audiobookPublishedYear: number | null;
  audiobookPublishedMonth: number | null;
  audiobookPublishedDay: number | null;
  anthology: boolean;
  audiobook: boolean;
  audiobookAbridged: boolean;
  biographyBook: boolean;
  ebook: boolean;
  novel: boolean;
  novelization: boolean;
  referenceBook: boolean;
  rolePlayingBook: boolean;
  stardateFrom: string | null;
  stardateTo: string | null;
  yearFrom: number | null;
  yearTo: number | null;
}

interface PageInfo {
  firstPage: boolean;
  lastPage: boolean;
  numberOfElements: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

interface SortInfo {
  clauses:[];
}

export interface IBooksResponse {
  page: PageInfo;
  sort: SortInfo;
  books: Book[];
}
