export const getRankForPlayCount = (playCount: number) => {
  const milestones = [10, 25, 50, 75, 100, 200, 400, 600, 1000];
  let rank = 1;
  milestones.some((milestone, index) => {
    if (milestone > playCount) {
      return true;
    }
    rank = index + 2;
    return false;
  });
  return rank;
};
