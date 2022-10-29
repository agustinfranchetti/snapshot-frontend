export interface IPost {
  friendName: string;
  friendAvatar: string;
  backCameraImage: string;
  frontCameraImage: string;
}

export const friendsPostsMock: IPost[] = [
  {
    friendName: "John Doe",
    friendAvatar: "https://source.unsplash.com/random/100x100",
    backCameraImage: "https://source.unsplash.com/collection/1163637/800x600",
    frontCameraImage: "https://i.pravatar.cc/150?img=1",
  },
  {
    friendName: "David Doe",
    friendAvatar: "https://source.unsplash.com/random/100x100",
    backCameraImage: "https://source.unsplash.com/collection/100/400x450",
    frontCameraImage: "https://i.pravatar.cc/150?img=2",
  },
  {
    friendName: "Dan Abramov",
    friendAvatar: "https://bit.ly/dan-abramov",
    backCameraImage: "https://source.unsplash.com/collection/170727/400x450",
    frontCameraImage: "https://i.pravatar.cc/150?img=3",
  },
];
