declare interface IExercise {
  name: string;
  description: string;
  id: string;
}

declare interface ILoadExercisesResponse {
  [id: string]: IExercise;
}
