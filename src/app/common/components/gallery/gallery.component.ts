import {
  Component
} from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  public slides = [
    'https://images.unsplash.com/photo-1610991594328-3be38d15f395?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1611410873373-10927f7e1bef?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eEh4WVRNSExnT2N8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1611494424027-8e6fecf959ea?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHhIeFlUTUhMZ09jfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1611139905317-0381a974fd5a?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8eEh4WVRNSExnT2N8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1611147533125-9ca445f32036?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHhIeFlUTUhMZ09jfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1611431182735-68e6ffb168dd?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHhIeFlUTUhMZ09jfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  ];
  public disabled: boolean = false;
  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    observer: true,
    keyboard: true,
    mousewheel: true,
    scrollbar: true,
    navigation: false,
    pagination: false,
    height: 100,
  };
  constructor() {}

  public onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }
}
