import styled from "styled-components";

export const Card = styled.div<{ $imageUrl: string }>`
  background: 
    linear-gradient(to top, rgba(0, 0, 0, 0.17) 0%, rgba(0, 0, 0, 0.85) 100%),
    url(${({ $imageUrl }) => $imageUrl}) center/cover no-repeat;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 317px;
  min-height: 270px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TitleContainer = styled.div`
  flex-wrap: wrap;
  padding: 28px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: #fff;
  text-align: left;
  margin: 0 0 12px 0;
`;

export const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const GenreTag = styled.span`
  background-color: #774DC5;
  color: #E2E5E9;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
`;

export const Score = styled.span<{ $score: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 88px;
  height: 37px;
  font-weight: 400;
  color: #e2e5e9;
  background: ${({ $score }) =>
    $score < 50 ? "#E92151" : $score < 80 ? "#FFB800" : "#01ADA6"};
  border-radius: 5px;
  margin-left: auto;
`;

