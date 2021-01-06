import { container } from 'tsyringe';
import GiphyProvider from './GifProvider/implementations/GiphyProvider';
import GifProvider from './GifProvider/models/GifProvider';
import NewsApiProvider from './NewsProvider/implementations/NewsApiProvider';
import NewsProvider from './NewsProvider/models/NewsProvider';

container.registerSingleton<GifProvider>('GifProvider', GiphyProvider);

container.registerSingleton<NewsProvider>('NewsProvider', NewsApiProvider);
