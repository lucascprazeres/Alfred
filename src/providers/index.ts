import { container } from 'tsyringe';
import GiphyProvider from './GifProvider/implementations/GiphyProvider';
import GifProvider from './GifProvider/models/GifProvider';

container.registerSingleton<GifProvider>('GifProvider', GiphyProvider);
