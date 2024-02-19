export class DeleteError extends Error {
  constructor(msg = "Delete Error Occurred") {
    super(msg);
    this.name = "DeleteError";
  }
}
