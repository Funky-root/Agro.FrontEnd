import { Component } from '@angular/core';
import { NgModel} from '@angular/forms';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      name: 'Оприскування компанією Львівмото',
      location: 'Львів',
      equipment: 'Трактор-обприскувач JoneDeer',
      year: 2016,
      price: 4502,
      image: 'path/to/image.jpg'
    },
    // Додайте більше об'єктів
  ];

  filters = {
    priceFrom: null,
    priceTo: null,
    region: 'Уся Україна',
    district: 'Уся Україна',
    city: 'Уся Україна'
  };

  searchQuery = '';
  filteredServices = [...this.services];
  pages = [1, 2, 3]; // Приклад сторінок

  applyFilters() {
    this.filteredServices = this.services.filter(service => {
      return (
        (!this.filters.priceFrom || service.price >= this.filters.priceFrom) &&
        (!this.filters.priceTo || service.price <= this.filters.priceTo)
      );
    });
  }

  resetFilters() {
    this.filters = {
      priceFrom: null,
      priceTo: null,
      region: 'Уся Україна',
      district: 'Уся Україна',
      city: 'Уся Україна'
    };
    this.filteredServices = [...this.services];
  }

  sort(order: string) {
    if (order === 'asc') {
      this.filteredServices.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      this.filteredServices.sort((a, b) => b.price - a.price);
    } else {
      this.filteredServices = [...this.services];
    }
  }

  search() {
    this.filteredServices = this.services.filter(service =>
      service.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  goToPage(page: number) {
    console.log('Перейти до сторінки:', page);
    // Реалізуйте логіку для пагінації
  }
}