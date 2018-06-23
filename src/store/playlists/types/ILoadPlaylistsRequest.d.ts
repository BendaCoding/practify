declare interface IPlaylist {
  name: string;
  description: string;
}

declare type ILoadPlaylistsRequest = IPlaylist[];
