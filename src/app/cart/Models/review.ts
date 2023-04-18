export interface Review {
  productId: number,
  userId: number,
  username?:string,
  comment: string,
  rate: number,
  date:Date
}
