import HttpRequest from '@/config/requests';
import type { Doacao, DoacoesPayload, DoacoesFilter } from '@/types/doacoes-types';

export const DoacoesService = {
  getAll: () => HttpRequest.get<Doacao[]>({ url: '/doacoes' }),
  getByFilter: (filter: DoacoesFilter) => HttpRequest.get<Doacao[]>({ url: '/doacoes/filter', params: { ...filter } }),
  getById: (id: string) => HttpRequest.get<Doacao>({ url: `/doacoes/${id}` }),
  createByFilter: (filter: DoacoesFilter) => HttpRequest.post<Doacao[]>({ url: '/doacoes/filter', body: filter }),
  create: (data: DoacoesPayload) => HttpRequest.post<Doacao[]>({ url: '/doacoes/lote', body: data }),
  delete: (id: string) => HttpRequest.delete({ url: `/doacoes/${id}` }),
};
