export interface IPost {
  friendName: string;
  friendAvatar: string;
  backCameraImage: string;
  frontCameraImage: string;
}

export const friendsPostsMock: IPost[] = [
  {
    friendName: "John Doe",
    friendAvatar:
      "https://avatars.steamstatic.com/0877e0e95f77b1e283d3552a623d3026b0df9bc4.jpg",
    backCameraImage: "https://picsum.photos/200/300",
    frontCameraImage: "https://i.pravatar.cc/150?img=1",
  },
  {
    friendName: "David Doe",
    friendAvatar:
      "https://avatars.steamstatic.com/543d9a1d81da7feba61d3a6e6b19c126635d7fad.jpg",
    backCameraImage: "https://picsum.photos/201/301",
    frontCameraImage: "https://i.pravatar.cc/150?img=2",
  },
  {
    friendName: "Dan Abramov",
    friendAvatar: "https://bit.ly/dan-abramov",
    backCameraImage: "https://picsum.photos/202/302",
    frontCameraImage: "https://i.pravatar.cc/150?img=3",
  },
];
