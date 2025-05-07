export interface WikiApiResponse {
    extract :string
    originalimage: Image;
}

export interface Image {
    source: string;
    width: number;
    height: number;
  }

