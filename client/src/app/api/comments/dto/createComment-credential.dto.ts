export default class CreateCommentDto {
  id!: number;

  comment!: string;

  createdAt!: Date;

  updatedAt!: Date;

  author!: number;

  post!: number;
}
