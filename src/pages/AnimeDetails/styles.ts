import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Banner = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const Cover = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
`;

export const InfoContainer = styled.div`
  margin-top: 20px;
`;

export const Score = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffcc00;
  margin-bottom: 10px;
`;

export const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const GenreTag = styled.span`
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
`;