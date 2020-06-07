import { UserStoreData } from 'data/entities/user/types';
import { Article } from 'data/entities/article/types';

export interface ArticlesProps {
    userEmail: UserStoreData['email'];
    onGoBack: () => void;
    onFetchUserArticles: () => void;

    userArticles?: Partial<Article>[];
}
