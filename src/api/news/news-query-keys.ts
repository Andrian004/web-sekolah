export const newsQueryKeys = {
    all: ['news'],
    details: () => [...newsQueryKeys.all, 'detail'],
    detail: (id: number) => [...newsQueryKeys.details(), id],
    pagination: (page: number) => [...newsQueryKeys.all, 'pagination', page],
    infinite: () => [...newsQueryKeys.all, 'infinite'],
  };