export const getProgress = (totalCheckIns, soldTickets) =>
  totalCheckIns < soldTickets ? (100 / soldTickets) * totalCheckIns : 100;
