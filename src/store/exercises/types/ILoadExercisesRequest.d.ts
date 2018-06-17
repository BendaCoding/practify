declare interface IExercise {
  name: string;
  description: string;
}

declare type ILoadExercisesRequest = IExercise[];
