import { apiNews } from '~/api/news-api';
import { useQuery } from '@tanstack/react-query';
import { newsQueryKeys } from '~/api/news/news-query-keys';

const getNewsFn = async () => {
  const response = await apiNews.get('');
  return response.data;
};

export function useNews() {
  return useQuery({
    queryKey: newsQueryKeys.all,
    queryFn: getNewsFn,
  });
}