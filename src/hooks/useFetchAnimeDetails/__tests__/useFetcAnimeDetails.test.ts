import { renderHook, waitFor } from '@testing-library/react';
import { useFetchAnimeDetails } from '../index';
import { fetchAnimeDetails } from '../../../services/fetchAnimeDetails';

jest.mock('../../../services/fetchAnimeDetails', () => ({
  fetchAnimeDetails: jest.fn(),
}));

describe('useFetchAnimeDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve buscar detalhes do anime e atualizar o estado', async () => {
    const mockData = { id: 1, title: { romaji: 'Anime 1' } };
    (fetchAnimeDetails as jest.Mock).mockResolvedValue(mockData);

    const { result } = renderHook(() => useFetchAnimeDetails(1));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.anime).toEqual(mockData);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
    });
  });

  it('deve lidar com erro na requisição', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    (fetchAnimeDetails as jest.Mock).mockRejectedValue(new Error('Fetch error'));

    const { result } = renderHook(() => useFetchAnimeDetails(1));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.error).toBe('Erro ao carregar detalhes do anime. Tente novamente mais tarde.');
      expect(result.current.loading).toBe(false);
    });

    consoleErrorSpy.mockRestore();
  });
});
