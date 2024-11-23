import * as noticeRepository from "../repositorys/noticeRepositorys.js";
import participationRepository from "../repositorys/participationRepositorys.js";
const getNotice = async (
  userId,
  festivalId,
  page,
  pageSize,
  orderBy,
  order
) => {
  const festivalUser = await participationRepository.participationCheck(
    userId,
    festivalId
  );

  if (!festivalUser) {
    throw new Error("참여자가 아닙니다.");
  }
  const data = await noticeRepository.getNotice(
    festivalId,
    page,
    pageSize,
    orderBy,
    order
  );
  return data;
};

const createNotice = async (userId, festivalId, userRole, content) => {
  if (userRole !== "ADMIN") {
    throw new Error("관리자가 아닙니다.");
  }
  const festivalUser = await participationRepository.participationCheck(
    userId,
    festivalId
  );

  if (!festivalUser) {
    throw new Error("참여자가 아닙니다.");
  }

  const data = await noticeRepository.createNotice(userId, festivalId, content);
  return data;
};

export default { getNotice, createNotice };
