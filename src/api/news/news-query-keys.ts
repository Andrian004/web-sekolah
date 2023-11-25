export const newsQueryKeys = {
    all: [''],
    details: () => [...newsQueryKeys.all, 'detail'],
    detail: (id: number) => [...newsQueryKeys.details(), id],
    pagination: (page: number) => [...newsQueryKeys.all, 'pagination', page],
    infinite: () => [...newsQueryKeys.all, 'infinite'],
  };